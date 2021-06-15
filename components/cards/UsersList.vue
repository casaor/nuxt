<template>

    <div class="card-columns">
        <userItem v-for="user of FilterUsers" :user="user" :key="user.id"></userItem>  
    </div>
    
</template>

<script>

import { mapGetters } from 'vuex'
import UserItem from './UserItem'

export default {

    computed: {
        ...mapGetters("users", ["FilterUsers"]),           

    },
    components:
    {
        UserItem
    },
}

</script>

<style >
    .card-columns {
        width: 95% !important;
        margin: 1.5em;
    }
</style>