<template>
  <div class="w-full h-auto flex justify-center items-center mt-16">
    <div class="w-5/6 h-auto grid grid-cols-3 gap-x-8 gap-y-14">
      <BlogCard v-for="blog in blogs" :key="blog.id" :blog="blog" />
    </div>
  </div>
</template>

<script setup>
import BlogCard from "./BlogCard.vue";
defineProps(["blogs"]);
</script>
