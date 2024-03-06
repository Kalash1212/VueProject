<template>
  <v-app>
  <v-main> 
        <router-view></router-view>
    </v-main>
  </v-app>
 </template>
 
 
 <script>
 export default{
   name: 'App',
   mounted(){
     this.$store.dispatch('loadProducts')
   }
 }
 </script>
 
 
 <style lang='scss'>
 </style>
