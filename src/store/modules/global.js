import { defineStore } from "pinia";
import logo from "@/assets/images/logo.jpeg";

export const useGlobalStore = defineStore("global", {
    state: () => ({
        locale: "zhCN",
        theme: "light",
        sideWidth: 250,

        system: {
            zhCN_name: "释空文档",
            enUS_name: "Senkoo Wiki"
        }
    }),
    actions: {
        changeTheme(theme) {
            this.theme = theme;
        }
    },
    persist: true
});
