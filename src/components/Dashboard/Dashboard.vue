<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container">
        <a class="navbar-brand" href="#">Mon Tableau de Bord</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <router-link to="/dashboard" class="nav-link">Dashboard</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/profil" class="nav-link">Profil</router-link>
            </li>
          </ul>
          <button class="btn btn-outline-danger" @click="logout">Déconnexion</button>
        </div>
      </div>
    </nav>
  </template>
  
  <script>
  export default {
    methods: {
      logout() {
        // Code pour déconnecter l'utilisateur
      }
    }
  }
  </script>
  
  <style>
  /* Styles CSS pour personnaliser la barre de navigation */
  </style>
  