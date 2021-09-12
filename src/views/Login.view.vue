<template>
  <div class="w-full h-full flex flex-row items-center justify-center p-8">
    <div class="flex flex-col justify-between w-full">
      <div class="font-bold text-4xl animate-bounce">Welcome</div>
      <div class="text-lg text-gray-500 animate-bounce">
        Start chatting with friends
      </div>
      <div
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
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return {};
  },
});
</script>
