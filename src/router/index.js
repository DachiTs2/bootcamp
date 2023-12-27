import { createRouter, createWebHistory } from "vue-router";
import Index from "../pages/Index.vue";
import SingleBlog from "../pages/SingleBlog.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", name: "index", component: Index },
    { path: "/blog/:id", name: "single-blog", component: SingleBlog },
  ],
});

export default router;
