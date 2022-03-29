export default {
    name : 'orders',
    base : 'orders',
    routefiles : [{
        layout : 'admin',
        name : 'orders.',
        baseUrl : 'admin',
        routeDir : 'admin.js',
        pagesDir : 'admin', 
    },{
        layout : 'volunteer',
        name : 'orders.',
        baseUrl : '',
        routeDir : 'volunteer.js',
        pagesDir : 'volunteer', 
    }],
}