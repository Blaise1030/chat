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
    <div>{{ state.contactName }}</div>
  </div>
  <div class="overflow-y-scroll h-full pb-20" id="chat-scroll1">
    <ChatCardComponent
      v-for="message in state.chatMessages"
      :otherName="message.otherName"
      :payload="message.payload"
      :isYou="message.isYou"
      :date="message.date"
      :type="message.type"
      :key="message.id"
    />
    <div class="h-10"></div>
  </div>
  <div
    class="sticky bottom-0 left-0 w-full p-4 bg-white border-t-2 flex flex-row"
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
    <input
      placeholder="Send A Message"
      class="outline-none w-full"
      v-model="state.inputMessage"
      @change="onEnter"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive } from "vue";
import ChatCardComponent from "@/modules/chat/components/ChatCard.component.vue";

export default defineComponent({
  components: { ChatCardComponent },
  setup() {
    const state = reactive({
      contactName: "This is the contact name",
      inputMessage: "",
      chatMessages: [
        {
          id: "1",
          isYou: true,
          otherName: "Name",
          date: "2021-3-04",
          payload: "This is my message",
          type: "File",
        },
        {
          id: "2",
          isYou: true,
          otherName: "Name",
          date: "2021-3-04",
          payload: "This is my message",
          type: "File",
        },
        {
          id: "3",
          isYou: true,
          otherName: "Name",
          date: "2021-3-04",
          payload: "This is my message",
          type: "File",
        },
        {
          id: "4",
          isYou: true,
          otherName: "Name",
          date: "2021-3-04",
          payload: "This is my message",
          type: "File",
        },
        {
          id: "5",
          isYou: true,
          otherName: "Name",
          date: "2021-3-04",
          payload: "This is my message",
          type: "File",
        },
        {
          id: "6",
          isYou: true,
          otherName: "Name",
          date: "2021-3-04",
          payload: "This is my message",
          type: "File",
        },
        {
          id: "7",
          isYou: true,
          otherName: "Name",
          date: "2021-3-04",
          payload: "This is my message",
          type: "File",
        },
        {
          id: "8",
          isYou: true,
          otherName: "Name",
          date: "2021-3-04",
          payload: "This is my message",
          type: "File",
        },
        {
          id: "9",
          isYou: true,
          otherName: "Name",
          date: "2021-3-04",
          payload: "This is my message",
          type: "File",
        },
        {
          id: "10",
          isYou: true,
          otherName: "Name",
          date: "2021-3-04",
          payload: "This is my message",
          type: "File",
        },
        {
          id: "11",
          isYou: true,
          otherName: "Name",
          date: "2021-3-04",
          payload: "This is my message",
          type: "File",
        },
        {
          id: "12",
          isYou: true,
          otherName: "Name",
          date: "2021-3-04",
          payload: "This is my message",
          type: "File",
        },
      ],
    });
    onMounted(() => {
      scrollToBottom(false);
    });
    const scrollToBottom = (animate: boolean) => {
      const chatScroll1 = document.getElementById("chat-scroll1");
      animate
        ? chatScroll1?.scrollBy({
            top: chatScroll1.scrollHeight,
            behavior: "smooth",
          })
        : chatScroll1?.scrollTo(0, chatScroll1.scrollHeight);
    };
    const onEnter = () => {
      scrollToBottom(true);
      state.chatMessages.push({
        payload: state.inputMessage,
        date: "2021-3-04",
        otherName: "Name",
        type: "File",
        isYou: false,
        id: "3",
      });
      state.inputMessage = "";
    };
    return {
      onEnter,
      state,
    };
  },
});
</script>
