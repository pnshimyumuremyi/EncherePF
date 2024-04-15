<template>
     <Navbar />
    <div class="container" style="margin-bottom: 50px;">

      <div class="row">
        <h1>Liste des commentaires </h1>
        <div>
      <button
        @click="router.push(`/addCommentaire/${_id}`)"
        class="btn btn-primary"
      >
        Ajouter un commentaire
      </button>
    </div>
        <div class="col-md-4" v-for="(card, index) in commentaires" :key="index">
            
          <div class="card">
            <!--<img :src="card.image" class="card-img-top" alt="Image de la carte">-->
            <img src="/src/assets/terrebonne.png" class="card-img-top" alt="Image de la carte"> 
            <div class="card-body">
              <h2 class="card-title">{{ card.contenu }}</h2>
              <p class="card-text">Date de commentaire: {{ card.date_commentaire }}</p>
              <p class="card-text">Utilisateur: {{ card.utilisateurId  }}</p>
            </div>
            <div class="card-footer">
            <div class="d-flex justify-content-between">
                <button @click="router.push(`/updateCommentaire/${card.id}`)" class="btn btn-primary"><span><i class="fas fa-edit text-white"></i> Modifier</span></button>
                <button @click="removeCommentaire(card.id)" class=" btn btn-danger"><span><i class="fas fa-trash-alt text-white"></i> Supprimer</span></button>
                
            </div>
          </div>
          </div>
        </div>
        
      </div>
    
    </div>
    <Footer />
  </template>
  
  <script setup>
import Navbar from '/src/components/navbar/Navbar.vue';
import Footer from '/src/components/footer/Footer.vue';
   import { ref, reactive, onBeforeMount } from "vue";
import useCommentaire from '@/services/serviceCommentaire';
import { useRouter, useRoute } from "vue-router";
const {getCommentairesByEnchereId,deleteCommentaire} = useCommentaire();

const router = useRouter();

//Fonction pour recuperer l'id passe en parametre
const route = useRoute();

//L'id du departement que l'on doit mettre a jour
const _id = route.params.id;

// Variable pour contenir la liste des utilisateurs venant de la base de donnee
let commentaires = ref([]);

const removeCommentaire = (id) => {
  //Appel de la route de suppression d'un utilisateur (depuis express)
  deleteCommentaire(id)
    .then((res) => {
      //Si tout se passe bien, on recharge la liste complete des departements pour raffraichir l'ecran
      console.log("Enchère supprime");

      //Lecture de la liste complete depuis express
      getCommentairesByEnchereId(_id)
        .then((res) => {
          console.log("Les resultats", res);
          commentaires.value = res.data;

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
  getCommentairesByEnchereId(_id)
    .then((res) => {
      commentaires.value = res.data;
    })
    .catch((err) =>
      console.log("Il y a erreur de lectures des enchères", err)
    );
});
  </script>
  
  <style>
  /* Styles CSS personnalisés */
  .card-img-top{
    height: 100px;
  }
  .ard-title{
    font-size: x-large;
    font-weight: bold;
  }
  .card{
    margin-bottom: 10px;
  }
  .footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: #f8f9fa; /* Couleur de fond du footer */
  color: #6c757d; /* Couleur du texte du footer */
  padding: 10px 0; /* Espacement intérieur du footer */
}
  </style>
  