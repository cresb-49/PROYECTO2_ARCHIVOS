import { createWebHistory,createRouter} from "vue-router";
import LoginSingUpComponent from '../components/LoginSingUpComponent.vue';
import IndexView from '../views/IndexView.vue'

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
    }
];

const router = createRouter({
    history:createWebHistory(),
    routes
});

export default router;