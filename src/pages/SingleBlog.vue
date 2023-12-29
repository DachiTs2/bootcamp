<template>
  <Navbar />
  <div class="w-full h-auto flex justify-center items-center py-24">
    <div class="w-5/6 h-auto flex flex-col justify-start items-center relative">
      <div
        @click="$router.back(-1)"
        class="absolute top-0 left-0 h-10 w-10 bg-white flex justify-center items-center rounded-full cursor-pointer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="44"
          height="44"
          viewBox="0 0 44 44"
          fill="none"
        >
          <rect width="44" height="44" rx="22" fill="white" />
          <path
            d="M18 23C18.5523 23 19 22.5523 19 22C19 21.4477 18.5523 21 18 21L18 23ZM17.1929 21.2929C16.8024 21.6834 16.8024 22.3166 17.1929 22.7071L23.5569 29.0711C23.9474 29.4616 24.5805 29.4616 24.9711 29.0711C25.3616 28.6805 25.3616 28.0474 24.9711 27.6569L19.3142 22L24.9711 16.3431C25.3616 15.9526 25.3616 15.3195 24.9711 14.9289C24.5805 14.5384 23.9474 14.5384 23.5569 14.9289L17.1929 21.2929ZM18 21L17.9 21L17.9 23L18 23L18 21Z"
            fill="#1A1A1F"
          />
        </svg>
      </div>
      <div class="w-[45%] h-auto flex flex-col justify-start items-start">
        <div class="w-full h-[328px] rounded-xl overflow-hidden">
          <img
            :src="blog?.image"
            alt="Image"
            class="w-full h-full object-cover object-center"
          />
        </div>
        <p class="text-base text-black font-medium mt-5">{{ blog?.author }}</p>
        <p class="text-xs text-[#85858D] font-medium mt-2">
          {{ blog?.publish_date }} * {{ blog?.email }}
        </p>
        <p class="text-black text-[32px] font-bold mt-6">
          {{ blog?.title }}
        </p>
        <div
          class="w-full h-auto space-x-4 flex justify-start items-center mt-5"
        >
          <div
            v-for="category in blog?.categories"
            :key="category.id"
            class="w-auto h-full rounded-3xl px-2.5 py-1.5 bg-yellow-500/30 text-yellow-600 flex justify-center items-center text-sm"
            :style="`background-color: ${category.background_color}80; color: ${category.text_color}`"
          >
            {{ category.title }}
          </div>
        </div>
        <p class="text-black mt-10">
          {{ blog?.description }}
        </p>
      </div>
      <div
        v-if="releated.length > 0"
        class="w-full h-auto flex flex-col justify-start items-start mt-20 space-y-10"
      >
        <div class="w-full h-auto flex justify-between items-center">
          <p class="text-[32px] text-black font-bold">მსგავსი სტატიები</p>
          <div class="w-auto h-10 flex justify-center items-center space-x-6">
            <div
              id="prev-arrow"
              class="w-10 h-10 rounded-full flex justify-center items-center"
              :class="
                isFirstSlide ? 'bg-[#5D37F3]/20' : 'bg-[#5D37F3] cursor-pointer'
              "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                viewBox="0 0 44 44"
              >
                <path
                  d="M18 23C18.5523 23 19 22.5523 19 22C19 21.4477 18.5523 21 18 21L18 23ZM17.1929 21.2929C16.8024 21.6834 16.8024 22.3166 17.1929 22.7071L23.5569 29.0711C23.9474 29.4616 24.5805 29.4616 24.9711 29.0711C25.3616 28.6805 25.3616 28.0474 24.9711 27.6569L19.3142 22L24.9711 16.3431C25.3616 15.9526 25.3616 15.3195 24.9711 14.9289C24.5805 14.5384 23.9474 14.5384 23.5569 14.9289L17.1929 21.2929ZM18 21L17.9 21L17.9 23L18 23L18 21Z"
                  fill="#ffffff"
                />
              </svg>
            </div>
            <div
              id="next-arrow"
              class="w-10 h-10 rounded-full flex justify-center items-center"
              :class="
                isLastSlide ? 'bg-[#5D37F3]/20' : 'bg-[#5D37F3] cursor-pointer'
              "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                viewBox="0 0 44 44"
                class="rotate-180"
              >
                <path
                  d="M18 23C18.5523 23 19 22.5523 19 22C19 21.4477 18.5523 21 18 21L18 23ZM17.1929 21.2929C16.8024 21.6834 16.8024 22.3166 17.1929 22.7071L23.5569 29.0711C23.9474 29.4616 24.5805 29.4616 24.9711 29.0711C25.3616 28.6805 25.3616 28.0474 24.9711 27.6569L19.3142 22L24.9711 16.3431C25.3616 15.9526 25.3616 15.3195 24.9711 14.9289C24.5805 14.5384 23.9474 14.5384 23.5569 14.9289L17.1929 21.2929ZM18 21L17.9 21L17.9 23L18 23L18 21Z"
                  fill="#ffffff"
                />
              </svg>
            </div>
          </div>
        </div>
        <Swiper
          @slideChange="slideChangeHandler"
          class="w-full h-[620px]"
          v-bind="settings"
        >
          <SwiperSlide
            v-for="blog in releated"
            :key="blog.id"
            class="h-56 w-full flex justify-center items-center"
          >
            <BlogCard :blog="blog" />
          </SwiperSlide>
        </Swiper>
      </div>
      <div v-else class="w-full h-96 mt-16 flex justify-center items-center">
        <p class="text-2xl text-black">მსგავსი სტატიები ვერ მოიძებნა</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import Navbar from "../components/Navbar.vue";
import { Navigation } from "swiper/modules";

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import BlogCard from "../components/BlogCard.vue";
import { onBeforeMount, ref } from "vue";
import { useRoute } from "vue-router";
import axios from "../helpers/axios";

const isLastSlide = ref(false);
const isFirstSlide = ref(true);

const route = useRoute();
const blog = ref();
const releated = ref();

onBeforeMount(async () => {
  const { data: singleBlog } = await axios.get(`/blogs/${route.params.id}`);
  blog.value = singleBlog;
  const { data } = await axios.get(`/blogs`);
  const commonCategoryBlogs = data.data.filter((otherBlog) =>
    otherBlog.categories.some((category) =>
      blog.value.categories.some(
        (blogCategory) => blogCategory.id === category.id
      )
    )
  );

  const releatedBlogs = commonCategoryBlogs.filter((releatedBlog) => {
    return releatedBlog.id !== blog.value.id;
  });
  releated.value = releatedBlogs;
});

const settings = {
  slidesPerView: 3,
  spaceBetween: 32,
  modules: [Navigation],
  navigation: {
    clickable: true,
    prevEl: "#prev-arrow",
    nextEl: "#next-arrow",
  },
};

const slideChangeHandler = (swiper) => {
  isLastSlide.value = swiper.isEnd;
  isFirstSlide.value = swiper.isBeginning;
};

const getRelatedBlogs = async () => {};
</script>
