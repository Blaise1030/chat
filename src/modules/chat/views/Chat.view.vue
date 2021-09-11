<template>
  <div
    class="
      shadow-md
      sticky
      top-0
      left-0
      w-full
      p-4
      z-20
      flex flex-row
      item-center
      space-center
    "
  >
    <router-link to="/chat">
      <div
        class="
          duration-500
          text-gray-400 text-sm
          hover:bg-gray-200
          rounded
          p-0.5
          px-2
          mr-3
        "
      >
        👈🏼 Back
      </div>
    </router-link>
    <div>Contact Name</div>
  </div>
  <div class="overflow-y-scroll h-full">
    <ChatCardComponent
      :isYou="false"
      otherName="Name"
      date="2021-3-04"
      payload="This is my message"
      type="File"
    />
    <ChatCardComponent
      :isYou="true"
      otherName="Name"
      date="2021-3-04"
      payload="This is my message"
      type="File"
    />
    <ChatCardComponent
      :isYou="false"
      otherName="Name"
      date="2021-3-04"
      payload="This is my message"
      type="File"
    />
    <ChatCardComponent
      :isYou="false"
      otherName="Name"
      date="2021-3-04"
      payload="This is my message"
      type="File"
    />
    <ChatCardComponent
      :isYou="false"
      otherName="Name"
      date="2021-3-04"
      payload="This is my message"
      type="File"
    />
    <ChatCardComponent
      :isYou="false"
      otherName="Name"
      date="2021-3-04"
      payload="This is my message"
      type="File"
    />
    <ChatCardComponent
      :isYou="false"
      otherName="Name"
      date="2021-3-04"
      payload="This is my message"
      type="File"
    />
    <ChatCardComponent
      :isYou="false"
      otherName="Name"
      date="2021-3-04"
      payload="This is my message"
      type="File"
    />
    <ChatCardComponent
      :isYou="false"
      otherName="Name"
      date="2021-3-04"
      payload="This is my message"
      type="File"
    />
    <ChatCardComponent
      :isYou="true"
      otherName="Name"
      date="2021-3-04"
      payload="This is my message"
      type="File"
    />
    <div class="h-10"></div>
    <div class="h-10"></div>
    <div class="h-10"></div>
  </div>
  <div
    class="
      sticky
      bottom-0
      left-0
      w-full
      p-4
      z-20
      bg-white
      border-t-2
      flex flex-row
    "
  >
    <div
      class="
        w-7
        h-7
        mr-3
        text-center
        rounded-full
        duration-500
        cursor-pointer
        hover:bg-gray-200
      "
    >
      📷
    </div>
    <input placeholder="Send A Message" class="outline-none" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ChatCardComponent from "@/modules/chat/components/ChatCard.component.vue";

export default defineComponent({
  components: { ChatCardComponent },
  setup() {
    return {};
  },
});
</script>
