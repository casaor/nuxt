<template>
    <div>
        <div class="p-5 text-center" style="background-color: #e27d60; color: white">
                <h1 class="mb-3">User {{ single.id }}</h1>
                <back></back>
        </div> 
        <div class="info-center">
            <div class="card info-wide m-4 h-50">
                <h5 class="card-header">{{ single.name }}</h5>
                <div class="card-body">
                    <h5 class="card-title">username: {{ single.username }}</h5>
                    <p class="card-text">user id: {{ single.id }}</p>
                    <p class="card-text">email: {{ single.email }}</p>
                    <p class="card-text">website: {{ single.website }}</p>
                    <p class="card-text">company name: {{ single.company.name }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Back from './../../../components/layout/Back.vue';
import { mapGetters } from "vuex";

export default {
    components:
    {
        Back
    },
    computed: {
    ...mapGetters("users", ["single"]),
    },
}
</script>