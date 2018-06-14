<template>
  <div class='content'>
    <input placeholder='地图允许的最小级别' v-model='min' @blur='minchange'/>
    <input placeholder='地图允许的最大级别' v-model='max' @blur='maxchange'/> 
    <div id='allmap'></div>
  </div>
</template>

<script>

export default {
  name: 'App_hello',
  data (){
    return {
      max:10,
      min:0,
    }
  },
  mounted(){
    this.init ()
  },
  
  methods : {
    init(){
      // 百度地图API功能
      var map = new BMap.Map("allmap",{minZoom:this.min,maxZoom:this.max}); // 创建Map实例,设置地图允许的最小/大级别
      map.centerAndZoom(new BMap.Point(116.4035,39.915),8); 
      map.enableScrollWheelZoom(true);
    },
    minchange(){
      this.init();
    },
    maxchange(){
      this.init();
    }
  }
}
</script>

<style scoped>
  #allmap,.content{
    width:100%;
    height:100%;
  }
  #allmap{
    margin-top:30px;
  }
</style>
