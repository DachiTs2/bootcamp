<template>
  <div class="w-full h-auto flex flex-col justify-start items-start">
    <div
      @click.self="dropdownOpen = !dropdownOpen"
      class="w-full h-11 bg-white border-2 border-black/50 relative flex justify-start items-center duration-150 px-1 whitespace-nowrap overflow-x-auto no-scrollbar"
      :class="dropdownOpen ? 'rounded-t-lg' : 'rounded-lg'"
    >
      <p
        v-if="selectedCategories.length < 1"
        @click="dropdownOpen = !dropdownOpen"
        class="text-sm text-black opacity-50 ml-2 cursor-pointer"
      >
        აირჩიეთ კატეგორია
      </p>
      <div
        v-for="category in selectedCategories"
        :key="category.id"
        @click="removeSelectedCategory(category)"
        class="w-auto px-4 h-9 flex justify-center items-center rounded-md mr-1 cursor-pointer"
        :style="`background-color: ${category.background_color}; color: ${category.text_color};`"
      >
        <p class="text-sm whitespace-nowrap">{{ category.title }}</p>
      </div>
      <div class="absolute right-1 w-8 h-8 flex justify-center items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          class="relative duration-150 cursor-pointer"
          :class="dropdownOpen ? 'rotate-180' : 'rotate-0'"
          @click="dropdownOpen = !dropdownOpen"
        >
          <path
            d="M16.6004 7.45834L11.1671 12.8917C10.5254 13.5333 9.47539 13.5333 8.83372 12.8917L3.40039 7.45834"
            stroke="#292D32"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </div>
    <div
      class="w-full h-44 border-r-2 border-l-2 border-b-2 overflow-y-auto border-black/50 bg-slate-200 duration-150 origin-top"
      :class="dropdownOpen ? 'scale-y-100' : 'scale-y-0'"
    >
      <div
        v-for="category in categories"
        :key="category.id"
        @click="selectCategory(category)"
        class="w-full h-10 bg-transparent hover:bg-slate-300 duration-150 cursor-pointer flex justify-start items-center px-4"
      >
        <p class="text-sm text-black">{{ category.title }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onBeforeMount, ref } from "vue";
import axios from "../helpers/axios";
const emit = defineEmits(["select"]);
const dropdownOpen = ref(false);
const categories = ref();
const selectedCategories = ref([]);
onBeforeMount(async () => {
  const { data } = await axios.get("/categories");
  categories.value = data.data;
});
const selectCategory = (selectedCategory) => {
  categories.value = categories.value.filter((category) => {
    return category.id != selectedCategory.id;
  });
  selectedCategories.value.push(selectedCategory);
  emit("select", selectedCategory);
};
const removeSelectedCategory = (removableCategory) => {
  selectedCategories.value = selectedCategories.value.filter((category) => {
    return removableCategory.id != category.id;
  });
  categories.value.push(removableCategory);
  emit("remove", removableCategory);
};
</script>
