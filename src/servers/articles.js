import { http } from "@/utils/http.js";

export default {
    list(params = { kind: "" }) {
        return http.get("/articles", { params });
    }
};
