import { createI18n } from "vue-i18n";
import MessageZhCN from "./zhCN/index.js";
import MessageEnUS from "./enUS/index.js";
import { zhCN, dateZhCN, enUS, dateEnUS } from "naive-ui";
import "moment/dist/locale/zh-cn";

const globalLocalStorage = localStorage.getItem("global");
const globalSetting =
    globalLocalStorage && typeof globalLocalStorage == "object"
        ? JSON.parse(globalLocalStorage)
        : {};

const i18n = createI18n({
    // 这里不能拿pinia里的数据只能去 localStorage 里边拿
    locale: globalSetting?.locale || "zhCN",
    fallbackLocale: "enUS",
    messages: {
        zhCN: MessageZhCN,
        enUS: MessageEnUS
    }
});

/**
 * @description: 返回naive ui的语言设置
 * @param {*} locale
 * @return {*}
 */
export const returnNaiveUiI18n = locale => {
    switch (locale) {
        case "zhCN":
            return { default: zhCN, date: dateZhCN };
        default:
            return { default: enUS, date: dateEnUS };
    }
};

/**
 * @description: 设置
 * @param {*}
 * @return {*}
 */
export const setMoment = (moment, locale) => {
    // 切换moment的语言
    switch (locale) {
        case "enUS":
            moment.locale("en");
            break;
        case "zhCN":
            moment.locale("zh-cn");
            break;
        default:
            break;
    }
};

/**
 * @description: 一次性
 * @param {*}
 * @return {*}
 */
export const setI18n = locale => {
    setMoment(moment, locale);
    i18n.locale = locale;
};

export default i18n;
