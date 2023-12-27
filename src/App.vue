<template>
  <Navbar />
  <Hero />
  <Categories />
  <BlogContainer />
  <RouterView />
</template>

<script setup>
import { onBeforeMount } from "vue";

import axios from "./helpers/axios";
import { RouterView } from "vue-router";
onBeforeMount(async () => {
  const { data } = await axios.get("/token");
  const token = JSON.parse(localStorage.getItem("token"));
  if (!token) {
    localStorage.setItem("token", JSON.stringify(data.token));
  }
});
</script>
