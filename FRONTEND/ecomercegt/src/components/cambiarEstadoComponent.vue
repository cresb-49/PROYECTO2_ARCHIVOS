<template>
    <div class="card">
        <div class="card-body">
            <div class="row">
                <div class="col-md-4">
                    <img :src="data.aarticulo.imagen" alt="Imagen" class="img-fluid">
                </div>
                <div class="col-md-8">
                    <h5 class="card-title">{{ data.articulo }}</h5>
                    <form>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="opcion" id="opcion1"
                                value="Centro de logistica" v-model="opcionCentro">
                            <label class="form-check-label" for="opcion1">
                                Centro de logistica
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="opcion" id="opcion2" value="Transporte"
                                v-model="opcionTransporte">
                            <label class="form-check-label" for="opcion2">
                                Transporte
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="opcion" id="opcion3" value="Entregado"
                                v-model="opcionHogar">
                            <label class="form-check-label" for="opcion3">
                                Entregado
                            </label>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { toast } from 'vue3-toastify';
export default {
    //TODO:verificacion del funcionamiento de esta pagina
    name: 'CambiarEstado',
    data() {
        return {
            opcionCentro: true,
            opcionTransporte: false,
            opcionHogar: false,
            data: {}
        }
    },
    mounted() {
        let vu = this;
        const id = this.$route.params.id;
        this.axios.get(`/api/venta?id=${id}`)
            .then(response => {
                let data = response.data;
                vu.data = data;
            })
            // eslint-disable-next-line no-unused-vars
            .catch(error => {
                toast.error(error.response.data.error);
                console.log(error);
                //Redireccion al inicio de la pagina
                this.$router.push('/CambiarEstado');
            });
    }
}
</script>