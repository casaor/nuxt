<template>

    <div class="card m-2 p-1 text-center">
        <img class="card-img-top" :src ="photo.thumbnailUrl">
        <div class="card-body">
            <nuxt-link
                    :to="'/pictures/_id' + photo.albumId"  
            >
                <button class="btn btn-outline-info my-2 my-sm-0" @click="SetPhotoVisited(photo)" :photo="photo">View photo</button>
            </nuxt-link>        
        </div>
    </div>

</template>

<script>

import { mapMutations } from "vuex";

export default {
    props: {
        photo: {
            type:Object,
            required:true
        }
    },
    methods: {
        ...mapMutations("pictures", ["SetPhotoVisited"]),
    },
}

</script>

<style >
    .card {
    width: 14rem !important
    }
</style>