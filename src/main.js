import { createApp } from 'vue'
import App from './App.vue'
import { createAuth0 } from '@auth0/auth0-vue';
import "highlight.js/styles/github.css";

const app = createApp(App);

app.use(
    createAuth0({
      domain: "dev-6-buklmo.us.auth0.com",
      clientId: "hvk2vri00lgEJuxl4jKC7fFakebBNVSu",
      redirect_uri: window.location.origin
    })
  );

app.mount('#app')
