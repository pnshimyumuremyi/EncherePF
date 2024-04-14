  <template>
        <div id="app">
  <div class="card border-secondary mt-5 mx-auto" style="max-width: 500px;">
    <div class="card-header bg-secondary text-light">
      <h5><i class="bi bi-person-fill"></i> Modifier le compte</h5>
    </div>
    <div class="card-body">
      <form @submit.prevent="updatecompte0">
        <div class="mb-3">
          <label for="solde" class="form-label">solde</label>
          <input type="number" id="solde" v-model="compte.solde" class="form-control" required>
        </div>
        <div class="mb-3">
          <label for="utilisateurId" class="form-label">Utilisateur</label>
          <input type="number" id="utilisateurId" v-model="compte.utilisateurId" class="form-control" disabled>
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
import useCompte from "@/services/serviceCompte";
import { useRouter, useRoute } from "vue-router";

// La fonction pour rediriger vers une autre page
const router = useRouter();

//Fonction pour recuperer l'id passe en parametre
const route = useRoute();

//L'id du departement que l'on doit mettre a jour
const id = route.params.id;

const { updateCompte, getCompteById } = useCompte();
let compte = ref({
  solde: 0,
  utilisateurId: 4,
});

function updatecompte0() {
  updateCompte(id, compte.value).then((res) => {
    router
      .push("/compte")
      .catch((err) =>
        console.log("Erreur lors de la mise a jour du compte", err)
      );
  });
}

onBeforeMount(() => {
  //On charge les valeurs precedentes du compte avant l'affichage a l'ecran
  if (id) {
    getCompteById(id)
      .then((res) => {
        compte.value = res.data;
      })
      .catch((err) =>
        console.log("Erreur lors de la lecture du compte", err)
      );
  }
});
  </script>
  