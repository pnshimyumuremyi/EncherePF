<template>
    <div class="container my-5">
      <h2>Gestion des rôles</h2>
      
    <!--<modale :toggleModale="toggleModale"></modale>
    <div v-on:click="toggleModale" class="btn btn-success">Ajouter un utilisateur</div>
    <AddUserModal />-->
      
      <table class="table mt-3">
        <thead>
          <tr>
            <th>#</th>
            <th>Nom rôle</th>
            <th>Traitement</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(role, index) in roles" :key="role.id">
            <td>{{ index + 1 }}</td>
            <td>{{ role.nom_role }}</td>
            <td>
              <button  @click="router.push(`/updateRole/${role.id}`)" class="btn btn-primary">Modifier</button>
              <button @click="removeRole(role.id)" class="btn btn-danger">Supprimer</button>
            </td>
          </tr>
        </tbody>
      </table>
      <div>
      <button
        @click="router.push('/addRole')"
        class="btn btn-primary"
      >
        Ajouter un nouveau rôle
      </button>
    </div>
    </div>
    
  </template>
  
  <script setup>
 import { ref, reactive, onBeforeMount } from "vue";
import useRole from "@/services/serviceRole";
import { useRouter } from "vue-router";

const {RoleListe,deleteRole} = useRole();

//Fonction utilisee pour la redirection
const router = useRouter();

// Variable pour contenir la liste des roles venant de la base de donnee
let roles = ref([]);

const removeRole = (id) => {
  //Appel de la route de suppression du compte (depuis express)
  deleteRole(id)
    .then((res) => {
      //Si tout se passe bien, on recharge la liste complete des comptes pour raffraichir l'ecran
      console.log("role supprime");

      //Lecture de la liste complete depuis express
      RoleListe()
        .then((res) => {
          console.log("Les resultats", res);
          roles.value = res.data;
        })
        .catch((err) =>
          console.log("Il ya erreur de lectures des roles", err)
        );
    })
    .catch((err) =>
      console.log("Erreur lors de la suppression du rôle", err)
    );
};

// Cette fonction permet de charger la liste des compte avant que la page n'apparait a l'ecran
onBeforeMount(() => {
  //Chargement de la liste des compte depuis le backend (express)
  RoleListe()
    .then((res) => {
      roles.value = res.data;
    })
    .catch((err) =>
      console.log("Il y a erreur de lectures des roles", err)
    );
});
  </script>
  
  <style>
  /* Ajoutez du CSS personnalisé si nécessaire */
  </style>
  