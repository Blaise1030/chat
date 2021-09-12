<template>
  <div class="sticky top-0 left-0 shadow-lg p-4 flex flex-row">
    <div
      class="mr-5 hover:bg-gray-300 cursor-pointer select-none p-0.5"
      @click="logout"
    >
      Exit
    </div>
    <div>Group Chat</div>
  </div>
  <div class="h-full overflow-y-scroll pb-20">
    <ChatCardComponent
      v-for="(chat, index) in state.chatList"
      :key="index"
      :name="chat.name"
      :payload="chat.payload"
      :isYou="chat.isYou"
      :date="chat.date"
    />
    <div class="h-10"></div>
  </div>
  <div class="sticky bottom-0 left-0 border">
    <input
      type="text"
      class="border-none outline-none p-2 w-full"
      v-model="state.message"
      @change="addMessage"
    />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, reactive } from "vue";
import ChatCardComponent from "@/modules/chat/components/ChatCard.component.vue";
import { signOut } from "@/api";
import router from "@/router";
import store, { GET_USER } from "@/store";
import { ACTION_GET_MESSAGE_STREAM, CHAT_STORE, GET_CHAT } from "../store";
import { sendMessage } from "../api";

export default defineComponent({
  components: { ChatCardComponent },

  setup() {
    onMounted(() => {
      store.dispatch(`${CHAT_STORE}${ACTION_GET_MESSAGE_STREAM}`);
    });
    const state = reactive({
      chatList: computed(() => store.getters[`${CHAT_STORE}${GET_CHAT}`]),
      message: "",
    });

    const addMessage = () => {
      const { displayName, uid } = store.getters[GET_USER];
      sendMessage({
        user_name: displayName,
        user_id: uid,
        payload: state.message,
        type: "",
      });
      state.message = "";
    };

    const logout = () => {
      signOut();
      router.push({ name: "LoginPage" });
    };

    return { state, logout, addMessage };
  },
});
</script>
