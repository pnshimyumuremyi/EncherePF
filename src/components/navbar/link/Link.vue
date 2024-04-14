<template>
    <li class="nav-item">
      <router-link :to="to" class="nav-link" exact>{{ label }}</router-link>
    </li>
  </template>
  
  <script>
  export default {
    name: 'Link',
    props: {
      to: {
        type: String,
        required: true
      },
      label: {
        type: String,
        required: true
      }
    }
  };
  </script>
  
  <style>
  /* Styles spécifiques aux liens de menu */
  </style>
  