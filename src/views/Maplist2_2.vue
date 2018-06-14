<template>
  <div id='distance' v-if='show'>
    <div id='allmap'></div>
  </div> 
</template>

<script>
export default {
  name: 'App_hello',
  components:{
    
  },
  data (){
    return {
      show:true,
      map:{},
      myDis:{}
    }
  },
  mounted(){
    this.init ()
  },
  methods : {
    init(){

      let distance = document.getElementById('distance');
      let script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = 'http://api.map.baidu.com/library/DistanceTool/1.2/src/DistanceTool_min.js';  
      distance.insertBefore(script,document.getElementById('allmap'))

      let that = this;
      setTimeout(function(){
        // 百度地图API功能
        that.map = new BMap.Map("allmap");           
        that.map.centerAndZoom("重庆",12);                  
        that.myDis = new BMapLib.DistanceTool(that.map);
        that.map.addEventListener("load",function(){
          that.myDis.open();  //开启鼠标测距
          //myDis.close();  //关闭鼠标测距大
        });
      },500)

    

    }
  },
  destroyed(){
    this.show = false;
    this.map = {};
    this.myDis = {};
  }
}
</script>

<style>
  #allmap,#distance{
    width:100%;
    height:100%;
  }
</style>
