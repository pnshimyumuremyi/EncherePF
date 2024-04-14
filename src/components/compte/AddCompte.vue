  <template>
        <div id="app">
  <div class="card border-secondary mt-5 mx-auto" style="max-width: 500px;">
    <div class="card-header bg-secondary text-light">
      <h2><i class="bi bi-person-fill"></i> Ajouter un compte</h2>
    </div>
    <div class="card-body">
      <form @submit.prevent="addCompte">
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
<p>&nbsp;</p> 
<p>&nbsp;</p>   
  </template>
  
  <script setup>
    import { ref } from "vue";
    import useCompte from "@/services/serviceCompte";
    import { useRouter } from "vue-router";

    const router = useRouter();
    const { createCompte } = useCompte();
    let compte = ref({
    solde: 0,
    utilisateurId: 4
});
    
    function addCompte() {
      createCompte(compte.value)
        .then((res) => {
          router.push("/compte");
          
        })
        .catch((err) => console.log("Error while adding a compte", err));
    }

  </script>
  