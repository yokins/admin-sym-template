import { defineStore } from "pinia";
import logo from "@/assets/images/logo.jpeg";

export const useGlobalStore = defineStore("global", {
    state: () => ({
        system: {
            logo
        },
        layout: {},
        theme: {}
    }),
    actions: {},
    persist: true
});
3;
