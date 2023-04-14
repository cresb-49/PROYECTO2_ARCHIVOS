<template>
  <div>
    <h1>Hola mundo</h1>
    <button class="btn red" @click="saludar" >Hola <i class="material-icons">save</i> </button>
  </div>
</template>

<script>
//Sector de codigo js
import M from 'materialize-css';


export default {
  name: 'App',
  mounted(){
    this.axios.get('https://jsonplaceholder.typicode.com/users')
    .then(()=>{})
  },
  methods:{
    saludar()
    {
      M.toast({html:'Hola mundo'});
    }
  }
}
</script>