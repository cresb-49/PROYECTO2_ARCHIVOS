<template>
  <div id="contenedorHeader">
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand">E-Comerce GT</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll"
          aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarScroll">
          <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style="--bs-scroll-height: 100px;">
            <li class="nav-item">
              <router-link class="nav-link active" aria-current="page" to="/Index">Home</router-link>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Link
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li>
                  <hr class="dropdown-divider">
                </li>
                <li><a class="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </li>
          </ul>
          <div class="container">
            <form class="d-flex" role="search">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
              <button class="btn btn-outline-success" type="submit">Search</button>
            </form>            
          </div>
          <div>
            <ul class="navbar-nav my-2 my-lg-0 navbar-nav-scroll" style="--bs-scroll-height: 100px;">
              <router-link class="btn btn-outline-success" to="/Login">Login</router-link>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  </div>
  <div class="container ventanaPrincipal" >
    <router-view></router-view>
  </div>
  <div class="contenedor">
    <div class="blockcode">
      <footer class="page-footer shadow">
        <div class="d-flex flex-column mx-auto py-5" style="width: 80%">
          <div class="d-flex flex-wrap justify-content-between">
            <div>
              <a href="/" class="d-flex align-items-center p-0 text-dark">
                <img alt="logo" src="" width="30px" />
                <span class="ms-3 h5 font-weight-bold">Devwares</span>
              </a>
              <p class="my-3" style="width: 250px">
                We are creating High Quality Resources and tools to Aid developers during the
                developement of their projects
              </p>
            </div>
            <div>
              <p class="h5 mb-4" style="font-weight: 600">Devwares</p>
              <ul class="p-0" style="list-style: none; cursor: pointer">
                <li class="my-2">
                  <a class="text-dark" href="/">Resources</a>
                </li>
                <li class="my-2">
                  <a class="text-dark" href="/">About Us</a>
                </li>
                <li class="my-2">
                  <a class="text-dark" href="/">Contact</a>
                </li>
                <li class="my-2">
                  <a class="text-dark" href="/">Blog</a>
                </li>
              </ul>
            </div>
            <div>
              <p class="h5 mb-4" style="font-weight: 600">Help</p>
              <ul class="p-0" style="list-style: none; cursor: pointer">
                <li class="my-2">
                  <a class="text-dark" href="/">Support</a>
                </li>
                <li class="my-2">
                  <a class="text-dark" href="/">Sign Up</a>
                </li>
                <li class="my-2">
                  <a class="text-dark" href="/">Sign In</a>
                </li>
              </ul>
            </div>
            <div>
              <p class="h5 mb-4" style="font-weight: 600">Help</p>
              <ul class="p-0" style="list-style: none; cursor: pointer">
                <li class="my-2">
                  <a class="text-dark" href="/">Support</a>
                </li>
                <li class="my-2">
                  <a class="text-dark" href="/">Sign Up</a>
                </li>
                <li class="my-2">
                  <a class="text-dark" href="/">Sign In</a>
                </li>
              </ul>
            </div>
          </div>
          <small class="text-center mt-5">&copy; Devwares, 2020. All rights reserved.</small>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
//Sector de codigo js

//import IndexApp from './components/IndexComponent.vue';
import LoginSingUpComonent from "./components/LoginSingUpComponent.vue";

export default {
  name: 'App',
  components: {
    // eslint-disable-next-line vue/no-unused-components
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

<style scoped>
#contenedorHeader {
  padding-bottom: 20px;
  padding-left: 2%;
  padding-right: 2%;
}
.ventanaPrincipal{
  min-height: 550px;
}
.contenedor {
  margin-left: 1%;
  margin-right: 1%;
  margin-top: 20px;
  margin-bottom: 1%;
}
</style>