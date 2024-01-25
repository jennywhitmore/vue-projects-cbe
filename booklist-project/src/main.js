import { createApp } from "vue";
import App from "./App.vue";
import "./assets/global.css";

//import WhateverComponent from "@components/WhateverComponent.vue";

const app = createApp(App);
//app.component("WhateverComponent", WhateverComponent);
app.mount("#app");
