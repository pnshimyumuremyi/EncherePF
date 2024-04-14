<template>
    <div class="modal fade" id="addUserModal" tabindex="-1" role="dialog" aria-labelledby="addUserModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="addUserModalLabel">Ajouter un utilisateur</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form @submit.prevent="addUser">
              <div class="form-group">
                <label for="nom">Nom</label>
                <input type="text" class="form-control" id="nom" v-model="nom">
              </div>
              <div class="form-group">
                <label for="prenom">Prénom</label>
                <input type="text" class="form-control" id="prenom" v-model="prenom">
              </div>
              <div class="form-group">
                <label for="email">Email</label>
                <input type="email" class="form-control" id="email" v-model="email">
              </div>
              <div class="form-group">
                <label for="avatar">Avatar</label>
                <input type="text" class="form-control" id="avatar" v-model="avatar">
              </div>
              <button type="submit" class="btn btn-primary">Ajouter</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name:'AddUserModal',
    props: ["revele", "toggleModale"],
    data() {
      return {
        nom: '',
        prenom: '',
        email: '',
        avatar: ''
      };
    },
    methods: {
      addUser() {
        console.log('Nouvel utilisateur ajouté:');
        console.log('Nom:', this.nom);
        console.log('Prénom:', this.prenom);
        console.log('Email:', this.email);
        console.log('Avatar:', this.avatar);
        // Vous pouvez également émettre un événement pour transmettre les données à un composant parent
      }
    }
  };
  </script>
  
  <style scoped>
  /* Styles spécifiques au composant modal ici */
  </style>
  