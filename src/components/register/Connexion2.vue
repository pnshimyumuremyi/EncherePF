<template>
    <div class="container">
      <div class="row">
        <div class="col-md-6 img">
         <p>&nbsp;</p>
        </div>
        <div class="col-md-6 aform">
            <p>&nbsp;</p>
            <p>&nbsp;</p>
          <h2>Connexion</h2>
          <form @submit.prevent="loginUser">
            <div class="form-group">
              <label for="email">Email</label>
              <input type="email" class="form-control" id="email" v-model="user.email" required>
            </div>
            <div class="form-group">
              <label for="password">Mot de passe</label>
              <input type="password" class="form-control" id="password" v-model="user.password" required>
            </div>
            <button type="submit" class="btn btn-primary">Se connecter</button>
          </form>
        </div>
      </div>
    </div>
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
          router.push("/enchere")
          
        })
        .catch((err) => console.log("Error while adding a user", err));
    }
  
  </script>
  
  <style>
  /* Styles CSS personnalisés */
  .img{
    height: 500px;
    background-image: url('/src/assets/terrebonne.png');
  }
  
  
  </style>
  