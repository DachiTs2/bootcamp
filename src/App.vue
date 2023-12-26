<template>
  <Navbar />
  <Hero />
  <Categories />
  <BlogContainer />
</template>

<script setup>
import { onBeforeMount } from "vue";
import Hero from "./components/Hero.vue";
import BlogContainer from "./components/BlogsContainer.vue";
import Navbar from "./components/Navbar.vue";
import axios from "./helpers/axios";
import Categories from "./components/Categories.vue";
onBeforeMount(async () => {
  const { data } = await axios.get("/token");
  const token = JSON.parse(localStorage.getItem("token"));
  if (!token) {
    localStorage.setItem("token", JSON.stringify(data.token));
  }
});
</script>
