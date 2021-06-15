<template>

    <div class="card-columns">
        <pictureItem v-for="photo of allPhotos" :photo="photo" v-bind:key="photo.albumID"></pictureItem>  
    </div>

</template>

<script>
import { mapGetters } from 'vuex'
import PictureItem from './PictureItem';

export default {

    computed: {
        ...mapGetters("pictures", ["allPhotos"]),           

    },
    components:
    {
        PictureItem
    },
}

</script>

<style>
    .card-columns {
        column-count: 1;
    }
</style>