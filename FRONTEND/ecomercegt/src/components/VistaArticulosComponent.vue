<template>
    <h2>Articulos Disponibles</h2>
    <div id="contenedorProductos" style="margin-top: 20px;">
        <div class="row row-cols-1 row-cols-md-3 g-4">
            <div v-for="articulo in articulos" :key="articulo._1d">
                <div v-if="!articulo.vendido">
                    <CardArticulo :articulo="{codigo: articulo._id,usuario: articulo.usuario,nombre: articulo.nombre,precio: articulo.precio,imagen: articulo.imagen,descripcion: articulo.descripcion,categoria: articulo.categoria}"></CardArticulo>
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
            articulos: []
        }
    },
    components: {
        CardArticulo
    },
    methods: {
        buscarProductos() {

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