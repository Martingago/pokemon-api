import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import 'bootstrap/dist/js/bootstrap.esm.js';

export default defineNuxtPlugin((nuxtApp)=> {
    nuxtApp.provide('$bootstrap', window.Bootstrap)
})