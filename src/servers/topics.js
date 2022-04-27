import { http } from "@/utils/http.js";

export default {
    list(params = { page: 1 }) {
        return http.get("/topics", { params });
    }
};
