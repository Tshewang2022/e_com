import { createApp } from "vue";
import store from "./store";
import "./style.css";
import router from "./router";
//import "./index.css";
import App from "./App.vue";

createApp(App).use(store).use(router).mount("#app");
