<template>
  <HeaderApp></HeaderApp>
  <div>
    <!-- <IndexApp></IndexApp> -->
    <LoginSingUpComonent></LoginSingUpComonent>
  </div>
  <FooterApp></FooterApp>
</template>

<script>
//Sector de codigo js
import HeaderApp from "./components/HeaderComponent.vue";
import FooterApp from "./components/FooterComponent.vue";
//import IndexApp from './components/IndexComponent.vue';
import LoginSingUpComonent from "./components/LoginSingUpComonent.vue";

export default {
  name: 'App',
  components: {
    HeaderApp,
    FooterApp,
    LoginSingUpComonent
    //IndexApp
  },
  mounted() {
    this.axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => (this.info = response))
    console.log(this.info);
  },
  methods: {

  },
  data() {
    return {
      info: null
    }
  }
}
</script>