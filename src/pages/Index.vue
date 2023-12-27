<template>
  <Navbar />
  <Hero />
  <Categories />
  <BlogContainer :blogs="blogs" />
</template>

<script setup>
import Categories from "../components/Categories.vue";
import Hero from "../components/Hero.vue";
import BlogContainer from "../components/BlogsContainer.vue";
import Navbar from "../components/Navbar.vue";
import { onBeforeMount, ref } from "vue";
import axiosInstance from "../helpers/axios";
const blogs = ref();
onBeforeMount(async () => {
  const result = await axiosInstance.get("/blogs");
  blogs.value = result.data.data;
});
</script>
