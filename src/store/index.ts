import {createStore} from "vuex";
import {getCurrentUser, signIn} from "@/api";
import router from "@/router";
import {chatStore} from "@/modules/chat/store";
export const STORE_GET_USER_STREAM = "getuser";
export const MAIN_STORE = "store/";

export const GET_USER = "get-user";
export const SET_USER = "set-user";
export const SET_LOGIN_STATE_LISTENER = "set-login-listener";

export const ACTION_SIGN_IN = "sign-in";
export const ACTION_SIGN_IN_LISTENER = "sign-in-listener";

export default createStore({
  state: {
    user: null,
    loginStateListener: null,
  },
  getters: {
    [GET_USER]: (state) => state.user,
  },
  mutations: {
    [SET_USER]: (state, {newUser}) => {
      state.user = newUser;
    },
    [SET_LOGIN_STATE_LISTENER]: (state, {loginStateListener}) =>
      (state.loginStateListener = loginStateListener),
  },
  actions: {
    [ACTION_SIGN_IN]: async ({commit}) => {
      await signIn((user: any) => {
        commit(SET_USER, {newUser: user});
        router.push({name: "ChatBox"});
      });
    },
    [ACTION_SIGN_IN_LISTENER]: async ({commit}, {onSuccess}) => {
      const newUser = await getCurrentUser();
      commit(SET_USER, {newUser});
      onSuccess();
    },
  },
  modules: {
    chatStore,
  },
});
