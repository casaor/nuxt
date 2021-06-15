<template>        

    <div>
        <div class="p-5 text-center" style="background-color: #85dcb1; color: white">
            <h1 class="mb-3">Pictures</h1>
            <back></back>
        </div> 
        <div class="d-flex justify-content-center">
            <picturesList></picturesList>
        </div>

    </div>

</template>

<script>

// import Vuex from 'vuex'
import PicturesList from './../../components/cards/PicturesList.vue'
import Back from './../../components/layout/Back.vue'
import { mapGetters } from 'vuex'

export default {
    computed:
    {
        ...mapGetters("pictures", ["loadPhotos"]),
    },
//     created() {
//     this.$store.dispatch("pictures/loadPhotos");
//   },
    components:
    {
        PicturesList,
        Back,
    },
}

</script>
