import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { ElButton, ElCard } from 'element-plus';
const app = createApp(App);
const components = [ElButton, ElCard]
components.forEach(component => {
    app.use(component)
})

console.log('global');
console.log(global);

app.use(store).use(router).mount("#app");
