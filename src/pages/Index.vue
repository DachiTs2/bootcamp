<template>
  <Navbar />
  <Hero />
  <Categories @select="setActiveCategory" />
  <BlogContainer :blogs="filteredBlogs ?? blogs" />
</template>

<script setup>
import Categories from "../components/Categories.vue";
import Hero from "../components/Hero.vue";
import BlogContainer from "../components/BlogsContainer.vue";
import Navbar from "../components/Navbar.vue";
import { onBeforeMount, ref, watch } from "vue";
import axiosInstance from "../helpers/axios";

const blogs = ref();
const activeCategory = ref();
const filteredBlogs = ref();
const setActiveCategory = (id) => {
  activeCategory.value = id;
};
watch(
  () => activeCategory.value,
  () => {
    if (!activeCategory) return;
    else {
      filteredBlogs.value = blogs.value.filter((blog) => {
        let categories = [];
        blog.categories.map((category) => {
          categories.push(category.id);
        });
        return categories.includes(activeCategory.value);
      });
    }
  }
);

onBeforeMount(async () => {
  const result = await axiosInstance.get("/blogs");
  blogs.value = result.data?.data;
});
</script>
