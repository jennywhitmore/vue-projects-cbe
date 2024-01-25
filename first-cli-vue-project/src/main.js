import { createApp } from "vue";
import App from "./App.vue";
import "@/assets/reset.css";
import GlobalSingleFileComponent from "@/components/GlobalSingleFileComponent.vue";

const app = createApp(App);
app.component("GlobalSingleFileComponent", GlobalSingleFileComponent);
app.mount("#app");
