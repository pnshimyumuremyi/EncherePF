
<template>
  <header>
    <div>
     <!-- <Navbar />-->
    </div>
  </header>
  <RouterView />
  <Footer />
  
</template>

<script>
import Navbar from '/src/components/navbar/Navbar.vue';
import Footer from '/src/components/footer/Footer.vue';
import { RouterView } from 'vue-router'

export default {
  name: 'Home',
  components: {
    Navbar,
    Footer
  }
};
</script>

<style scoped>
/* Styles spécifiques à la page d'accueil */
  .style{
      text-align: justify;
  }
  .org{
      width: 650px;
      text-align: justify;
  }
  
  .footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: #f8f9fa; /* Couleur de fond du footer */
  color: #6c757d; /* Couleur du texte du footer */
  padding: 10px 0; /* Espacement intérieur du footer */
}
</style>
