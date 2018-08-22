import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
//import dynamic module object
import modules from './modules';

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
    modules,
    strict: debug
});
