//let ver_obj = JSON.parse(localStorage.getItem('vuex'));
//let ver_auth = ver_obj.isAuthenticated; //true flase
//let ver_user = ver_obj.user; //Nombre de usuario
//let ver_rol = ver_obj.role; //ADMIN USUARIO PAQUETERIA

//verificacion de autentificacion ene le sistema
if (ver_auth) {

} else {
    this.$router.push('/');
}

if (ver_rol === 'ADMIN') {

} else {
    this.$router.push('/');
}
if (ver_rol === 'USUARIO') {

} else {
    this.$router.push('/');
}
if (ver_rol === 'PAQUETERIA') {

} else {
    this.$router.push('/');
}


//verificacion de igualdad de usuario
if (data.usuario !== vu.usuario) {
    this.$router.push('/');
}



let ver_obj = JSON.parse(localStorage.getItem('vuex'));
let ver_auth = ver_obj.isAuthenticated;
let ver_rol = ver_obj.role;//ADMIN USUARIO PAQUETERIA
if (ver_auth && ver_rol === 'USUARIO') {
} else {
    this.$router.push('/');
}