  <template>
        <div id="app">
  <div class="card border-secondary mt-5 mx-auto" style="max-width: 500px;">
    <div class="card-header bg-secondary text-light">
      <h2><i class="bi bi-person-fill"></i> Ajouter des commentaires</h2>
    </div>
    <div class="card-body">
      <form @submit.prevent="addCommentaire">
        <div class="mb-3">
          <label for="contenu" class="form-label">Contenu</label>
          <input type="text" id="contenu" v-model="commentaire.contenu" class="form-control" required>
        </div>
        <div class="mb-3">
          <label for="date_offre" class="form-label">Date commentaire</label>
              <input type="text" id="date_offre" v-model="commentaire.date_commentaire" class="form-control">
        </div>
        <div class="mb-3">
          <label for="utilisateurId" class="form-label">Utilisateur</label>
          <input type="number" id="utilisateurId" v-model="commentaire.utilisateurId" class="form-control" disabled>
        </div>
        <div class="mb-3">
          <label for="enchereId" class="form-label">Enchère</label>
          <input type="text" id="enchereId" v-model="commentaire.enchereId" class="form-control" disabled>
        </div>
        <button type="submit" class="btn btn-primary">Soumettre</button>
      </form>
    </div>
  </div>
</div>
<p>&nbsp;</p> 
<p>&nbsp;</p>
<p>&nbsp;</p> 
<p>&nbsp;</p> 
<p>&nbsp;</p> 
<p>&nbsp;</p>   
  </template>
  
  <script setup>
    import { ref } from "vue";
    import useCommentaire from "@/services/serviceCommentaire";
    import { useRouter, useRoute } from "vue-router";

    const router = useRouter();

    //Fonction pour recuperer l'id passe en parametre
    const route = useRoute();

//L'id du departement que l'on doit mettre a jour
    const id = route.params.id;

    const { createCommentaire } = useCommentaire();
    let commentaire = ref({
    contenu: "",
    date_commentaire: "",
    utilisateurId: 4,
    enchereId:id,
});
    
    function addCommentaire() {
      createCommentaire(id,commentaire.value)
        .then((res) => {
          router.push(`/commentaire/enchere/${id}`);
        })
        .catch((err) => console.log("Error while adding a offre", err));
    }

  </script>
  