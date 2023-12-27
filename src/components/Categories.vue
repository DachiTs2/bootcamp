<template>
  <div class="w-full h-8 flex justify-center items-center">
    <div
      class="w-2/3 h-full space-x-6 whitespace-nowrap overflow-x-scroll no-scrollbar scroll-smooth"
    >
      <button
        class="w-auto h-full px-4 inline-block rounded-3xl duration-150"
        :class="activeCategory === category.id && 'border border-black'"
        :style="`background-color: ${category.background_color}80; color: ${category.text_color};`"
        :key="category.id"
        @click="activeCategory = category.id"
      >
        {{ category.title }}
      </button>
    </div>
  </div>
</template>

<script setup>
import { onBeforeMount, ref } from "vue";
import axios from "../helpers/axios";
const categories = ref();
const activeCategory = ref();
onBeforeMount(async () => {
  const { data } = await axios.get("/categories");
  categories.value = data.data;
});
</script>
