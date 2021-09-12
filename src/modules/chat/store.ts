import {Module} from "vuex";

export const CHAT_STORE = "chat_store/";
export const GETTER_CHAT_LIST = "getter_chat_list";
export const GETTER_CONTACT_LIST = "getter_contact_list";

export const chatStore: Module<any, any> = {
  namespaced: true,
  state: {
    contactListSubscription: null,
    chatListSubscription: null,
    contactList: [],
    chatList: [],
  },
  getters: {},
  actions: {},
  mutations: {},
};
