import {createStore} from "vuex";
import {chatStore} from "@/modules/chat/store";
export const STORE_GET_USER_STREAM = "getuser";
export const MAIN_STORE = "store/";
export const GET_USER = "get-user";

export default createStore({
  state: {
    user: null,
  },
  getters: {
    [GET_USER]: (state) => {
      return state.user;
    },
  },
  mutations: {},
  actions: {},
  modules: {
    chatStore,
  },
});
