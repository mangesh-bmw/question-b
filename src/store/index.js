import { createStore } from "vuex";

const store = createStore({
  state: {
    list: [],
    searchQuery: '',
  },
  mutations: {
    SET_DATA(state, payload) {
      state.list = payload;
    },
    SET_SEARCH_QUERY(state, query) {
      state.searchQuery = query;
    },
  },
  actions: {
    addToData({ commit }, payload) {
      commit("SET_DATA", payload);
    },
    setSearchQuery({ commit }, query) {
      commit("SET_SEARCH_QUERY", query);
    },
  },
  getters: {
    filteredList: state => {
      const query = state.searchQuery.toLowerCase();
      return state.list.filter(item =>
        item.title.toLowerCase().includes(query) || item.body.toLowerCase().includes(query)
      );
    }
  }
});

export default store;
