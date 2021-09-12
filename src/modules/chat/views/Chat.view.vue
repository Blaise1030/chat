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
        cursor-pointer
      "
    >
      👈🏼 Logout
    </div>

    <div>Group Chat</div>
  </div>
  <div class="overflow-y-scroll h-full pb-20" id="chat-scroll1">
    <ChatCardComponent
      v-for="(message, index) in state.chatMessages"
      :otherName="message.user_name"
      :payload="message.payload"
      :isYou="message.isYou"
      :date="message.date"
      :type="message.type"
      :key="index"
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
import { computed, defineComponent, onMounted, reactive } from "vue";
import ChatCardComponent from "@/modules/chat/components/ChatCard.component.vue";
import { signOut } from "@/api";
import router from "@/router";
import { sendMessage } from "../api";
import store from "@/store";
import { ACTION_STREAM_CHAT, CHAT_STORE, GET_CHAT_LIST } from "../store";

export default defineComponent({
  components: { ChatCardComponent },
  setup() {
    const state = reactive({
      inputMessage: "",
      chatMessages: computed(
        () => store.getters[`${CHAT_STORE}${GET_CHAT_LIST}`]
      ),
    });
    onMounted(() => {
      store.dispatch(`${CHAT_STORE}${ACTION_STREAM_CHAT}`, {
        onUIStream: () => scrollToBottom(true),
      });
      scrollToBottom(false);
    });
    const scrollToBottom = (animate: boolean) => {
      const chatScroll1 = document.getElementById("chat-scroll1");
      animate
        ? chatScroll1?.scrollBy({ top: 0, behavior: "smooth" })
        : chatScroll1?.scrollTo(0, 0);
    };
    const onEnter = () => {
      const { uid, displayName } = store.state.user as any;
      sendMessage({
        user_name: displayName,
        payload: state.inputMessage,
        user_id: uid,
        type: "text",
      });
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
