import Vue from 'vue';
import App from './compoent/App.vue';

new Vue({
    el: '#app',
    render(createElement) {
        return createElement(App);
    }
});