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

      var size = new BMap.Size(10, 20);
      // 添加城市事件
      map.addControl(new BMap.CityListControl({
        anchor: BMAP_ANCHOR_TOP_RIGHT,
        offset: size,      
      }));

      // 添加带有定位的导航控件
      var navigationControl = new BMap.NavigationControl({
        // 靠左上角位置
        anchor: BMAP_ANCHOR_TOP_LEFT,
        // LARGE类型
        type: BMAP_NAVIGATION_CONTROL_LARGE,
        // 启用显示定位
        enableGeolocation: false
      });
      map.addControl(navigationControl);

      // 左上角，添加比例尺
      var top_left_control = new BMap.ScaleControl({anchor: BMAP_ANCHOR_TOP_LEFT});
      map.addControl(top_left_control);        
      

      // 添加定位控件
      var geolocationControl = new BMap.GeolocationControl();
      geolocationControl.addEventListener("locationSuccess", function(e){
        // 定位成功事件
        var address = '';
        address += e.addressComponent.province;
        address += e.addressComponent.city;
        address += e.addressComponent.district;
        address += e.addressComponent.street;
        address += e.addressComponent.streetNumber;
        //alert("当前定位地址为：" + address);
      });
      geolocationControl.addEventListener("locationError",function(e){
        // 定位失败事件
        alert(e.message);
      });
      map.addControl(geolocationControl);
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
