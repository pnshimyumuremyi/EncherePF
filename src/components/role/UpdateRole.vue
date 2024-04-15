  <template>
        <div id="app">
  <div class="card border-secondary mt-5 mx-auto" style="max-width: 500px;">
    <div class="card-header bg-secondary text-light">
      <h5><i class="bi bi-person-fill"></i> Modifier le rôle</h5>
    </div>
    <div class="card-body">
      <form @submit.prevent="updateRole0">
        <div class="mb-3">
          <label for="nom_role" class="form-label">Nom rôle</label>
          <input type="text" id="nom_role" v-model="role.nom_role" class="form-control" required>
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
import useRole from "@/services/serviceRole";
import { useRouter, useRoute } from "vue-router";

// La fonction pour rediriger vers une autre page
const router = useRouter();

//Fonction pour recuperer l'id passe en parametre
const route = useRoute();

//L'id du departement que l'on doit mettre a jour
const id = route.params.id;

const { updateRole, getRoleById } = useRole();
let role = ref({
  nom_role: ""
});

function updateRole0() {
  updateRole(id, role.value).then((res) => {
    router
      .push("/role")
      .catch((err) =>
        console.log("Erreur lors de la mise a jour du rôle", err)
      );
  });
}

onBeforeMount(() => {
  //On charge les valeurs precedentes du compte avant l'affichage a l'ecran
  if (id) {
    getRoleById(id)
      .then((res) => {
        compte.value = res.data;
      })
      .catch((err) =>
        console.log("Erreur lors de la lecture du rôle", err)
      );
  }
});
  </script>
  