<template>
    <div>
        <div v-for="d in data" v-bind:key="d">
            <div class="card mb-3" v-if="!d.venta.isHome">
                <div class="card-body">
                    <div class="row">
                        <div class="col-3">
                            <img :src="d.articulo.imagen" class="img-fluid" alt="Imagen del producto">
                        </div>
                        <div class="col-9">
                            <h5 class="card-title">{{d.articulo.nombre}}</h5>
                            <p class="card-text">{{d.articulo.descripcion}}</p>
                            <button @click="verificarArticulo(d.venta)" class="btn btn-primary float-right">Modificar Estado</button>
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
    name: 'ListaVentas',
    data() {
        return{
            data:[]
        }
    },
    props: {

    },
    mounted(){
        let vu = this;
        this.axios.get('/api/ventas/all')
            .then(response => {
                vu.data = response.data;
                toast.success('Articulos recuperados!!!')
            })
            .catch(response => {
                let error = response.response.data.error
                toast.error(error);
            })

    },
    methods:{
        verificarArticulo(venta){
            this.$router.push({ name: 'ModificarEstado', params: { id:venta._id } });
        }
    }
}
</script>