import { createRouter, createWebHistory } from "vue-router";
import index from "../views/index.vue"
// import Map from "../views/Map.vue"
import BarInfoPage from "../views/BarInfoPage.vue"; // ⬅️ 獨立的 bar 詳細頁
import Profile from "../views/UserProfile.vue";

const router = new createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", name: "index", component: index },
    // { path: "/map", name: "Map", component: Map },
    {
      path: "/bar/:barId",
      name: "BarInfoPage",
      component: BarInfoPage,
      props: true // ⬅️ 自動將 :barId 傳入元件 props
    },
    {
      path: "/Profile",
      name: "Profile",
      component: Profile,
    },
  ],
});
export default router;