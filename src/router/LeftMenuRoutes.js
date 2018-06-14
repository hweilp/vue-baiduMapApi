import LeftMenu from './LeftMenu'

let LeftMenuRoutes = [];

LeftMenu.forEach(function(item,index){
	if(item.children){
		item.children.forEach(function(v,i){
			LeftMenuRoutes.push({
				path : v.path,
				name : v.pathName,
				component : v.component
			})
		})
	}else{
		LeftMenuRoutes.push({
			path : item.path,
			name : item.pathName,
			component : item.component
		})
	}
})

export default LeftMenuRoutes;