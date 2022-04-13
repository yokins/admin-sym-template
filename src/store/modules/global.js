import { defineStore } from "pinia";
import logo from "@/assets/images/logo.jpeg";

export const useGlobalStore = defineStore("global", {
    state: () => ({
        locale: "zhCN",
        theme: "light",

        system: {
            zhCN_name: "后台管理系统",
            enUS_name: "BMS"
        }
    }),
    actions: {
        changeTheme(theme) {
            this.theme = theme;
        }
    },
    persist: true
});
