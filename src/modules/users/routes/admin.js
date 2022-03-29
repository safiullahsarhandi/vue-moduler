import meta from '../utils/route-meta.js';
const pages = {
    routes : [{
        pageName : 'Index.vue',
        path : '',
        meta,
    },{
        pageName : 'Create.vue',
        path : '/create',
        meta,
    },{
        pageName : 'Edit.vue',
        path : '/:id/edit',
        meta,
    },{
        pageName : 'Show.vue',
        path : '/:id',
        meta,
    }]
};


export default pages;