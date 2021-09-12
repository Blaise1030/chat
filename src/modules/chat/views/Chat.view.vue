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
    <div
      @click="logout"
      class="
        duration-500
        text-gray-400 text-sm
        hover:bg-gray-200
        rounded
        p-0.5
        px-2
        mr-3
        cursor:pointer
      "
    >
      👈🏼 Logout
    </div>

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
import { signOut } from "@/api";
import router from "@/router";

export default defineComponent({
  components: { ChatCardComponent },
  setup() {
    const state = reactive({
      contactName: "Group Chat",
      inputMessage: "",
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
      state.inputMessage = "";
    };

    const logout = () => {
      signOut();
      router.push({ name: "LoginPage" });
    };

    return {
      onEnter,
      state,
      logout,
    };
  },
});
</script>
