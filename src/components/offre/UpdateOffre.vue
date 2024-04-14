  <template>
        <div id="app">
  <div class="card border-secondary mt-5 mx-auto" style="max-width: 500px;">
    <div class="card-header bg-secondary text-light">
      <h5><i class="bi bi-person-fill"></i> Modifier l'offre</h5>
    </div>
    <div class="card-body">
      <form @submit.prevent="updateOffre0">
        <div class="mb-3">
          <label for="montant" class="form-label">Montant</label>
          <input type="number" id="montant" v-model="offre.montant" class="form-control" required>
        </div>
        <div class="mb-3">
          <label for="date_offre" class="form-label">Date offre</label>
              <input type="text" id="date_offre" v-model="offre.date_offre" class="form-control">
        </div>
        <div class="mb-3">
          <label for="utilisateurId" class="form-label">Utilisateur</label>
          <input type="number" id="utilisateurId" v-model="offre.utilisateurId" class="form-control" disabled>
        </div>
        <div class="mb-3">
          <label for="enchereId" class="form-label">Enchère</label>
          <input type="text" id="enchereId" v-model="offre.enchereId" class="form-control" disabled>
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
  </template>
  
  <script setup>
import { onBeforeMount, ref } from "vue";
import useOffre from "@/services/serviceOffre";
import { useRouter, useRoute } from "vue-router";

// La fonction pour rediriger vers une autre page
const router = useRouter();

//Fonction pour recuperer l'id passe en parametre
const route = useRoute();

//L'id du departement que l'on doit mettre a jour
const id = route.params.id;

const { updateOffre, getOffreById } = useOffre();
let offre = ref({
  montant: 0,
  date_offre: "",
  utilisateurId: 4,
  enchereId:id,
});

function updateOffre0() {
  updateOffre(id, offre.value).then((res) => {
    console.log("offre mis a jour", res);
    router
      .push(`/offre/enchere/${id}`)
      .catch((err) =>
        console.log("Erreur lors de la mise a jour de l'offre", err)
      );
  });
}

onBeforeMount(() => {
  //On charge les valeurs precedentes de l'offre avant l'affichage a l'ecran
  if (id) {
    getOffreById(id)
      .then((res) => {
        offre.value = res.data;
      })
      .catch((err) =>
        console.log("Erreur lors de la lecture de l'offre", err)
      );
  }
});
  </script>
  