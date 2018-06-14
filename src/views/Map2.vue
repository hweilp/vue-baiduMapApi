<template>
  <div id='allmap'>
    
  </div>
</template>

<script>

export default {
  name: 'App_hello',
  data (){
    return {
    
    }
  },
  mounted(){
    this.init ()
  },
  methods : {
    init(){
      // 百度地图API功能
      var map = new BMap.Map("allmap");  // 创建Map实例
      map.centerAndZoom("上海",15);      // 初始化地图,用城市名设置地图中心点
    }
  }
}
</script>

<style>
  #allmap{
    width:100%;
    height:100%;
  }
</style>
