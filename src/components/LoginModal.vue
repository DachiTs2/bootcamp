<template>
  <div
    @click.self="$emit('close')"
    class="w-full h-screen bg-black bg-opacity-50 fixed top-0 left-0 z-50 flex justify-center items-center"
  >
    <div
      class="w-1/3 h-auto bg-white py-12 px-6 flex flex-col justify-start items-center rounded-xl relative"
    >
      <div
        v-if="loggedIn"
        class="w-full h-full flex flex-col justify-start items-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="64"
          height="64"
          viewBox="0 0 64 64"
          fill="none"
        >
          <path
            d="M32.0002 58.6667C46.6668 58.6667 58.6668 46.6667 58.6668 32C58.6668 17.3333 46.6668 5.33334 32.0002 5.33334C17.3335 5.33334 5.3335 17.3333 5.3335 32C5.3335 46.6667 17.3335 58.6667 32.0002 58.6667Z"
            fill="#14D81C"
          />
          <path
            d="M20.6665 32L28.2132 39.5467L43.3332 24.4533"
            stroke="white"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <p class="text-black font-bold text-center">წარმატებული ავტორიზაცია</p>
        <button
          @click="login"
          class="w-full h-auto px-5 py-2.5 bg-[#5D37F3] text-white text-sm mt-8 rounded-lg"
        >
          კარგი
        </button>
      </div>
      <form
        v-if="!loggedIn"
        @submit.prevent="submit"
        class="w-full flex flex-col justify-start items-center duration-150"
      >
        <p
          @click.self="$emit('close')"
          class="text-black text-2xl font-bold absolute top-6 right-6 cursor-pointer"
        >
          X
        </p>
        <p class="text-black font-bold text-2xl">შესვლა</p>
        <div
          class="w-full h-auto flex flex-col justify-start items-start space-y-2 mt-8"
        >
          <label class="text-black text-sm font-medium">ელ-ფოსტა</label>
          <input
            v-model="email"
            type="text"
            class="w-full h-11 rounded-xl border outline-none px-4"
            :class="error ? 'border-red-500' : 'border-[#5D37F3]'"
            placeholder="Example@redberry.ge"
          />
          <p class="text-xs text-[#EA1919]">{{ error }}</p>
        </div>
        <button
          type="submit"
          class="w-full h-auto px-5 py-2.5 bg-[#5D37F3] text-white text-sm mt-8 rounded-lg"
        >
          შესვლა
        </button>
      </form>
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
  window.location.href = "/";
};
</script>
