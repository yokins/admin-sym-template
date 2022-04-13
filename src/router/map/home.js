const admin = () => import("@/layouts/Admin.vue");
const dashboard = () => import("@/pages/home/Dashboard.vue");

export default {
    home: {
        path: "/",
        name: "home.self",
        redirect: "/dashboard",
        component: admin
    },
    homeDashboard: {
        path: "dashboard",
        name: "home.dashboard",
        component: dashboard
    }
};
