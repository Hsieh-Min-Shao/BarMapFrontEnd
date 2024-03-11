import { createRouter, createWebHistory } from "vue-router";
import index from "../views/index.vue"
// import Map from "../views/Map.vue"

const router = new createRouter({
    history: createWebHistory(),
    routes: [
      { path: "/", name: "index", component:index},
      // { path: "/map", name: "Map", component: Map },
    
    ],
  });
  export default router;