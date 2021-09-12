import {Module} from "vuex";

export const CHAT_STORE = "chatStore/";
export const GET_CHAT_LIST = "getter_chat_list";
export const GET_CONTACT_LIST = "getter_contact_list";

export const SET_CONTACT_LIST = "set-contact-list";
export const SET_CHAT_LIST = "set-chat-list";
export const SET_CHAT_STREAM = "set-chat-stream";
export const SET_CONTACT_STREAM = "set-contact-stream";

export const ACTION_STREAM_CONTACT = "action-stream-contact";

export const chatStore: Module<any, any> = {
  namespaced: true,
  state: {
    contactListSubscription: null,
    chatListSubscription: null,
    chatList: [],
  },
  mutations: {},
  getters: {
    [GET_CONTACT_LIST]: (state) => state.chatList,
  },
  actions: {},
};
