import axios from "axios";

const showMessage = msg => {
    window.$message.error(msg);
};

const baseConfig = {
    baseURL: import.meta.env.VITE_BASE_URL,
    timeout: 5000
};

const http = axios.create(baseConfig);

// 添加请求拦截器
http.interceptors.request.use(
    function (config) {
        // 在发送请求之前做些什么
        return config;
    },
    function (error) {
        // 对请求错误做些什么
        return Promise.reject(error);
    }
);

// 添加响应拦截器
http.interceptors.response.use(
    function (response) {
        if (response.data.code) {
            switch (response.data.code) {
                case 400:
                    showMessage(
                        response.data?.msg.join(",") || "发生了什么问题"
                    );
                    return Promise.reject(400);
                case 404:
                    showMessage(response.data?.msg.join(",") || "未找到内容");
                    return Promise.reject(404);
                case 419:
                    showMessage(response.data?.msg.join(",") || "没有权限");
                    return Promise.reject(419);
                case 500:
                    showMessage(
                        response.data?.msg.join(",") || "服务器发生波动"
                    );
                    return Promise.reject(500);
                default:
                    return response.data;
            }
        } else {
            return Promise.reject("发生未知错误，请刷新页面");
        }
        // 对响应数据做点什么
        // return response;
    },
    function (error) {
        // 对响应错误做点什么
        return Promise.reject(error);
    }
);

export { http };
