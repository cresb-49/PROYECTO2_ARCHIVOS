import { createWebHashHistory,createRouter } from "vue-router";
import LoginSingUpComponent from '../components/LoginSingUpComponent.vue';
import IndexView from '../views/IndexView.vue'

const routes =[
    {
        path:'/Index',
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
    history:createWebHashHistory(),
    routes
});

export default router;