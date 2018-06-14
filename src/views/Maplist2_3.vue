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
      map : {},
      myDrag : {}
    }
  },
  created(){
    this.init ()
  },
  mounted(){
    //this.init ()
  },
  methods : {
    init(){
      let distance = document.getElementById('distance')
      let Body = document.body;
      let script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = 'http://api.map.baidu.com/library/RectangleZoom/1.2/src/RectangleZoom_min.js';    
      Body.insertBefore(script,document.getElementById('app'))

      let that  = this;
      setTimeout(function(){
        // 百度地图API功能      
        that.map = new BMap.Map("allmap");            
        that.map.centerAndZoom("重庆",12);                 
        that.myDrag = new BMapLib.RectangleZoom(that.map, {
          followText: "拖拽鼠标进行操作"
        });
        that.myDrag.open();  //开启拉框放大
        //myDrag.close();  //关闭拉框放大
      },500)

    

    }
  },
  destroyed(){
    this.show = false;
    this.map = {};
    this.myDrag = {};
  }
}
</script>

<style>
  #allmap,#distance{
    width:100%;
    height:100%;
  }
</style>
