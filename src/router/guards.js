import NProgress from "nprogress";
import { ls } from "@/utils/lib.js";


const global = ls.get("global");

/**
 * @description: 进度条开始
 * @param {*} to
 * @param {*} from
 * @param {*} next
 * @return {*}
 */
const startNProgress = (to, from, next) => {
    NProgress.start();
    next();
};
/**
 * @description: 进度条结束
 * @param {*} to
 * @param {*} from
 * @return {*}
 */
const endNProgress = (to, from) => {
    NProgress.done();
};

/**
 * @description: 检查登录页面
 * @param {*}
 * @return {*}
 */
const checkLogin = (to, from, next) => {
    if (to.meta?.needLogin && !global?.user) {
        next({ name: "auth.login" });
    } else if (to.name == "auth.login" && global?.user) {
        next({ name: 'root.self' })
    } else {
        next();
    }
};

/**
 * @description: 前置守卫
 * @param {*}
 * @return {*}
 */
export const beforeGuards = [
    startNProgress, // 开始进度条 一定放最前
    checkLogin
];

/**
 * @description: 后置守卫
 * @param {*}
 * @return {*}
 */
export const afterGuards = [
    endNProgress // 结束进度条 一点要放在最后
];
