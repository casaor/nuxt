import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';


Vue.use(Vuex);


export const state = () =>
  ({
    users: [],
    singleUser: {},
    filters: {
      search: ''
    }
  });

export const mutations = {
    setUsers (state,users) {
        state.users = users
        users.forEach(function (item) {
        item.consulted = 0;
        })
    },
    SetUserVisited (state, userVisited) {
        state.singleUser = userVisited;
        var usersRefresh = [];
        usersRefresh = state.users
        for (let user of state.users){
        if (user == userVisited) {
            user.consulted++;
        }
        } state.users = usersRefresh;
    },
    setSearch (state,search){
      state.filters.search = search
    },
};
  
export const actions = {
    async loadUsers ({ commit }){
        let users = await axios.get('http://jsonplaceholder.typicode.com/users')
        commit('setUsers', users.data) 
    },
};

export const getters = {
    FilterUsers (state){
      let users = state.users;
      let usersRefresh = []
      if (state.filters.search.length > 2){
        for (const user of users){
          if (user.name.toLocaleLowerCase().includes(state.filters.search)){
              usersRefresh.push(user)
          }
        }
        users = usersRefresh
        return users 
      }else{
        for (const user of users){
            usersRefresh.push(user)
        }
        users = usersRefresh
        return users
      }
    },
    ConsultedUsers (state) {
      let users = state.users;
      let uconsulted = []
      uconsulted = users.filter((user) => user.consulted > 0)   
      return uconsulted
    },
    allUsers: state => state.users,
    single: state => state.singleUser
  };