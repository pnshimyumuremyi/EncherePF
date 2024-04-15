  <template>
        <div id="app">
  <div class="card border-secondary mt-5 mx-auto" style="max-width: 500px;">
    <div class="card-header bg-secondary text-light">
      <h2><i class="bi bi-person-fill"></i> Connectez-vous !</h2>
    </div>
    <div class="card-body">
      <form @submit.prevent="loginUser">
        <div class="mb-3">
          <label for="email" class="form-label">Email</label>
          <input type="email" id="email"  v-model="user.email" class="form-control" required>
        </div>
        <div class="mb-3">
          <label for="password" class="form-label">Mot de passe</label>
          <input type="password" id="password" v-model="user.password" class="form-control" required>
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
    import useUtilisateur from "@/services/serviceUtilisateur";
    import { useRouter } from "vue-router";
    import { useAuth } from '@/services/serviceAuth';

    const router = useRouter();
    const { login } = useUtilisateur();
    let user = ref({
      email: '',
      password: '',
    });
    console.log(user);
    function loginUser() {
        login(user.value)
        .then((res) => {
          useAuth.saveToken(res.token)
          console.log("Connexion réussie", res.token)
          router.push("/userList")
          
        })
        .catch((err) => console.log("Error while adding a user", err));
    }

  </script>
  