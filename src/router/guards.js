import NProgress from "nprogress";

const startNProgress = (to, from, next) => {
    NProgress.start();
    next();
};
const endNProgress = (to, from) => {
    NProgress.done();
};

/**
 * @description: 前置守卫
 * @param {*}
 * @return {*}
 */
export const beforeGuards = [
    startNProgress // 开始进度条 一定放最前
];

/**
 * @description: 后置守卫
 * @param {*}
 * @return {*}
 */
export const afterGuards = [
    endNProgress // 结束进度条 一点要放在最后
];
