import { http } from "@/utils/http.js";

export default {
    home() {
        return http.get("/statistics/home");
    }
};
