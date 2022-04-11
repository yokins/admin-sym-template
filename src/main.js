import "vfonts/RobotoSlab.css";
import "vfonts/FiraCode.css";
import "@/assets/styles/global.scss";

import { createApp } from "vue";
import bootstrap from "@/configs/bootstrap";
import App from "@/layouts/App.vue";

const app = createApp(App);

const { router } = bootstrap();

app.use(router);

app.mount("#app");
