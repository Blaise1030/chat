<template>
  <div :class="messageBorder()">
    <div class="text-red-600" v-if="props.isYou">You</div>
    <div class="text-blue-600" v-else>{{ props.otherName }}</div>
    <div class="mb-2">
      {{ props.payload }}
    </div>
    <div class="text-gray-600 text-xs">{{ props.date }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    isYou: Boolean,
    otherName: String,
    date: String,
    payload: String,
    type: String,
  },
  setup(props) {
    const messageBorder = () =>
      props.isYou
        ? "border-l-4 m-2 px-2 border-red-600"
        : "border-l-4 m-2 px-2 border-blue-600";

    return {
      messageBorder,
      props,
    };
  },
});
</script>


