<template>
    <div class="container my-5">
      <h2>Gestion des enchères</h2>
      
    <!--<modale :toggleModale="toggleModale"></modale>
    <div v-on:click="toggleModale" class="btn btn-success">Ajouter un utilisateur</div>
    <AddUserModal />-->
      
      <table class="table mt-3">
        <thead>
          <tr>
            <th>#</th>
            <th>Titre</th>
            <th>Description</th>
            <th>Prix départ</th>
            <th>Date début</th>
            <th>Date fin</th>
            <th>Traitement</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(enchere, index) in encheres" :key="enchere.id">
            <td>{{ index + 1 }}</td>
            <td>{{ enchere.titre }}</td>
            <td>{{ enchere.description }}</td>
            <td>{{ enchere.prix_depart }}</td>
            <td>{{ enchere.date_debut }}</td>
            <td>{{ enchere.date_fin }}</td>
            <td>
              <button  @click="router.push(`/updateEnchere/${enchere.id}`)" class="btn btn-primary">Modifier</button>
              <button @click="removeEnchere(enchere.id)" class="btn btn-danger">Supprimer</button>
            </td>
          </tr>
        </tbody>
      </table>
      <div>
      <button
        @click="router.push('/addEnchere')"
        class="btn btn-primary"
      >
        Ajouter un enchère
      </button>
    </div>
    </div>
    
  </template>
  
  <script setup>
 import { ref, reactive, onBeforeMount } from "vue";
import useEnchere from "@/services/serviceEnchere";
import { useRouter } from "vue-router";

const {getAllEncheres,deleteEnchere} = useEnchere();

//Fonction utilisee pour la redirection
const router = useRouter();

// Variable pour contenir la liste des utilisateurs venant de la base de donnee
let encheres = ref([]);

const removeEnchere = (id) => {
  //Appel de la route de suppression d'un utilisateur (depuis express)
  deleteEnchere(id)
    .then((res) => {
      //Si tout se passe bien, on recharge la liste complete des departements pour raffraichir l'ecran
      console.log("Enchère supprime");

      //Lecture de la liste complete depuis express
      getAllEncheres()
        .then((res) => {
          console.log("Les resultats", res);
          encheres.value = res.data;

        })
        .catch((err) =>
          console.log("Il ya erreur de lectures des enchères", err)
        );
    })
    .catch((err) =>
      console.log("Erreur lors de la suppression de l'enchère", err)
    );
};

// Cette fonction permet de charger la liste des utilisateurs avant que la page n'apparait a l'ecran
onBeforeMount(() => {
  //Chargement de la liste des utilisateurs depuis le backend (express)
  getAllEncheres()
    .then((res) => {
      encheres.value = res.data;
    })
    .catch((err) =>
      console.log("Il y a erreur de lectures des enchères", err)
    );
});
  </script>
  
  <style>
  /* Ajoutez du CSS personnalisé si nécessaire */
  </style>
  