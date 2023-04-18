import { createWebHistory,createRouter} from "vue-router";
import LoginSingUpComponent from '../components/LoginSingUpComponent.vue';
import IndexView from '../views/IndexView.vue'
import NuevoArticuloComponent from '../components/NuevoArticuloComponent.vue'

const routes =[
    {
        path:'/',
        name:'IndexView',
        component:IndexView
    },
    {
        path:'/Login',
        name:'LoginSingUpComponent',
        component:LoginSingUpComponent
    },
    {
        path:'/NuevoArticulo',
        name:'NuevoArticuloComponent',
        component:NuevoArticuloComponent
    }
];

const router = createRouter({
    history:createWebHistory(),
    routes
});

export default router;