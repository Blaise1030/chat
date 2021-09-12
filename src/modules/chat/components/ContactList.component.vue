<template>
  <router-link :to="`box/${props.id}}`">
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
      <img
        class="
          rounded-full
          bg-green-200
          h-10
          w-10
          mr-2
          object-cover
          border
          box-border
        "
        alt="avatar"
        :src="props.avatar"
      />
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
    avatar: String,
    id: String,
  },
  setup(props, context) {
    //https://image.shutterstock.com/image-vector/human-head-icon-profile-black-600w-1916481899.jpg
    return { props, context };
  },
});
</script>
