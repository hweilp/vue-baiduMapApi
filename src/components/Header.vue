<template>
  <div id='header'>
    <header>
      <router-link :to='{name:"Index"}'>
       <img src='../assets/logo.png'>
      </router-link>
    </header>    
  </div>
</template>

<script>

export default {
  name: 'App_header',
  data (){
    return {
    
    }
  },
  created(){
    
  },
  methods : {
  
  }
}
</script>

<style>
  header{
    background:#0075c7;
    height:50px;
    width:100%;
  }
  header a{
    display:inline-block;
    padding-top:7px;
    padding-left:20px;
  }
</style>
