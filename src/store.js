import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    lists: [],
    users: []
  },
  mutations: {
    addItem (state, value) {
      state.lists.push(value)
    },
    addUser (state, value) {
      state.users.push(value)
    },
    delItem (state, index) {
      state.lists.splice(index, 1)
    },
    getLocal (state) {
      if (localStorage.getItem('pageLists')) {
        state.lists = JSON.parse(localStorage.getItem('pageLists'))
      }
    },
    getLocalUsers (state) {
      if (localStorage.getItem('users')) {
        state.users = JSON.parse(localStorage.getItem('users'))
      }
    }
  },
  getters: {
    myLists: state => {
      return state.lists.filter(item => item.user === sessionStorage.getItem('currentUser'))
    }
  }
})
