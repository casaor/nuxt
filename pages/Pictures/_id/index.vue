<template>

<div>
    <div class="p-5 text-center" style="background-color: #85dcb1; color: white">
            <h1 class="mb-3">Album {{ single.id }}</h1>
            <back></back>
    </div> 
    <div class="info-center">
        <div class="card info-wide m-4">
            <img class="card-img-top" :src ="single.thumbnailUrl">
            <div class="card-body">
                <h5 class="card-title">{{ single.title }}</h5>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">photo id: {{single.id }}</li>
            </ul>
            <div class="card-body">
                <a href="#" class="card-link">{{single.url }}</a>
            </div>
        </div>
    </div>
</div>
    
</template>

<script>
import Back from './../../../components/layout/Back.vue'
import { mapGetters } from "vuex";

export default {
    components:
    {
        Back
    },
    computed: {
    ...mapGetters("pictures", ["single"]),
  },
}
</script>

<style>
    .info-center{
        height: 42rem;
        display: flex;
        justify-content: center;
        align-content: center;
    }

    .info-wide{
        width: 22rem !important;
        height: 36rem;
    }

</style>