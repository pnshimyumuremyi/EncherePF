<template>
    <div class="container my-5">
      <h2>Espace Utilisateur</h2>
      
    <!--<modale :toggleModale="toggleModale"></modale>
    <div v-on:click="toggleModale" class="btn btn-success">Ajouter un utilisateur</div>
    <AddUserModal />-->
      
      <table class="table mt-3">
        <thead>
          <tr>
            <th>#</th>
            <th>Avatar</th>
            <th>Nom</th>
            <th>Prénom</th>
            <th>Email</th>
            <th>Traitement</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(user, index) in utilisateurs" :key="user.id">
            <td>{{ index + 1 }}</td>
            <td><img src="/src/assets/avatar.png" alt="Avatar" style="width: 50px; height: 50px;"></td>
            <td>{{ user.nom }}</td>
            <td>{{ user.prenom }}</td>
            <td>{{ user.email }}</td>
            <td>
              <button  @click="router.push(`/updateUser/${user.id}`)" class="btn btn-primary">Modifier</button>
              <button @click="removeUser(user.id)" class="btn btn-danger">Supprimer</button>
            </td>
          </tr>
        </tbody>
      </table>
      <div>
      <button
        @click="router.push('/register')"
        class="btn btn-primary"
      >
        Ajouter un utilisateur
      </button>
    </div>
    </div>
    
  </template>
  
  <script setup>
 import { ref, reactive, onBeforeMount } from "vue";
import useUtilisateur from "@/services/serviceUtilisateur";
import { useRouter } from "vue-router";

const { getAllUtilisateurs, deleteUtilisateur } = useUtilisateur();
//Fonction utilisee pour la redirection
const router = useRouter();

// Variable pour contenir la liste des utilisateurs venant de la base de donnee
let utilisateurs = ref([]);

const removeUser = (id) => {
  //Appel de la route de suppression d'un utilisateur (depuis express)
  deleteUtilisateur(id)
    .then((res) => {
      //Si tout se passe bien, on recharge la liste complete des departements pour raffraichir l'ecran
      console.log("Utilisateur supprime");

      //Lecture de la liste complete depuis express
      getAllUtilisateurs()
        .then((res) => {
          console.log("Les resultats", res);
          utilisateurs.value = res.data;
        })
        .catch((err) =>
          console.log("Il ya erreur de lectures des utilisateurs", err)
        );
    })
    .catch((err) =>
      console.log("Erreur lors de la suppression de l'utilisateur", err)
    );
};

// Cette fonction permet de charger la liste des utilisateurs avant que la page n'apparait a l'ecran
onBeforeMount(() => {
  //Chargement de la liste des utilisateurs depuis le backend (express)
  getAllUtilisateurs()
    
    .then((res) => {
      utilisateurs.value = res.data;
    })
    .catch((err) =>
      console.log("Il y a erreur de lectures des utilisateurs", err)
    );
});
  </script>
  
  <style>
  /* Ajoutez du CSS personnalisé si nécessaire */
  </style>
  