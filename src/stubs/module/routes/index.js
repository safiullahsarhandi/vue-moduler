import pages from '../config/pages'; 
let routes = [];
pages.forEach((page) => {
    // creating route object
    routes.push({
         path : `${page.moduleName}/${page.path}`,
         component : ()=> import(`../pages/${page.name}.vue`),
         name : `${page.moduleName.moduleName}.${page.name}`.toLowerCase(),
         meta : page.meta,
    })
});

export default routes;