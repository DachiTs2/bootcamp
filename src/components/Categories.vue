<template>
  <div class="w-full h-8 flex justify-center items-center">
    <Swiper v-bind="settings" class="w-1/2 h-full">
      <SwiperSlide
        class="!w-auto h-full px-4 py-1.5 rounded-3xl duration-150 flex justify-center items-center cursor-pointer"
        :class="activeCategory === category.id && 'border border-black'"
        :style="`background-color: ${category.background_color}80; color: ${category.text_color};`"
        :key="category.id"
        v-for="category in categories"
        @click="clickHandler(category)"
      >
        <p class="text-center text-xs">{{ category.title }}</p>
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script setup>
import { onBeforeMount, ref, watch } from "vue";
import axios from "../helpers/axios";
import { Navigation } from "swiper/modules";

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const settings = {
  slidesPerView: "auto",
  spaceBetween: 20,
  modules: [Navigation],
  navigation: {
    clickable: true,
    enabled: true,
  },
};

const emit = defineEmits(["select"]);
const categories = ref();
const activeCategory = ref();

watch(
  () => activeCategory.value,
  () => {
    emit("select", activeCategory.value);
  }
);

onBeforeMount(async () => {
  const { data } = await axios.get("/categories");
  categories.value = data.data;
});

const clickHandler = (category) => {
  if (activeCategory.value === category.id) {
    activeCategory.value = null;
  } else {
    activeCategory.value = category.id;
  }
};
</script>
