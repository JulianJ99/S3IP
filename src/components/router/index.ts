import { createRouter as createVueRouter, createWebHashHistory, Router } from "vue-router";
import Home from "../Index.vue";
import { App } from 'vue';

export function createRouter(app: App): Router {
  return createVueRouter({
    routes: [
      {
        path: "/",
        name: "home",
        component: Home
      },
    ],
    history: createWebHashHistory()
  })
}
