<template>

  <div>
         
      <appNavbar />
      
        <Nuxt />

      <appFooter />

  </div>

</template>

<script >
import '@/assets/scss/app.scss'
import appNavbar from '@/components/layout/appNavbar.vue'
import appFooter from '@/components/layout/appFooter.vue'

export default {

components: {
    appNavbar,
    appFooter
  },
  created() {
    this.$store.dispatch("users/loadUsers");
    this.$store.dispatch("pictures/loadPhotos");
  },
  
}
</script>


