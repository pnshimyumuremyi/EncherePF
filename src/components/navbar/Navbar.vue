<template>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container">
        <a class="navbar-brand order-0" href="#">Pascal</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse order-1" id="navbarNav">
          <ul class="navbar-nav ml">
            <li class="nav-item">
              <router-link to="/" class="nav-link">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/userList" class="nav-link">Users</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/enchere" class="nav-link">Vente des enchères</router-link>
            </li>
              <li class="nav-item">
              <router-link to="/compte" class="nav-link">Les comptes</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/role" class="nav-link">Gestion des rôles</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/connexion2" class="nav-link">Connexion</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </template>
  
  <script>
  import Link from './link/Link.vue';
  
  export default {
    name: 'Navbar',
    components: {
      Link
    }
  };
  </script>
  
  <style scoped>
   
  /* Styles spécifiques à la barre de navigation */
  
  </style>
  