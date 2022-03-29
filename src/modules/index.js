import modulesList from '../modules';

export default modulesList.map((module) => {
    try{
        return require(`./${module}`);

    }catch(e){
        console.log(e);
        throw new Error(`module: ${module} not found. please create module like modules/${module} or remove ${module} in modules.js`);
    }
    
});