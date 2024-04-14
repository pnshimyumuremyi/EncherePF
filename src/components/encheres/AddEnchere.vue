  <template>
        <div id="app">
  <div class="card border-secondary mt-5 mx-auto" style="max-width: 500px;">
    <div class="card-header bg-secondary text-light">
      <h2><i class="bi bi-person-fill"></i> Connectez-vous !</h2>
    </div>
    <div class="card-body">
      <form @submit.prevent="addEnchere">
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
<p>&nbsp;</p> 
<p>&nbsp;</p>   
  </template>
  
  <script setup>
    import { ref } from "vue";
    import { useRouter } from "vue-router";
import useEnchere from "@/services/serviceEnchere";

    const router = useRouter();
    const { createEnchere } = useEnchere();
    let enchere = ref({
      titre: "",
      description: "",
      prix_depart: "",
      date_debut:"",
      date_fin:"",
      utilisateurId:4
    });
    
    function addEnchere() {
      createEnchere(enchere.value)
        .then((res) => {
          console.log("Nouvel enchère créé", res);
          router.push("/enchere");
        })
        .catch((err) => console.log("Error while adding a user", err));
    }

  </script>
  