<template>
  <div id='distance'>
    <div id="allmap" style="overflow:hidden;zoom:1;position:relative;"> 
      <div id="map" style="height:100%;-webkit-transition: all 0.5s ease-in-out;transition: all 0.5s ease-in-out;"></div>
    </div>
    <div id="result">
      <input type="button" value="获取绘制的覆盖物个数" @click="custAlert(overlays)"/>
      <input type="button" value="清除所有覆盖物" @click="clearAll()"/>
    </div>
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
      myDrag : {},
      overlays:0
    }
  },
  created(){
   // this.init ()
  },
  mounted(){
    this.init ()
  },
  methods : {
    init(){
      var map = new BMap.Map('map');
      var poi = new BMap.Point(116.307852,40.057031);
      map.centerAndZoom(poi, 16);
      map.enableScrollWheelZoom();  
      var overlays = [];
      var overlaycomplete = function(e){
        overlays.push(e.overlay);
        console.log(overlays)
      };
      var styleOptions = {
        strokeColor:"red",    //边线颜色。
        fillColor:"red",      //填充颜色。当参数为空时，圆形将没有填充效果。
        strokeWeight: 3,       //边线的宽度，以像素为单位。
        strokeOpacity: 0.8,    //边线透明度，取值范围0 - 1。
        fillOpacity: 0.6,      //填充的透明度，取值范围0 - 1。
        strokeStyle: 'solid' //边线的样式，solid或dashed。
      }
      //实例化鼠标绘制工具
      var drawingManager = new BMapLib.DrawingManager(map, {
        isOpen: false, //是否开启绘制模式
        enableDrawingTool: true, //是否显示工具栏
        drawingToolOptions: {
            anchor: BMAP_ANCHOR_TOP_RIGHT, //位置
            offset: new BMap.Size(5, 5), //偏离值
        },
        circleOptions: styleOptions, //圆的样式
        polylineOptions: styleOptions, //线的样式
        polygonOptions: styleOptions, //多边形的样式
        rectangleOptions: styleOptions //矩形的样式
      });  
      //添加鼠标绘制工具监听事件，用于获取绘制结果
      drawingManager.addEventListener('overlaycomplete', overlaycomplete);

  
    },
    clearAll (){
        for(var i = 0; i < overlays.length; i++){
            map.removeOverlay(overlays[i]);
        }
        overlays.length = 0   
    },
    custAlert(val){
      alert(val)
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
