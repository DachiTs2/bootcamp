<template>
  <div
    @click.self="$emit('close')"
    class="w-full h-screen bg-black bg-opacity-50 fixed top-0 left-0 z-50 flex justify-center items-center"
  >
    <div
      class="w-1/3 h-auto bg-white py-12 px-6 flex flex-col justify-start items-center rounded-xl relative"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="64"
        height="64"
        viewBox="0 0 64 64"
        fill="none"
      >
        <path
          d="M32.0006 58.6667C46.6673 58.6667 58.6673 46.6667 58.6673 32C58.6673 17.3333 46.6673 5.33334 32.0006 5.33334C17.334 5.33334 5.33398 17.3333 5.33398 32C5.33398 46.6667 17.334 58.6667 32.0006 58.6667Z"
          fill="#14D81C"
        />
        <path
          d="M20.666 32L28.2127 39.5467L43.3327 24.4533"
          stroke="white"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      <p class="text-xl text-black mt-8">ჩანაწერი წარმატებით დაემატა</p>
      <button
        @click="$router.push('/')"
        type="submit"
        class="w-full h-auto px-5 py-2.5 bg-[#5D37F3] text-white text-sm mt-8 rounded-lg"
      >
        მთავარ გვერდზე გადასვლა
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import axios from "../helpers/axios";

const emit = defineEmits(["close"]);
const email = ref("");
const error = ref("");
const loggedIn = ref(false);
watch(
  () => email.value,
  () => {
    email.value === "" && (error.value = "");
  }
);
const submit = async () => {
  const result = await axios
    .post("/login", {
      email: email.value,
    })
    .then((response) => {
      if (![200, 201, 204].includes(response.status)) {
        error.value = "ელ-ფოსტა არ მოიძებნა";
      } else {
        loggedIn.value = true;
      }
    });
};

const login = () => {
  localStorage.setItem("login", JSON.stringify(true));
  emit("close");
};
</script>
