<template>
    <div class="bloc-modale" v-if="revele">
      <div class="overlay" v-on:click="toggleModale"></div>
  
      <div class="modale card">
        <div v-on:click="toggleModale" class="btn-modale btn btn-danger">X</div>
        <h2>Le contenu de la modale</h2>
        <div class="modal-body">
            <form @submit.prevent="submitForm">
        <div class="mb-3">
          <label for="nom" class="form-label">Nom</label>
          <input type="text" id="nom" v-model="nom" class="form-control" required>
        </div>
        <div class="mb-3">
          <label for="prenom" class="form-label">Prénom</label>
          <input type="text" id="prenom" v-model="prenom" class="form-control" required>
        </div>
        <div class="mb-3">
          <label for="email" class="form-label">Email</label>
          <input type="email" id="email" v-model="email" class="form-control" required>
        </div>
        <button type="submit" class="btn btn-primary">Soumettre</button>
      </form>
        </div>
      </div>
    </div>
  </template>
  
  
  <script>
  export default {
    name: "Modale",
    props: ["revele", "toggleModale"],
  };
  </script>
  
  
  <style scoped>
  .bloc-modale {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .overlay {
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
  
  .modale {
    background: #f1f1f1;
    color: #333;
    padding: 50px;
    position: fixed;
    top: 30%;
  }
  
  .btn-modale {
    position: absolute;
    top: 10px;
    right: 10px;
  }
  
  </style>