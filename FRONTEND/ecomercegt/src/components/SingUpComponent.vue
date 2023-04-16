<template>
    <div>
        <div class="card">
            <div class="card-body">
                <form class="form-group">
                    <div class="mb-3">
                        <label for="name">Nombre de usuario</label>
                        <input type="text" class="form-control" id="name" placeholder="Ingrese su nombre de usuario">
                    </div>
                    <div class="mb-3">
                        <label for="email">Correo electrónico</label>
                        <input type="email" class="form-control" id="email" placeholder="Ingrese su correo electrónico">
                    </div>
                    <div class="mb-3">
                        <label for="password">Contraseña</label>
                        <input type="password" class="form-control" id="password" placeholder="Ingrese su contraseña">
                    </div>
                    <div class="mb-3">
                        <label for="password">Verifica Contraseña</label>
                        <input type="password" class="form-control" id="password" placeholder="Ingrese su contraseña">
                    </div>
                    <button type="submit" class="btn btn-primary">Registrarse</button>
                </form>
            </div>
        </div>

    </div>
</template>
  
<script>
export default {
    name: 'SignUpApp',
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
  