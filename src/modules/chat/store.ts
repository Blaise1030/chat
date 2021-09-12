import {Module} from "vuex";
import {getMessageStream} from "./api";

const CHAT_STORE = "chatStore/";
const GET_CHAT = "get-chat";
const SET_CHAT = "set-chat";
const ACTION_GET_MESSAGE_STREAM = "action-get-message-stream";

const chatStore: Module<any, any> = {
  namespaced: true,
  state: {
    chatList: [],
  },
  getters: {
    [GET_CHAT]: (state, _, rootState, __) => {
      return state.chatList
        .sort((mA: any, mB: any) => mB.date - mA.date)
        .map((d: any) => ({
          payload: d.payload,
          date: new Date(d.date).toString(),
          isYou: d.user_id === rootState.user.uid,
          name: d.user_name,
        }));
    },
  },

  mutations: {
    [SET_CHAT]: (state, {newChat}) => {
      state.chatList = newChat;
    },
  },
  actions: {
    [ACTION_GET_MESSAGE_STREAM]: ({commit}) => {
      getMessageStream((data) => {
        commit(SET_CHAT, {newChat: data});
      });
    },
  },
};

export {CHAT_STORE, SET_CHAT, GET_CHAT, ACTION_GET_MESSAGE_STREAM, chatStore};
