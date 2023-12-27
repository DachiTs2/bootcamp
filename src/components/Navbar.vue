<template>
  <LoginModal @close="loginModal = false" v-if="loginModal" />
  <div class="w-full h-20 bg-white flex justify-center items-center">
    <div class="w-5/6 h-full flex justify-between items-center">
      <div class="w-[150px] h-[24px]">
        <img
          src="../assets/Logo.png"
          alt="Logo"
          class="w-full h-full object-cover object-center"
        />
      </div>
      <button
        v-if="!auth"
        @click="loginModal = true"
        class="text-white bg-[#5D37F3] px-5 py-2.5 rounded-lg"
      >
        შესვლა
      </button>
      <button
        v-if="auth"
        class="text-white bg-[#5D37F3] px-5 py-2.5 rounded-lg"
      >
        ბლოგის დამატება
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import LoginModal from "./LoginModal.vue";
const loginModal = ref(false);
const auth = ref(JSON.parse(localStorage.getItem("login")));
watch(
  () => loginModal.value,
  () => {
    loginModal.value
      ? (document.body.style.overflowY = "hidden")
      : (document.body.style.overflowY = "auto");
  }
);
</script>
