  <template>
        <div id="app">
  <div class="card border-secondary mt-5 mx-auto" style="max-width: 500px;">
    <div class="card-header bg-secondary text-light">
      <h2><i class="bi bi-person-fill"></i> Ajouter un compte</h2>
    </div>
    <div class="card-body">
      <form @submit.prevent="addRole">
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
<p>&nbsp;</p> 
<p>&nbsp;</p>   
  </template>
  
  <script setup>
    import { ref } from "vue";
    import useRole from "@/services/serviceRole";
    import { useRouter } from "vue-router";

    const router = useRouter();
    const { createRole} = useRole();
    let role = ref({
      nom_role: ""
});
    
    function addRole() {
      createRole(role.value)
        .then((res) => {
          router.push("/role");
          
        })
        .catch((err) => console.log("Error while adding a role", err));
    }

  </script>
  