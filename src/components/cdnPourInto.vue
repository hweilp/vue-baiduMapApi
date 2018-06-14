<template>
  <div id='cdn'>
    
  </div>
</template>

<script>

export default {
  name: 'App_module',
  data (){
    return {
    
    }
  },
  props:{
    pathSrc : {
      type : String,
      default : ''
    }
  },
  created(){
    let script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = this.pathSrc;
    document.body.appendChild(script);
  },
  methods : {
  
  }
}
</script>

<style>

</style>
