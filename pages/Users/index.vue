<template>
    <div>
        <div class="p-5 text-center" style="background-color: #e27d60; color: white">
            <h1 class="mb-3">Users</h1>
            <back></back>
        </div> 
        <div class="d-flex justify-content-center">
            <usersList></usersList>
        </div>

    </div>

</template>


<script>

// import Vuex from 'vuex'
import UsersList from './../../components/cards/UsersList.vue'
import Back from './../../components/layout/Back.vue'
import { mapGetters } from 'vuex'

export default {
    computed:
    {
        ...mapGetters("users", ["FilterUsers"]),
    },
    // created() {
    //     this.$store.dispatch("users/loadUsers");
    // },
    components:
    {
        UsersList,
        Back,
    }
}

</script>
