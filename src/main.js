import { createApp } from 'vue'
import App from './App.vue'
import { createAuth0 } from '@auth0/auth0-vue';
import "highlight.js/styles/github.css";
import { domain, clientId as client_id } from "./auth_config.json";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

// Import Bootstrap an BootstrapVue CSS files (order is important)
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

// Make BootstrapVue available throughout your project
const app = createApp(App);
app.use(BootstrapVue);
app.use(IconsPlugin);

app.config.productionTip = false;
app.use(
    createAuth0({
      domain,
      client_id,
      redirect_uri: window.location.origin,
    })
  );

app.mount('#app')
