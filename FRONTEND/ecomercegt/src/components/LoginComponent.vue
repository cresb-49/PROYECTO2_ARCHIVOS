<template>
    <div>
        <div class="card">
            <div class="card-body">
                <form class="form-group">
                    <div class="mb-3">
                        <label for="user">Usuario</label>
                        <input type="user" class="form-control" id="user" placeholder="Ingrese su nombre de usuario">
                    </div>
                    <div class="mb-3">
                        <label for="password">Contraseña</label>
                        <input type="password" class="form-control" id="password" placeholder="Ingrese su contraseña">
                    </div>
                    <button type="submit" class="btn btn-primary">Iniciar sesión</button>
                </form>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    name: 'LoginApp',
    props: {
        // Propiedades del componente
    },
    data() {
        return {
            // Variables de estado del componente
        }
    },
    methods: {
        // Métodos del componente
    },
    mounted() {
        // Código que se ejecuta cuando el componente se monta en la página
    }
}
</script>

<style scoped>
.card {
    border-radius: 0px 0px 5px 5px;
}
</style>
  