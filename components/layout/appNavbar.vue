<template>
  <div class="row">
        <nav class="navbar navbar-expand-lg sticky-top navbar-light">
          <a class="navbar-brand col-sm" href="#">
            <img alt="Vue logo" src="../../static/blanc.png">
          </a>
            <ul class="navbar-nav col-sm me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <nuxt-link to="/" class="nav-link active">Home</nuxt-link>
              </li>
              <li class="nav-item">
                <nuxt-link to="/users/" class="nav-link">Users</nuxt-link>
              </li>
              <li>
                <nuxt-link to="/pictures/" class="nav-link">Pictures</nuxt-link>
              </li>
            </ul>
            <form class="form-inline col-sm my-2 my-lg-0">
              <input class="form-control mr-sm-2 w-50" type="search" placeholder="Users search" v-model="value" @keyup="setSearch(value)">
            </form>
      </nav> 
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {

  methods: {
    ...mapMutations("users", ["setSearch"]),
  },
  
}

</script>
