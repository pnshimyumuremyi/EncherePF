<template>
    <div class="container-fluid">
      <div class="row">
        <!-- Sidebar gauche -->
        <div class="col-md-3">
          <div class="sidebar">
            <ul class="nav flex-column">
              <li class="nav-item" @click="showComponent('UserList')">
                <a class="nav-link" href="#">Espace utilisateur</a>
              </li>
              <li class="nav-item" @click="showComponent('CompteList')">
                <a class="nav-link" href="#">Gestion des comptes</a>
              </li>
              <li class="nav-item" @click="showComponent('OffreList')">
                <a class="nav-link" href="#">Gestion des offres</a>
              </li>
             <li class="nav-item" @click="showComponent('EnchereList')">
                <a class="nav-link" href="#">Gestion des enchères</a>
              </li>
              <li class="nav-item" @click="showComponent('RoleList')">
                <a class="nav-link" href="#">Gestion des rôles</a>
              </li>
            </ul>
          </div>
        </div>
  
        <!-- Contenu principal -->
        <div class="col-md-9">
          <div class="main-content">
            <component :is="selectedComponent" />
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import UserList from './UserList.vue';
  
  export default {
    name: 'MainPage',
    data() {
      return {
        selectedComponent: null,
      };
    },
    methods: {
      showComponent(componentName) {
        this.selectedComponent = componentName;
      },
    },
    components: {
      UserList,
    },
  };
  </script>
  
  <style>
  .sidebar {
    background-color: #f8f9fa;
    height: 100vh;
  }
  
  .main-content {
    padding: 20px;
  }
  </style>
  