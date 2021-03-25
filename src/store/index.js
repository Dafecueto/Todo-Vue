import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    list: [
      {
        name: "prueba-mocked",
        completed: false
      },
      {
        name: "prueba2-mocked",
        completed: false
      }
    ]
  },
  mutations: {
    ADD_TODO(state, todo) {
      state.list = [...state.list, todo]
    },
    SET_COMPLETED_ALL(state) {
      for (let element of state.list) {
        element.completed = true;
      }
    },
    SET_COMPLETED(state, todoName) {
      let selectedTodo = state.list.find(({name}) => name === todoName);
      selectedTodo.completed ? selectedTodo.completed = false : selectedTodo.completed = true;
      console.log(selectedTodo);
    },

    REMOVE_TODO(state, todoName) {
      state.list = state.list.filter(({name}) => name !== todoName);
    },

    CLEAR_COMPLETED(state) {
      state.list = state.list.filter(({completed}) => completed !== true)
    }
  },
  actions: {
    addTodo({commit}, todo) {
      commit('ADD_TODO', todo);
    },
    completeAll({commit}) {
      commit('SET_COMPLETED_ALL');
    },
    completeTodo({commit}, todoName) {
      commit('SET_COMPLETED', todoName);
    },
    removeTodo({commit}, todoName) {
      commit('REMOVE_TODO', todoName);
    },
    clearCompleted({commit}) {
      commit('CLEAR_COMPLETED');
    }
  },
  getters: {
    getAll: state => {
      return state.list;
    },
    getAllCompleted: state => {
      return state.list.filter(({completed}) => completed === true);
    },
    getAllActive: state => {
      return state.list.filter(({completed}) => completed === false)
    }
  },
  modules: {
  }
})
