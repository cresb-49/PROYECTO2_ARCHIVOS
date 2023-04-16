import 'bootstrap/dist/css/bootstrap.css'

import { createApp } from 'vue'
import App from './App.vue'
import 'material-design-icons/iconfont/material-icons.css'

import axios from 'axios';
import VueAxios from 'vue-axios';
import jQuery from 'jquery';

createApp(App).use(VueAxios,axios,jQuery).mount('#app')

import 'bootstrap/dist/js/bootstrap.js'