<template>
    <h2>Articulos Disponibles</h2>
    <div id="contenedorProductos" style="margin-top: 20px;">
        <div class="row row-cols-1 row-cols-md-3 g-4">
            <CardArticulo></CardArticulo>
        </div>
    </div>
</template>

<script>
import  CardArticulo from "./CardArticuloComponent.vue";
export default{
    name:"VistaProductos",
    components:{
        CardArticulo
    },
    methods:{
        buscarProductos(){
            
        }
    }
}
</script>