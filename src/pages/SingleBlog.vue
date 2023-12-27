<template>
  <Navbar />
  <div class="w-full h-auto flex justify-center items-center my-24">
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
            src="https://s3-alpha-sig.figma.com/img/f61f/fadf/53c6b0eca0d67f6b1b3b647378282151?Expires=1704067200&Signature=D~IE7J~nfhBNbWNmxpL2jI4s4FBja3z-d7R~yGX52uHbVaD2bOACDV4Lf8uQCWgmd8VC20kbjaz7JysvbjzbWykQpUmtTLINIFpnvqOE2zjFgSC-Ljm8xFUNJc7xKGDWjMfFuXtTQkQhnt0J4o2KdaO3pdxO72FszJNNDsJNi28yDbQ4a44L1jPWJvv8OszGQK4yqmukDDmvgbgCEBh1JpGharAXYboO0kJSaieNybXLNEvEzpMTMR1KvJVrL4v9fQUqRuXL2Ey~OPkg4XYgndg85STXT2eE60ICE1gdVS0mE6nSnG44ZDAjgfJyeoU0OdWzj3QSn~0x5pPY10-3kQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            alt="Image"
            class="w-full h-full object-cover object-center"
          />
        </div>
        <p class="text-base text-black font-medium mt-5">დაჩი წიწილაშვილი</p>
        <p class="text-xs text-[#85858D] font-medium mt-2">
          19.12.2023 * dtsitsilashvili@gmail.com
        </p>
        <p class="text-black text-[32px] font-bold mt-6">
          მობილური ფოტოგრაფიის კონკურსის გამარჯვებულთა ვინაობა ცნობილია
        </p>
        <div
          class="w-full h-auto space-x-4 flex justify-start items-center mt-5"
        >
          <div
            class="w-auto h-full rounded-3xl px-2.5 py-1.5 bg-yellow-500/30 text-yellow-600 flex justify-center items-center text-sm"
          >
            მარკეტი
          </div>
          <div
            class="w-auto h-full rounded-3xl px-2.5 py-1.5 bg-yellow-500/30 text-yellow-600 flex justify-center items-center text-sm"
          >
            მარკეტი
          </div>
          <div
            class="w-auto h-full rounded-3xl px-2.5 py-1.5 bg-yellow-500/30 text-yellow-600 flex justify-center items-center text-sm"
          >
            მარკეტი
          </div>
        </div>
        <p class="text-black mt-10">
          6 თვის შემდეგ ყველის ბრმა დეგუსტაციის დროც დადგა. მაქსიმალური
          სიზუსტისთვის, ეს პროცესი ორჯერ გაიმეორეს და ორივეჯერ იმ ყველს მიენიჭა
          უპირატესობა, რომელსაც ჰიპ-ჰოპს ასმენინებდნენ. „მუსიკალური ენერგია
          პირდაპირ ყველის შუაგულში რეზონირებდა“, — აღნიშნა ბერნის ხელოვნების
          უნივერსიტეტის წარმომადგენელმა, მაიკლ ჰერენბერგმა. რა თქმა უნდა, ეს
          ერთი კვლევა საკმარისი არ არის საბოლოო დასკვნების გამოსატანად.
          სანაცვლოდ, მეცნიერებს სურთ, უშუალოდ ჰიპ-ჰოპის ჟანრის სხვადასხვა მუსიკა
          მოასმენინონ რამდენიმე ყველს და უკვე ისინი შეაჯიბრონ ერთმანეთს. აქვე
          საგულისხმოა, რომ როგორც ბერნის მეცნიერები განმარტავენ, ექსპერიმენტს
          საფუძვლად არა ყველის გაუმჯობესებული წარმოება, არამედ კულტურული
          საკითხები დაედო. მათი თქმით, ადამიანებს უყვართ ყველი და მუსიკა,
          ამიტომაც საინტერესოა ამ ორის კავშირის დანახვა.
        </p>
        <p class="text-black mt-10">
          6 თვის შემდეგ ყველის ბრმა დეგუსტაციის დროც დადგა. მაქსიმალური
          სიზუსტისთვის, ეს პროცესი ორჯერ გაიმეორეს და ორივეჯერ იმ ყველს მიენიჭა
          უპირატესობა, რომელსაც ჰიპ-ჰოპს ასმენინებდნენ. „მუსიკალური ენერგია
          პირდაპირ ყველის შუაგულში რეზონირებდა“, — აღნიშნა ბერნის ხელოვნების
          უნივერსიტეტის წარმომადგენელმა, მაიკლ ჰერენბერგმა. რა თქმა უნდა, ეს
          ერთი კვლევა საკმარისი არ არის საბოლოო დასკვნების გამოსატანად.
          სანაცვლოდ, მეცნიერებს სურთ, უშუალოდ ჰიპ-ჰოპის ჟანრის სხვადასხვა მუსიკა
          მოასმენინონ რამდენიმე ყველს და უკვე ისინი შეაჯიბრონ ერთმანეთს. აქვე
          საგულისხმოა, რომ როგორც ბერნის მეცნიერები განმარტავენ, ექსპერიმენტს
          საფუძვლად არა ყველის გაუმჯობესებული წარმოება, არამედ კულტურული
          საკითხები დაედო. მათი თქმით, ადამიანებს უყვართ ყველი და მუსიკა,
          ამიტომაც საინტერესოა ამ ორის კავშირის დანახვა.
        </p>
      </div>
      <div
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
          <SwiperSlide class="h-56 w-full flex justify-center items-center">
            <BlogCard /> </SwiperSlide
          ><SwiperSlide class="h-56 w-full flex justify-center items-center">
            <BlogCard /> </SwiperSlide
          ><SwiperSlide class="h-56 w-full flex justify-center items-center">
            <BlogCard /> </SwiperSlide
          ><SwiperSlide class="h-56 w-full flex justify-center items-center">
            <BlogCard />
          </SwiperSlide>
        </Swiper>
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
import { ref } from "vue";
const isLastSlide = ref(false);
const isFirstSlide = ref(true);
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
</script>
