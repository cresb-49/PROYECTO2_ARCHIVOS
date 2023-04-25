<template>
    <div>
        <h1>Reportes</h1>
    </div>
</template>

<script>
export default {
    name: 'ReportesComponent',
    mounted() {
        let ver_obj = JSON.parse(localStorage.getItem('vuex'));
        let ver_auth = ver_obj.isAuthenticated;
        let ver_rol = ver_obj.role;//ADMIN USUARIO PAQUETERIA
        if (ver_auth && ver_rol === 'ADMIN') {
            //CODIGO ESTABLECITO EN LA SENTENCIA
        } else {
            this.$router.push('/');
        }
    }
}
</script>