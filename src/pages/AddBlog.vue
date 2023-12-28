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
      <form
        @submit.prevent="submit"
        class="w-[45%] h-auto flex flex-col justify-start items-start"
      >
        <p class="text-black text-[32px] font-bold">ბლოგის დამატება</p>
        <p class="text-black text-sm font-medium mt-5">ატვირთეთ ფოტო</p>
        <div
          class="w-full h-44 bg-slate-200 border-dashed border-2 rounded-lg border-black/60 mt-4 flex justify-center items-center relative"
        >
          <div
            class="w-full h-auto space-y-6 absolute top-1/2 left-0 -translate-y-1/2 flex flex-col justify-start items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
            >
              <path
                opacity="0.4"
                d="M36.233 15.7333H3.33301V10.6999C3.33301 6.63325 6.63301 3.33325 10.6997 3.33325H14.583C17.2997 3.33325 18.1497 4.21659 19.233 5.66659L21.5663 8.76659C22.083 9.44992 22.1497 9.54992 23.1163 9.54992H27.7663C31.7163 9.53325 35.083 12.1333 36.233 15.7333Z"
                fill="#5D37F3"
              />
              <path
                d="M36.6497 18.0667C36.6163 17.2501 36.483 16.4834 36.233 15.7334H3.33301V27.7501C3.33301 32.6667 7.33301 36.6667 12.2497 36.6667H27.7497C32.6663 36.6667 36.6663 32.6667 36.6663 27.7501V18.4501C36.6663 18.3334 36.6663 18.1834 36.6497 18.0667ZM24.1663 27.0834H21.3497V30.0001C21.3497 30.6834 20.783 31.2501 20.0997 31.2501C19.4163 31.2501 18.8497 30.6834 18.8497 30.0001V27.0834H15.833C15.1497 27.0834 14.583 26.5167 14.583 25.8334C14.583 25.1501 15.1497 24.5834 15.833 24.5834H18.8497V21.6667C18.8497 20.9834 19.4163 20.4167 20.0997 20.4167C20.783 20.4167 21.3497 20.9834 21.3497 21.6667V24.5834H24.1663C24.8497 24.5834 25.4163 25.1501 25.4163 25.8334C25.4163 26.5167 24.8497 27.0834 24.1663 27.0834Z"
                fill="#5D37F3"
              />
            </svg>
            <p class="text-sm text-black">
              ჩააგდეთ ფაილი აქ ან <span class="underline">აირჩიეთ ფაილი</span>
            </p>
          </div>
          <input
            @input="imageChangeHandler"
            type="file"
            class="w-full h-full opacity-0"
          />
        </div>
        <div
          class="w-full h-auto flex justify-between items-start mt-6 space-x-6"
        >
          <div
            class="w-1/2 h-auto flex flex-col justify-start items-start space-y-2"
          >
            <label class="font-medium text-sm text-black">ავტორი *</label>
            <input
              v-model="form.author"
              type="text"
              class="w-full h-11 rounded-xl border-2 border-black/50 focus:border-[#5D37F3] outline-none duration-150 px-2"
            />
            <p
              class="text-xs"
              :class="form.author4Symb ? 'text-green-400' : 'text-black/40'"
            >
              * მინიმუმ 4 სიმბოლო
            </p>
            <p
              class="text-xs"
              :class="form.author2word ? 'text-green-400' : 'text-black/40'"
            >
              * მინიმუმ 2 სიტყვა
            </p>
            <p
              class="text-xs"
              :class="
                form.authorGeorgianSymb ? 'text-green-400' : 'text-black/40'
              "
            >
              * მხოლოდ ქართული სიმბოლოები
            </p>
          </div>
          <div
            class="w-1/2 h-auto flex flex-col justify-start items-start space-y-2"
          >
            <label class="font-medium text-sm text-black">სათაური *</label>
            <input
              v-model="form.title"
              type="text"
              class="w-full h-11 rounded-xl border-2 border-black/50 focus:border-[#5D37F3] outline-none duration-150 px-2"
            />
            <p
              class="text-xs"
              :class="form.title4symb ? 'text-green-400' : 'text-black/40'"
            >
              * მინიმუმ 4 სიმბოლო
            </p>
          </div>
        </div>
        <div
          class="w-full h-auto flex flex-col justify-start items-start space-y-2 mt-6"
        >
          <label class="font-medium text-sm text-black">აღწერა *</label>
          <textarea
            v-model="form.description"
            type="text"
            class="w-full h-32 rounded-xl border-2 border-black/50 focus:border-[#5D37F3] outline-none duration-150 px-2"
          ></textarea>
          <p
            class="text-xs"
            :class="form.description4Symb ? 'text-green-400' : 'text-black/40'"
          >
            * მინიმუმ 4 სიმბოლო
          </p>
        </div>
        <div
          class="w-full h-auto flex justify-between items-start mt-6 space-x-6"
        >
          <div
            class="w-1/2 h-auto flex flex-col justify-start items-start space-y-2"
          >
            <label class="font-medium text-sm text-black"
              >გამოქვეყნების თარიღი *</label
            >
            <input
              v-model="form.publish_date"
              type="text"
              class="w-full h-11 rounded-xl border-2 border-black/50 focus:border-[#5D37F3] outline-none duration-150 px-2"
            />
          </div>
          <div
            class="w-1/2 h-auto flex flex-col justify-start items-start space-y-2"
          >
            <label class="font-medium text-sm text-black">კატეგორია *</label>
            <div
              @click="categoriesDropdown = !categoriesDropdown"
              class="w-full h-11 border-2 outline-none duration-150 relative flex justify-start items-center px-4 whitespace-nowrap overflow-x-auto scroll-smooth no-scrollbar"
              :class="
                categoriesDropdown
                  ? 'rounded-b-none rounded-xl border-[#5D37F3]'
                  : 'rounded-xl border-black/50'
              "
            >
              <div
                v-for="category in form.categories"
                :key="category.id"
                @click="removeCategory(category.id)"
                class="w-auto h-7 text-sm bg-yellow-500/40 text-yellow-500 flex justify-center items-center px-4 whitespace-nowrap rounded-3xl mr-2"
              >
                {{ category.title }}
              </div>
              <div
                class="w-full h-40 bg-white border-2 absolute top-full left-0 duration-150 overflow-y-auto"
                :class="
                  categoriesDropdown
                    ? 'h-40 border-[#5D37F3] opacity-100'
                    : 'h-0 opacity-0'
                "
              >
                <div
                  v-for="category in categories"
                  :key="category.id"
                  class="w-full h-10 bg-slate-50 hover:bg-slate-100 duration-100 flex justify-start items-center px-4"
                  @click="form.categories.push(category)"
                >
                  {{ category.title }}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="w-full h-auto flex justify-between items-start mt-6 space-x-6"
        >
          <div
            class="w-1/2 h-auto flex flex-col justify-start items-start space-y-2"
          >
            <label class="font-medium text-sm text-black">ელ-ფოსტა *</label>
            <input
              v-model="form.email"
              type="email"
              class="w-full h-11 rounded-xl border-2 border-black/50 focus:border-[#5D37F3] outline-none duration-150 px-2"
            />
          </div>
        </div>
        <div class="w-full h-10 flex justify-end items-center mt-10">
          <button
            :disabled="!form.formValid"
            class="w-1/2 h-full rounded-xl text-white"
            :class="
              form.formValid
                ? 'bg-[#5D37F3] cursor-pointer'
                : 'bg-[#5D37F3]/30 cursor-not-allowed'
            "
          >
            გამოქვეყნება
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { onBeforeMount, reactive, ref, watch } from "vue";
import Navbar from "../components/Navbar.vue";
import axios from "../helpers/axios";
const form = reactive({
  image: null,
  author: "",
  author4Symb: false,
  author2word: false,
  authorGeorgianSymb: false,
  authorIsValid: false,
  title: "",
  title4symb: false,
  description: "",
  description4Symb: false,
  publish_date: "",
  categories: [1, 2],
  email: "",
  formValid: false,
});
const categories = ref(null);
onBeforeMount(async () => {
  const { data } = await axios.get("/categories");
  categories.value = data.data;
});
const imageChangeHandler = (event) => {
  form.image = event.target.files[0];
};
const submit = async () => {
  const formData = new FormData();
  formData.append("image", form.image);
  formData.append("title", form.title);
  formData.append("description", form.description);
  formData.append("author", form.author);
  formData.append("publish_date", form.publish_date);
  formData.append("email", form.email);
  formData.append("categories", JSON.stringify(form.categories));
  const result = await axios.post("/blogs", formData);
  console.log(result);
};
watch(
  () => form.author,
  () => {
    const regex = /^[\u10A0-\u10FF\s]+$/;
    if (form.author.length >= 4) {
      form.author4Symb = true;
    } else {
      form.author4Symb = false;
    }
    if (form.author.trim().split(/\s+/).length >= 2) {
      form.author2word = true;
    } else {
      form.author2word = false;
    }
    if (regex.test(form.author)) {
      form.authorGeorgianSymb = true;
    } else {
      form.authorGeorgianSymb = false;
    }
    if (form.author2word && form.author4Symb && form.authorGeorgianSymb) {
      form.authorIsValid = true;
    }
  }
);
watch(
  () => form.title,
  () => {
    if (form.title.length >= 4) {
      form.title4symb = true;
    } else {
      form.title4symb = false;
    }
  }
);
watch(
  () => form.description,
  () => {
    if (form.description.length >= 4) {
      form.description4Symb = true;
    } else {
      form.description4Symb = false;
    }
  }
);
watch(
  () => form,
  () => {
    if (
      form.title4symb &&
      form.description4Symb &&
      form.authorIsValid &&
      form.publish_date.length > 0 &&
      form.email.length > 0 &&
      form.email.slice(-12) === "@redberry.ge" &&
      form.categories.length > 0 &&
      form.image
    ) {
      form.formValid = true;
    }
  },
  { deep: true }
);
</script>
