import { themes } from "@/utils/options";
/**
 * @description: 获取主题自定义配色
 * @param {*} theme
 * @return {*}
 */
export const getTheme = theme => {
    const defaultItem = themes[0];
    const resultItem = themes.find(item => item.key == theme);
    return resultItem ? resultItem : defaultItem;
};

/**
 * @description: 设置主题背景色
 * @param {*} color
 * @return {*}
 */
export const setThemeBackgroundColor = colors => {
    document.getElementsByTagName("html")[0].style.backgroundColor =
        colors.htmlBackgroundColor;
};

/**
 * @description: 在切换主题之后的操作
 * @param {*} theme
 * @return {*}
 */
export const afterChangeTheme = theme => {
    const colors = getTheme(theme);
    setThemeBackgroundColor(colors);
};
