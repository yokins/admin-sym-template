import "vfonts/RobotoSlab.css";
import "vfonts/FiraCode.css";
import "nprogress/nprogress.css";
import "@/assets/styles/global.scss";

import { createApp } from "vue";
import bootstrap from "@/bootstrap.js";
import App from "@/layouts/App.vue";

const app = createApp(App);

bootstrap(app);

app.mount("#app");
