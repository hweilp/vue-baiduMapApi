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
      var map = new BMap.Map("allmap");
      var point = new BMap.Point(116.404, 39.915);
      map.centerAndZoom(point, 14);
      map.enableScrollWheelZoom();
      map.enableInertialDragging();
 
      map.enableContinuousZoom();

      var mapType1 = new BMap.MapTypeControl({
        mapTypes: [BMAP_NORMAL_MAP,BMAP_HYBRID_MAP],
        anchor:BMAP_ANCHOR_TOP_RIGHT
      });
      var mapType2 = new BMap.MapTypeControl({anchor: BMAP_ANCHOR_TOP_LEFT});

      var overView = new BMap.OverviewMapControl(); 
      var overViewOpen = new BMap.OverviewMapControl({isOpen:true, anchor: BMAP_ANCHOR_BOTTOM_RIGHT});
      map.addControl(mapType1);          //2D图，卫星图
      map.addControl(mapType2);          //左上角，默认地图控件
      map.setCurrentCity("北京");        //由于有3D图，需要设置城市哦
      map.addControl(overView);          //添加默认缩略地图控件
      map.addControl(overViewOpen);      //右下角，打开

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
