<template>
    <div>
        <h1>Carrito</h1>
        <button class="btn btn-primary mb-3" @click="comparCarrito">Comprar todo el carrito</button>
        <div v-for="articulo in articulos" v-bind:key="articulo">
            <div class="card mb-3" style="max-width: 300px;">
                <img :src="'http://localhost:3000/ecommercegt/img?id='+articulo._id" alt="Placeholder Image" style="max-width: 300px; margin: 5px; border-radius: 5px;" align="center">
                <div class="card-body">
                    <h5 class="card-title">{{ articulo.nombre }}</h5>
                    <p class="card-text">{{ articulo.descripcion }}</p>
                    <p class="card-text">Valor: Q. {{ articulo.precio }}</p>
                    <button class="btn btn-danger" @click="eliminar(articulo)">Eliminar</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';
export default {
    name: 'CarritoCompras',
    data() {
        return {
            productos: [],
            articulos: []
        }
    },
    mounted() {
        let vu = this;
        let usuario = this.$store.state.user;
        this.axios.get(`/api/carrito?usuario=${usuario}`)
            .then(response => {
                vu.productos = response.data.productos;
                vu.productos.forEach(element => {
                    vu.axios.get(`/api/articulo?_id=${element}`)
                        .then(response => {
                            vu.articulos.push(response.data)
                        }).catch(response => {
                            toast.error(response.response.data.error);
                        })
                });
            })
            .catch(response => {
                toast.error(response.response.data.error);
            })
    },
    methods: {
        eliminar(articulo) {
            this.axios.delete(`/api/carrito/articulo?id=${articulo._id}&usuario=${articulo.usuario}`)
                // eslint-disable-next-line no-unused-vars
                .then(response => {
                    toast.success("Carrito actualizado!!");
                    this.actualizarInformacion();
                })
                .catch(response => {
                    console.log(response.response.data);
                    toast.error(response.response.data.error);
                })

        },
        actualizarInformacion() {
            this.productos = [];
            this.articulos = [];
            let vu = this;
            let usuario = this.$store.state.user;
            this.axios.get(`/api/carrito?usuario=${usuario}`)
                .then(response => {
                    vu.productos = response.data.productos;
                    vu.productos.forEach(element => {
                        vu.axios.get(`/api/articulo?_id=${element}`)
                            .then(response => {
                                vu.articulos.push(response.data)
                            }).catch(response => {
                                toast.error(response.response.data.error);
                            })
                    });
                })
                .catch(response => {
                    toast.error(response.response.data.error);
                });
        },
        comparCarrito(){

        }
    }
}
</script>