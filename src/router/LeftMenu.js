export default  [
	{
    name:'示例地图',
    path:'/',
    pathName:'Index',
    id:'10',
    children:[
     {
      name:'地图展示',
      path:'/',
      id:'1001',
      pathName:'Index',
      component: (resolve) => require(['../views/Index.vue'], resolve),       
     },
      {
      name:'根据城市名设置地图中心点',
      path:'/map2',
      id:'1002',
      pathName:'Map2',
      component: (resolve) => require(['../views/Map2.vue'], resolve),       
     },
      {
      name:'设置地图最大、最小级别',
      path:'/map3',
      id:'1003',
      pathName:'Map3',
      component: (resolve) => require(['../views/Map3.vue'], resolve),       
     }
    ]
  },
  {
    name:'控件示例',
    path:'/maplist1',
    pathName:'MapList1',
    id:'20', 
    children:[
      {
        name:'控件展示',
        path:'/maplist1_1',
        id:'2001',
        pathName:'Maplist1_1',
        component: (resolve) => require(['../views/Maplist1_1.vue'], resolve),       
      },
      {
        name:'卫星云图展示',
        path:'/maplist1_2',
        id:'2002',
        pathName:'Maplist1_2',
        component: (resolve) => require(['../views/Maplist1_2.vue'], resolve),       
      },
    ]
  },
  {
    name:'鼠标示例',
    path:'/maplist2',
    pathName:'MapList2',
    id:'21', 
    children:[
      {
        name:'滚轮放大',
        path:'/maplist2_1',
        id:'2101',
        pathName:'Maplist2_1',
        component: (resolve) => require(['../views/Maplist2_1.vue'], resolve),       
      },
      {
        name:'鼠标测距',
        path:'/maplist2_2',
        id:'2202',
        pathName:'Maplist2_2',
        component: (resolve) => require(['../views/Maplist2_2.vue'], resolve),       
      },
      {
        name:'鼠标拉框放大地图',
        path:'/maplist2_3',
        id:'2203',
        pathName:'Maplist2_3',
        component: (resolve) => require(['../views/Maplist2_3.vue'], resolve),       
      },
      {
        name:'鼠标绘制点线面',
        path:'/maplist2_4',
        id:'2204',
        pathName:'Maplist2_4',
        component: (resolve) => require(['../views/Maplist2_4.vue'], resolve),       
      },
    ]
  }
]