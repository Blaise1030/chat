import {Module} from "vuex";
import {getMessageStream} from "./api";

export const CHAT_STORE = "chatStore/";
export const GET_CHAT_LIST = "getter_chat_list";
export const SET_CHAT_LIST = "set-chat-list";
export const SET_CHAT_STREAM = "set-chat-stream";
export const ACTION_STREAM_CHAT = "action-stream-contact";

export const chatStore: Module<any, any> = {
  namespaced: true,
  state: {
    chatListSubscription: null,
    chatList: [],
  },
  mutations: {
    [SET_CHAT_LIST]: (state, {newChat}) => (state.chatList = newChat),
    [SET_CHAT_STREAM]: (state, {newChatStream}) =>
      (state.chatListSubscription = newChatStream),
  },
  getters: {
    [GET_CHAT_LIST]: (state) =>
      state.chatList
        .sort((messageA: any, messageB: any) => messageB.date - messageA.date)
        .map((d: any) => ({
          ...d,
          date: new Date(d.date).toString().slice(0, 21),
        })),
  },
  actions: {
    [ACTION_STREAM_CHAT]: ({commit, rootState}, {onUIStream}) => {
      commit(
        SET_CHAT_STREAM,
        getMessageStream((data) => {
          commit(SET_CHAT_LIST, {
            newChat: data.map((message) => ({
              isYou: rootState.user.uid === message.user_id,
              ...message,
            })),
          });
          onUIStream();
        })
      );
    },
  },
};
