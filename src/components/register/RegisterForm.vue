  <template>
        <div id="app">
  <div class="card border-secondary mt-5 mx-auto" style="max-width: 500px;">
    <div class="card-header bg-secondary text-light">
      <h5><i class="bi bi-person-fill"></i> Formulaire d'inscription</h5>
    </div>
    <div class="card-body">
      <form @submit.prevent="addNewUtilisateur">
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
import useUtilisateur from '@/services/serviceUtilisateur';
import { useRouter } from 'vue-router';
import { ref } from "vue";
//import { useAuth } from '@/services/serviceAuth';

    // Cette fonction est utilisee pour rediriger vers une page
const router = useRouter();
const { createUtilisateur } = useUtilisateur();

let user = ref({
  nom: "",
  prenom: "",
  email: "",
  password:"123456789",
  roleId:1
});

function addNewUtilisateur() {
  //Appel de notre route dans le backend (express) pour ajouter un utilisateur
  createUtilisateur(user.value)
    .then((res) => {
      //Si tout se passe bien ce message apparait dans la console
      console.log("Nouvel utilisateur", res);
      //On va etre redirige vers la liste des utilisateurs
      router.push("/userList");
    })
    .catch((err) => console.log("Erreur lors de l'ajout", err));
}
  </script>
  