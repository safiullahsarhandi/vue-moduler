let routes = [];
import module from './module.js';
const groups = [];
// import DefaultView from "../../../layouts/default.vue";
module.routefiles.forEach(file => {
    // we will get file's first occurance before dot and then use it to store imported route in variable
    let module = require(`../routes/${file.routeDir}`);
    
    groups.push({
        ...file,
        routes : module.default.routes,
    });
        
});
groups.forEach((groupItem,groupIndex) => {
    // adding parent for individual route file exporting it 
    if(groupItem.routes != undefined && groupItem.routes.length == 0){
        return;
    }
    routes.push({
        component: {
        // Inline declaration of a component that renders our <router-view>
        render: (c) => c('router-view'),
        },
        path : `/${groupItem.baseUrl}/`,
        children : [],
    });
    // adding children for individual route file exporting it 
    groupItem.routes.forEach((route)=>{
        let path = `${module.base}${route.path}`;
        let componentName = route.pageName?route.pageName.split('.')[0]:path;
        routes[groupIndex].children.push({
            path,
            component : ()=> import(`../pages/${groupItem.pagesDir}/${route.pageName}`),
            name : `${groupItem.name}${module.name}.${componentName}`.toLowerCase(),
            meta : route.meta || {},
        }); 
    });
});
export default routes;