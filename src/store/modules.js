import camelCase from 'lodash/camelCase';
const requireModule = require.context('./modules/', true, /index.js$/);
const modules = {};

requireModule.keys().forEach(fileName => {
    // set the module name to (camelCased) foldername
    const moduleName = camelCase(fileName.split('/')[1]);
    modules[moduleName] = requireModule(fileName).default;
});

export default modules;
