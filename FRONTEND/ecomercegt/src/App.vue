<template>
  <HeaderApp></HeaderApp>
  <div>
    <IndexApp></IndexApp>
  </div>
  <FooterApp></FooterApp>
</template>

<script>
//Sector de codigo js
import HeaderApp from "./components/HeaderComponent.vue";
import FooterApp from "./components/FooterComponent.vue";
import IndexApp from './components/IndexComponent.vue';

export default {
  name: 'App',
  components:{
    HeaderApp,
    FooterApp,
    IndexApp
  },
  mounted(){
    this.axios.get('https://jsonplaceholder.typicode.com/users')
    .then(response=>(this.info=response))
  },
  methods:{

  },
  data(){
    return{
      info:null
    }
  }
}
</script>