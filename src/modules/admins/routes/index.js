import config from '../config/pages'; 
let routes = [];

config.routes.forEach((page) => {
    // creating route object
    routes.push({
         path : `/${config.moduleName}${page.path}`,
         component : ()=> import(`../pages/${page.name}.vue`),
         name : `${config.moduleName}.${page.name}`.toLowerCase(),
         meta : page.meta,
    })
});

export default routes;