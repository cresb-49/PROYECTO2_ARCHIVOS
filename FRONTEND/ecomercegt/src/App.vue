<template>
  <HeaderApp></HeaderApp>
  
  <div>
    <h1>Hola mundo</h1>
    <button class="btn red" @click="saludar" >Hola <i class="material-icons">save</i> </button>
    <div>{{ info }}</div>
  </div>
  <FooterApp></FooterApp>
</template>

<script>
//Sector de codigo js
import M from 'materialize-css';
import HeaderApp from "./components/HeaderComponent.vue";
import FooterApp from "./components/FooterComponent.vue";

export default {
  name: 'App',
  components:{
    HeaderApp,
    FooterApp
  },
  mounted(){
    this.axios.get('https://jsonplaceholder.typicode.com/users')
    .then(response=>(this.info=response))
  },
  methods:{
    saludar()
    {
      M.toast({html:'Hola mundo'});
    }
  },
  data(){
    return{
      info:null
    }
  }
}
</script>