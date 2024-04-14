<template>
    <div class="container my-5">
      <h2>Gestion des offres</h2>
      
    <!--<modale :toggleModale="toggleModale"></modale>
    <div v-on:click="toggleModale" class="btn btn-success">Ajouter un utilisateur</div>
    <AddUserModal />-->
      
      <table class="table mt-3">
        <thead>
          <tr>
            <th>#</th>
            <th>Montant</th>
            <th>Date offre</th>
            <th>Utilisateur ID</th>
            <th>Enchère ID</th>
            <th>Traitement</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(offre, index) in offres" :key="offre.id">
            <td>{{ index + 1 }}</td>
            <td>{{ offre.montant }}</td>
            <td>{{ offre.date_offre }}</td>
            <td>{{ offre.utilisateurId }}</td>
            <td>{{ offre.enchereId }}</td>
            <td>
              <button  @click="router.push(`/updateOffre/${offre.id}`)" class="btn btn-primary">Modifier</button>
              <button @click="removeOffre(offre.id)" class="btn btn-danger">Supprimer</button>
            </td>
          </tr>
        </tbody>
      </table>
      <div>
      <button
        @click="router.push('/AddOffre')"
        class="btn btn-primary"
      >
        Ajouter une nouvelle offre
      </button>
    </div>
    </div>
    
  </template>
  
  <script setup>
 import { ref, reactive, onBeforeMount } from "vue";
import useOffre from "@/services/serviceOffre";
import { useRouter } from "vue-router";

const {getAllOffres,deleteOffre} = useOffre();

//Fonction utilisee pour la redirection
const router = useRouter();

// Variable pour contenir la liste des offres venant de la base de donnee
let offres = ref([]);

const removeOffre = (id) => {
  //Appel de la route de suppression d'une offre (depuis express)
  deleteOffre(id)
    .then((res) => {
      //Si tout se passe bien, on recharge la liste complete des offres pour raffraichir l'ecran
      console.log("Offre supprime");

      //Lecture de la liste complete depuis express
      getAllOffres()
        .then((res) => {
          console.log("Les resultats", res);
          offres.value = res.data;

        })
        .catch((err) =>
          console.log("Il ya erreur de lectures des enchères", err)
        );
    })
    .catch((err) =>
      console.log("Erreur lors de la suppression de l'offre", err)
    );
};

// Cette fonction permet de charger la liste des offres avant que la page n'apparait a l'ecran
onBeforeMount(() => {
  //Chargement de la liste des offres depuis le backend (express)
  getAllOffres()
    .then((res) => {
      offres.value = res.data;
    })
    .catch((err) =>
      console.log("Il y a erreur de lectures des offres", err)
    );
});
  </script>
  
  <style>
  /* Ajoutez du CSS personnalisé si nécessaire */
  </style>
  