import { createWebHistory,createRouter} from "vue-router";
import LoginSingUpComponent from '../components/LoginSingUpComponent.vue';
import VistaProductosCoponent from '../components/VistaProductosComponent';
import NuevoArticuloComponent from '../components/NuevoArticuloComponent.vue'

const routes =[
    {
        path:'/',
        name:'VistaProductosCoponent',
        component:VistaProductosCoponent
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