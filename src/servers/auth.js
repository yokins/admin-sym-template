import { http } from "@/utils/http.js";

export default {
    login(params = { account: "", password: "" }) {
        return http.post("/login", params);
    }
};
