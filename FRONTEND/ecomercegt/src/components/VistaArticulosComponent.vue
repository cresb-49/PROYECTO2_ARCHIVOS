<template>
    <h2>Articulos Disponibles</h2>
    <div class="input-group">
        <input type="text" class="form-control rounded" placeholder="Search" aria-label="Search"
            aria-describedby="search-addon" v-model="nombre" />
        <button type="button" @click="buscarProductos" class="btn btn-outline-primary">search</button>
    </div>
    <div id="contenedorProductos" style="margin-top: 20px;">
        <div class="row row-cols-1 row-cols-md-3 g-4">
            <div v-for="articulo in articulos" :key="articulo._1d">
                <div v-if="!articulo.vendido && articulo.aceptado">
                    <CardArticulo
                        :articulo="{ codigo: articulo._id, usuario: articulo.usuario, nombre: articulo.nombre, precio: articulo.precio, imagen: articulo.imagen, descripcion: articulo.descripcion, categoria: articulo.categoria }">
                    </CardArticulo>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import CardArticulo from "./CardArticuloComponent.vue";
export default {
    name: "VistaProductos",
    data() {
        return {
            articulos: [],
            nombre: ''
        }
    },
    components: {
        CardArticulo
    },
    methods: {
        buscarProductos() {
            let vu = this;
            let payload = {
                nombre: this.nombre
            }
            this.axios.get(`/api/articulos?nombre=${payload.nombre}`, payload)
                .then(response => {
                    const res = response.data
                    console.log(res);
                    vu.articulos = res;
                })
                .catch(response => {
                    console.log(response.response.data);
                })
        }
    },
    mounted() {
        this.axios.get('/api/articulos')
            .then(response => {
                this.articulos = response.data;
                console.log(response.data);
            })
            .catch(response => {
                console.log(response);
            })
    }

}
</script>