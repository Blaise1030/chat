<template>
  <div class="w-full h-full flex flex-row items-center justify-center p-8">
    <div class="flex flex-col justify-between w-full">
      <div class="font-bold text-4xl animate-bounce">Welcome</div>
      <div class="text-lg text-gray-500 animate-bounce">
        Start chatting with friends
      </div>
      <div
        @click="login"
        class="
          mt-2
          px-5
          py-2
          w-full
          rounded
          bg-black
          text-center text-white
          cursor-pointer
          hover:bg-gray-700
        "
      >
        Get Started
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import router from "@/router";
import store, { ACTION_SIGN_IN, ACTION_SIGN_IN_LISTENER } from "@/store";
import { defineComponent, onMounted } from "vue";

export default defineComponent({
  setup() {
    onMounted(() => {
      store.dispatch(ACTION_SIGN_IN_LISTENER, {
        onSuccess: () => router.push({ name: "ChatBox" }),
      });
    });
    const login = () => store.dispatch(ACTION_SIGN_IN);
    return { login };
  },
});
</script>
