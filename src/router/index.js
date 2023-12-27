import { createRouter, createWebHistory } from "vue-router";
import Index from "../pages/Index.vue";
import SingleBlog from "../pages/SingleBlog.vue";
import AddBlog from "../pages/AddBlog.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", name: "index", component: Index },
    { path: "/blog/:id", name: "single-blog", component: SingleBlog },
    { path: "/blog/add", name: "add-blog", component: AddBlog },
  ],
});

export default router;
