import { initRouter } from "@/router/index.js";
import routes from '@/router/config/sync.js';

export default (app, routerMap) => {
    // 处理路由
    const router = initRouter({ routes });

    return {
        router
    };
};
