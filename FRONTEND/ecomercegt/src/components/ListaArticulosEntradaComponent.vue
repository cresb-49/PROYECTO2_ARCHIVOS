<template>
    <div>
        <div v-for="articulo in articulos" v-bind:key="articulo">
            <div class="card mb-3" v-if="!articulo.aceptado && !articulo.vendido">
                <div class="card-body">
                    <div class="row">
                        <div class="col-3">
                            <img :src="articulo.imagen" class="img-fluid" alt="Imagen del producto">
                        </div>
                        <div class="col-9">
                            <h5 class="card-title">{{articulo.nombre}}</h5>
                            <p class="card-text">{{articulo.descripcion}}</p>
                            <button @click="verificarArticulo(articulo)" class="btn btn-primary float-right">Abrir</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { toast } from 'vue3-toastify';

export default {
    name: 'ListaArticulosEntrada',
    data() {
        return{
            articulos:[]
        }
    },
    props: {

    },
    mounted(){
        let vu = this;
        this.axios.get('/api/articulos')
            .then(response => {
                vu.articulos = response.data;
                toast.success('Articulos recuperados!!!')
            })
            .catch(response => {
                let error = response.response.data.error
                toast.error(error);
            })

    },
    methods:{
        verificarArticulo(articulo){
            this.$router.push({ name: 'VerificarArticulo', params: { id:articulo._id } });
        }
    }
}
</script>