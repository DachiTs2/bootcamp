<template>
  <router-link
    :to="`blog/${blog?.id}`"
    class="col-span-1 h-[620px] rounded-xl overflow-hidden flex flex-col justify-start items-start"
  >
    <div class="w-full h-80 rounded-xl">
      <img
        :src="blog?.image"
        alt="Blog Image"
        class="w-full h-full object-cover object-center"
      />
    </div>
    <p class="text-black mt-6 font-medium">{{ blog?.author }}</p>
    <p class="text-[#85858D] text-xs mt-2">{{ blog?.publish_date }}</p>
    <p class="text-black text-xl mt-4 font-medium">
      {{ blog?.title }}
    </p>
    <div class="w-full h-7 space-x-4 flex justify-start items-center mt-4">
      <div
        v-for="category in blog?.categories"
        :key="category.id"
        class="w-auto px-2.5 py-1.5 bg-yellow-500/30 text-yellow-500 flex justify-center items-center rounded-3xl font-medium"
      >
        {{ category?.title }}
      </div>
    </div>
    <p class="text-[#404049] mt-4 line-clamp-2">
      {{ blog?.description }}
    </p>
    <p class="text-[#5D37F3] text-sm mt-4 font-medium">სრულად ნახვა</p>
  </router-link>
</template>
<script setup>
const props = defineProps(["blog"]);
</script>
