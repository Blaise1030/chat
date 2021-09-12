<template>
  <div
    class="border-l-4 m-2 p-2"
    v-bind:class="{
      'border-red-600': props.isYou,
      ' border-blue-600': !props.isYou,
    }"
  >
    <div
      v-bind:class="{
        'text-red-600': props.isYou,
        ' text-blue-600': !props.isYou,
      }"
    >
      {{ props.name }}
    </div>
    {{ props.payload }}
    <div>{{ props.date }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    name: String,
    isYou: Boolean,
    payload: String,
    date: String,
  },
  setup(props) {
    return { props };
  },
});
</script>
