import { createApp } from 'vue';
import { createStore } from 'vuex';

interface RootState {
  isAuthenticated: boolean;
}

interface SetAuthenticationPayload {
  isAuthenticated: boolean;
}

const initialState: RootState = {
  isAuthenticated: localStorage.getItem('isAuthenticated') === 'true',
};

export default createStore({
  state: (): RootState => initialState,
  mutations: {
    setAuthentication(state: RootState, payload: SetAuthenticationPayload): void {
      state.isAuthenticated = payload.isAuthenticated;

      localStorage.setItem('isAuthenticated', String(payload.isAuthenticated));
    },
  },
  actions: {
    setAuthentication({ commit }, payload: SetAuthenticationPayload): Promise<void> {
      return new Promise((resolve) => {
        commit('setAuthentication', payload);
        resolve();
      });
    },
  },
  getters: {
    isAuthenticated: (state: RootState): boolean => state.isAuthenticated,
  },
});