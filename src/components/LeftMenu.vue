<template>
  <div id='leftMenu'>
    <aside>
     <el-menu
    :default-active="$route.path"
    class="el-menu-vertical-demo"
    background-color="#0b0512"
    text-color="#fff"
    active-text-color="#ffd04b"
    :unique-opened="true">
    <template v-for="(item,I) in menuList">
      <el-submenu :index="item.id" :key="I" v-if="item.children" class='menu-title'>
        <span slot="title">{{item.name}}</span>
        <router-link :to="v.path" v-for="(v,i) in item.children" :key="i">
          <el-menu-item :index="v.id">{{v.name}}</el-menu-item>
        </router-link>
      </el-submenu>
      <router-link v-else :to="item.path">
        <el-menu-item :index="item.id">        
          <span slot="title">{{item.name}}</span>
        </el-menu-item> 
      </router-link>
    </template>
  </el-menu>
    </aside> 
  </div>
</template>

<script>
import LeftMenu from '../router/LeftMenu'
export default {
  name: 'App_leftMenu',
  data (){
    return {
      menuList:LeftMenu
    }
  },
  created(){

  },
  methods : {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
  }
}
</script>

<style scoped>
  #leftMenu{
    height:100%;
  }
  aside{
    
  }

</style>
