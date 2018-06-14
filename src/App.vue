<template>
  <div id="app">
    <Header></Header>  
    <div class='main' :style='{"height":mainHeight+"px"}'>
      <div class='left-menu'><LeftMenu></LeftMenu></div>
      <div class='content-map'> <router-view></router-view></div>   
    </div> 
    <Footer></Footer>  
  </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'
import LeftMenu from './components/LeftMenu'
export default {
  name: 'App',
  data (){
    return {
      name : '222',
      mainHeight:1000,
      mapContentWidth:1000
    }
  },
  created(){
    let height = document.documentElement.offsetHeight || document.body.offsetHeight ;

    this.mainHeight = height - 50;
    
  },
  methods : {
  
  },
  components:{
    Header,Footer,LeftMenu
  }
}
</script>

<style>
 @import './assets/css/global.css'; 
.main{
  overflow:hidden;
}
.left-menu{
  min-width:201px;
  width:17%;
  height:100%;
  float:left;
  position:relative;
}
.content-map{
  float:left;
  width:83%;
  height:100%;
  overflow:hidden;
}
</style>
