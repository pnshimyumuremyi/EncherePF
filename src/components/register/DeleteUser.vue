  <template>
        <div id="app">
  <div class="card border-secondary mt-5 mx-auto" style="max-width: 500px;">
    <div class="card-header bg-secondary text-light">
      <h5><i class="bi bi-person-fill"></i> Formulaire d'inscription</h5>
    </div>
    <div class="card-body">
      <form @submit.prevent="updateUser">
        <div class="mb-3">
          <label for="nom" class="form-label">Nom</label>
          <input type="text" id="nom" v-model="user.nom" class="form-control" required>
        </div>
        <div class="mb-3">
          <label for="prenom" class="form-label">Prénom</label>
          <input type="text" id="prenom" v-model="user.prenom" class="form-control" required>
        </div>
        <div class="mb-3">
          <label for="email" class="form-label">Email</label>
          <input type="email" id="email" v-model="user.email" class="form-control" required>
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
import useUtilisateur from "@/services/serviceUtilisateur";
import { useRouter, useRoute } from "vue-router";

// La fonction pour rediriger vers une autre page
const router = useRouter();

//Fonction pour recuperer l'id passe en parametre
const route = useRoute();

//L'id du departement que l'on doit mettre a jour
const id = route.params.id;

const { deleteUtilisateur, getUtilisateurById } = useUtilisateur();
let user = ref({
  nom: "",
  prenom: "",
  email: "",
});

function updateUser() {
  updateUtilisateur(id, user.value).then((res) => {
    console.log("user mis a jour", res);
    router
      .push("/userList")
      .catch((err) =>
        console.log("Erreur lors de la mise a jour du departement", err)
      );
  });
}

onBeforeMount(() => {
  //On charge les valeurs precedentes du departement avant l'affichage a l'ecran
  if (id) {
    getUtilisateurById(id)
      .then((res) => {
        user.value = res.data;
      })
      .catch((err) =>
        console.log("Erreur lors de la lecture du departement", err)
      );
  }
});
  </script>
  