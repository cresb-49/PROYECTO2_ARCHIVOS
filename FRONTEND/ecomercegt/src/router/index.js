import { createWebHistory, createRouter } from "vue-router";
import LoginSingUpComponent from '../components/LoginSingUpComponent.vue';
import VistaArticulosCoponent from '../components/VistaArticulosComponent';
import NuevoArticuloComponent from '../components/NuevoArticuloComponent.vue'
import EstadoCompraComponent from '../components/EstadoCompraComponent.vue'
import CarritoComponent from '../components/CarritoComponent.vue'
import RegistroAdministradorComponent from '../components/RegistroAdministradorComponent.vue'
import RegistroEmpleadoComponent from '../components/RegistroEmpleadoComponent.vue'
import ReportesComponent from  '../components/ReportesComponent.vue'
import VerArticuloComponent from '../components/VerArticuloComponent.vue';

const routes = [
    {
        path: '/',
        name: 'VistaProductosCoponent',
        component: VistaArticulosCoponent
    },
    {
        path: '/Login',
        name: 'LoginSingUpComponent',
        component: LoginSingUpComponent
    },
    {
        path: '/NuevoArticulo',
        name: 'NuevoArticuloComponent',
        component: NuevoArticuloComponent
    },
    {
        path: '/Seguimiento',
        name: 'EstadoCompra',
        component: EstadoCompraComponent
    },
    {
        path: '/RegistroEmpleado',
        name: 'RegistroEmpleado',
        component: RegistroEmpleadoComponent
    },
    {
        path: '/RegistroAdmin',
        name: 'RegistroAdmin',
        component: RegistroAdministradorComponent
    },
    {
        path: '/Carrito',
        name: 'CarritoCompra',
        component: CarritoComponent
    },
    {
        path: '/Reportes',
        name: 'Reportes',
        component: ReportesComponent
    },
    {
        path:'/Articulo/:id',
        name:'Articulo',
        component:VerArticuloComponent,
        props:true
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;