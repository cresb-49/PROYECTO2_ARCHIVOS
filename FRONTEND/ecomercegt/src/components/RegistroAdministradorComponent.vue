<template>
    <div>
        <SingUpComponent type-role="ADMIN" ></SingUpComponent>
    </div>
</template>

<script>
import SingUpComponent from './SingUpComponent.vue'

export default{
    name:'RegistroAdmin',
    components:{
        SingUpComponent
    },
    data(){
        return{
            role:'ADMIN'
        }
    }
}
</script>