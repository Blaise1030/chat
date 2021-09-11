<template>
  <router-link to="box/1">
    <div
      class="
        p-3
        m-2
        rounded
        duration-500
        cursor-pointer
        hover:bg-gray-100
        flex flex-row
        items-center
        space-start
      "
    >
      <img class="rounded-full bg-green-200 h-10 w-10 mr-2" />
      {{ props.lable }}
    </div>
  </router-link>
  <div class="border-b"></div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    lable: String,
  },
  setup(props, context) {
    return { props, context };
  },
});
</script>
