  <template>
        <div id="app">
  <div class="card border-secondary mt-5 mx-auto" style="max-width: 500px;">
    <div class="card-header bg-secondary text-light">
      <h5><i class="bi bi-person-fill"></i> Modifier l'enchère</h5>
    </div>
    <div class="card-body">
      <form @submit.prevent="updateEnchere0">
        <div class="mb-3">
          <label for="titre" class="form-label">Titre</label>
          <input type="text" id="titre" v-model="enchere.titre" class="form-control" required>
        </div>
        <div class="mb-3">
          <label for="description" class="form-label">Description</label>
              <textarea id="description" v-model="enchere.description" class="form-control"></textarea>
        </div>
        <div class="mb-3">
          <label for="prix_depart" class="form-label">Prix départ ($)</label>
          <input type="number" id="prix_depart" v-model="enchere.prix_depart" class="form-control" required>
        </div>
        <div class="mb-3">
          <label for="date_debut" class="form-label">Date début</label>
          <input type="text" id="date_debut" v-model="enchere.date_debut" class="form-control" required>
        </div>
        <div class="mb-3">
          <label for="date_fin" class="form-label">Date fin </label>
          <input type="text" id="date_fin" v-model="enchere.date_fin" class="form-control" required>
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
import useEnchere from "@/services/serviceEnchere";
import { useRouter, useRoute } from "vue-router";

// La fonction pour rediriger vers une autre page
const router = useRouter();

//Fonction pour recuperer l'id passe en parametre
const route = useRoute();

//L'id du departement que l'on doit mettre a jour
const id = route.params.id;

const { updateEnchere, getEnchereById } = useEnchere();
let enchere = ref({
  titre: "",
  description: "",
  prix_depart: "",
  date_debut:"",
  date_fin:""
});

function updateEnchere0() {
  updateEnchere(id, enchere.value).then((res) => {
    console.log("enchere mis a jour", res);
    router
      .push("/enchere")
      .catch((err) =>
        console.log("Erreur lors de la mise a jour de l'enchère", err)
      );
  });
}

onBeforeMount(() => {
  //On charge les valeurs precedentes du departement avant l'affichage a l'ecran
  if (id) {
    getEnchereById(id)
      .then((res) => {
        enchere.value = res.data;
      })
      .catch((err) =>
        console.log("Erreur lors de la lecture du departement", err)
      );
  }
});
  </script>
  