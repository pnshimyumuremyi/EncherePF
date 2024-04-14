<template>
    <div class="container my-5">
      <h2>Gestion des comptes</h2>
      
    <!--<modale :toggleModale="toggleModale"></modale>
    <div v-on:click="toggleModale" class="btn btn-success">Ajouter un utilisateur</div>
    <AddUserModal />-->
      
      <table class="table mt-3">
        <thead>
          <tr>
            <th>#</th>
            <th>Solde</th>
            <th>Utilisateur ID</th>
            <th>Traitement</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(compte, index) in comptes" :key="compte.id">
            <td>{{ index + 1 }}</td>
            <td>{{ compte.solde }}</td>
            <td>{{ compte.utilisateurId }}</td>
            <td>
              <button  @click="router.push(`/updateCompte/${compte.id}`)" class="btn btn-primary">Modifier</button>
              <button @click="removeCompte(compte.id)" class="btn btn-danger">Supprimer</button>
            </td>
          </tr>
        </tbody>
      </table>
      <div>
      <button
        @click="router.push('/addCompte')"
        class="btn btn-primary"
      >
        Ajouter un nouveau compte
      </button>
    </div>
    </div>
    
  </template>
  
  <script setup>
 import { ref, reactive, onBeforeMount } from "vue";
import useCompte from "@/services/serviceCompte";
import { useRouter } from "vue-router";

const {getAllComptes,deleteCompte} = useCompte();

//Fonction utilisee pour la redirection
const router = useRouter();

// Variable pour contenir la liste des comptes venant de la base de donnee
let comptes = ref([]);

const removeCompte = (id) => {
  //Appel de la route de suppression du compte (depuis express)
  deleteCompte(id)
    .then((res) => {
      //Si tout se passe bien, on recharge la liste complete des comptes pour raffraichir l'ecran
      console.log("compte supprime");

      //Lecture de la liste complete depuis express
      getAllComptes()
        .then((res) => {
          console.log("Les resultats", res);
          comptes.value = res.data;
        })
        .catch((err) =>
          console.log("Il ya erreur de lectures des enchères", err)
        );
    })
    .catch((err) =>
      console.log("Erreur lors de la suppression du compte", err)
    );
};

// Cette fonction permet de charger la liste des compte avant que la page n'apparait a l'ecran
onBeforeMount(() => {
  //Chargement de la liste des compte depuis le backend (express)
  getAllComptes()
    .then((res) => {
      comptes.value = res.data;
    })
    .catch((err) =>
      console.log("Il y a erreur de lectures des comptes", err)
    );
});
  </script>
  
  <style>
  /* Ajoutez du CSS personnalisé si nécessaire */
  </style>
  