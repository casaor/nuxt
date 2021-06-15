import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';


Vue.use(Vuex);


export const state = () =>
  ({
    photos: [],
    singlePhoto: {}
  });

export const mutations = {
    setPhotos (state,photos) {
        state.photos = photos
        photos.forEach(function (item) {
        item.consulted = 0;
        })
    },
    SetPhotoVisited (state, photoVisited) {
        state.singlePhoto = photoVisited;
        var photosRefresh = [];
        photosRefresh = state.photos
        for (let photo of photosRefresh){
        if (photo == photoVisited) {
            photo.consulted ++
        }
        } state.photos = photosRefresh
    },
};

export const actions = {
    async loadPhotos ({ commit }){
        let photos = await axios.get('http://jsonplaceholder.typicode.com/photos')
        commit('setPhotos', photos.data) 
    },
};
  
export const getters = {
    ConsultedPhotos (state) {
        let photos = state.photos;
        let pconsulted = []
        pconsulted = photos.filter((photo) => photo.consulted > 0)
        return pconsulted 
    },
    allPhotos: state => state.photos,
    single: state => state.singlePhoto
};
  