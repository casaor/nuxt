<template>

    <div class="card m-2 p-3 w-100">
        <div class="card-body">
            <h5 class="card-title mb-4">{{ user.name.toUpperCase() }}</h5>
                <nuxt-link
                    :to="'/users/' + user.id"  
                >
                <!-- <nuxt-link :to="{name: 'users-id', params: { id:user.id } }"> -->
                    <button class="btn btn-outline-info my-2 my-sm-0" @click="SetUserVisited(user)">View user</button>
                </nuxt-link>
        </div>
    </div>

</template>

<script>
import { mapMutations } from "vuex";

export default {
    props: {
        user: {
            type:Object,
            required:true
        }
    },
    methods: {
        ...mapMutations("users", ["SetUserVisited"]),
    },
}

</script>


