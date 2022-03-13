import { createRouter, createWebHashHistory } from 'vue-router'
import LoginComponent from "../components/Index.vue"
import SecureComponent from "../views/secure.vue"

const routes = [
  {
    path: '/',
    redirect: {
        name: "login"
    }
},
{
    path: "/login",
    name: "login",
    component: LoginComponent
},
{
    path: "/secure",
    name: "secure",
    component: SecureComponent
}
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
