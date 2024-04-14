import { createRouter, createWebHistory } from 'vue-router'
//import HomeView from '../views/HomeView.vue'
import Home from '@/components/home/Home.vue'
//import RegisterPage from '@/components/register/RegisterPage.vue'
import Connexion from '@/components/register/Connexion.vue'
import Connexion2 from '@/components/register/Connexion2.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Connexion2
    },
    {
      path: '/register',
      name: 'register',
      component: ()=>import('../components/register/RegisterForm.vue')
    },
    {
      path: '/connexion',
      name: 'connexion',
      component: Connexion
    },
    {
      path: '/userList',
      name: 'userList',
      component: ()=>import('../components/register/UserList.vue')
    },
    {
      path: '/updateUser/:id',
      name: 'updateUser',
      component: ()=>import('../components/register/UpdateUser.vue')
    },
    {
      path: '/enchere',
      name: 'enchere',
      component: ()=>import('../components/encheres/CardList.vue')
    },
    {
      path: '/addEnchere',
      name: 'addEnchere',
      component: ()=>import('../components/encheres/AddEnchere.vue')
    },
    {
      path: '/updateEnchere/:id',
      name: 'updateEnchere',
      component: ()=>import('../components/encheres/UpdateEnchere.vue')
    },
    {
      path: '/offre/:id',
      name: 'offre',
      component: ()=>import('../components/offre/OffreList.vue')
    },
    {
      path: '/addOffre/:id',
      name: 'addOffre',
      component: ()=>import('../components/offre/AddOffre.vue')
    },
    {
      path: '/updateOffre/:id',
      name: 'updateOffre',
      component: ()=>import('../components/offre/UpdateOffre.vue')
    },
    //Gestion des comptes
    {
      path: '/compte',
      name: 'compte',
      component: ()=>import('../components/compte/CompteList.vue')
    },
    
    {
      path: '/addCompte',
      name: 'addCompte',
      component: ()=>import('../components/compte/AddCompte.vue')
    },
    {
      path: '/updateCompte/:id',
      name: 'updateCompte',
      component: ()=>import('../components/compte/UpdateCompte.vue')
    },
    //Gestion des rôles
    {
      path: '/role',
      name: 'role',
      component: ()=>import('../components/role/RoleList.vue')
    },
    
    {
      path: '/addRole',
      name: 'addRole',
      component: ()=>import('../components/role/AddRole.vue')
    },
    {
      path: '/updateRole/:id',
      name: 'updateRole',
      component: ()=>import('../components/role/UpdateRole.vue')
    },
    {
      path: '/offre/enchere/:id',
      name: 'offreEnchere',
      component: ()=>import('../components/offre/CardList.vue')
    },
    {
      path: '/commentaire/enchere/:id',
      name: 'commentaireEnchere',
      component: ()=>import('../components/commentaire/CardList.vue')
    },
    {
      path: '/addCommentaire/:id',
      name: 'addCompte',
      component: ()=>import('../components/commentaire/AddCommentaire.vue')
    },
    {
      path: '/updateCommentaire',
      name: 'updateCommentaire',
      component: ()=>import('../components/commentaire/UpdateCommentaire.vue')
    },
  ]
})

export default router
