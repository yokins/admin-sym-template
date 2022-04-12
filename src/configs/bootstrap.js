import moment from "moment";
import store from "@/store/index.js";
import i18n, {  } from "@/i18n/index.js";
import { initRouter } from "@/router/index.js";
import routes from "@/router/config/sync.js";

export default (app, moment) => {

    app.config.globalProperties.$moment = moment;

    // 处理路由
    const router = initRouter({ routes });

    app.use(store);
    app.use(i18n);
    app.use(router);
};
