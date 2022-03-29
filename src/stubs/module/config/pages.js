const moduleName = 'users';
import meta from 'route-meta.js';
const pages = {
    moduleBase : '/',
    moduleName : moduleName,
    routes : [{
        name : 'Index',
        path : '/',
        meta,
    },{
        name : 'Create',
        path : '/create',
        meta,
    },{
        name : 'Edit',
        path : ':id/edit',
        meta,
    },{
        name : 'Show',
        path : ':id',
        meta,
    }]
};


export default pages;