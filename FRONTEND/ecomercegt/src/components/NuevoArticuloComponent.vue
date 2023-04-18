<template>
    <div>
        <div class="card">
            <div class="container" style="padding: 20px;">
                <h2 class="mb-3">Nuevo Articulo</h2>
                <form>
                    <div class="mb-3">
                        <label for="nombre" class="form-label">Nombre del articulo</label>
                        <input type="text" id="nombre" class="form-control" aria-labelledby="nombreHelpBlock" v-bind="nombre" required>
                        <div id="nombreHelpBlock" class="form-text">
                            Agrega un nombre no tan complicado para mejor la busqueda en la pagina, se descriptivo como manta de
                            seda azul o la marca del producto asi como Samsumg Galxy s20
                        </div>
                    </div>
    
                    <div class="input-group mb-3">
                        <label for="precio" class="col-form-label" style="margin-right: 15px;">Precio</label>
                        <div class="input-group-text"  style="border-radius: 5px 0px 0px 5px;">$</div>
                        <input type="number" class="form-control" aria-label="Amount (to the nearest dollar)" style="max-width: 200px;border-radius: 0px 5px 5px 0px;" v-bind="precio" required>
                        <span class="input-group form-text">Agrega el valor del articulo</span>
                    </div>
                    <div class="mb-3">
                        <label for="descripcion" class="form-label">Descripcion</label>
                        <textarea type="text" id="descripcion" class="form-control" aria-labelledby="descripcionHelpBlock"
                            rows="5" v-bind="descripcion" required></textarea>
                        <div id="descripcionHelpBlock" class="form-text">
                            Agrega una pequena descripcion de el estado fisico del articulo o una recomenadacion sobre el mismo
                        </div>
                    </div>
                    <div class="mb-3">
                        <label for="categorias" class="form-label">Categorias</label>
                        <div id="categorias" class="form-control">
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" v-model="tec">
                                <label class="form-check-label" for="inlineCheckbox1">Tecnología</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2" v-model="hogar">
                                <label class="form-check-label" for="inlineCheckbox2">Hogar</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3" v-model="academico">
                                <label class="form-check-label" for="inlineCheckbox3">Académico</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3" v-model="literatura">
                                <label class="form-check-label" for="inlineCheckbox3">Literatura</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3" v-model="decoracion">
                                <label class="form-check-label" for="inlineCheckbox3">Decoración</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3" v-model="otros">
                                <label class="form-check-label" for="inlineCheckbox3">Otros</label>
                            </div>
                        </div>
                        <div id="categoriasHelpBlock" class="form-text">
                            Agrega una o varias clasificaciones para tu articulo
                        </div>
                    </div>
                    <div class="mb-3">
                        <label for="formFile" class="form-label">Imagen del articulo</label>
                        <input class="form-control" type="file" id="formFile" required>
                    </div>
                    <button type="submit" class="btn btn-outline-primary" required>Registro de Articulo</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'NuevoArticulo',
    data() {
        return {
            nombre: null,
            precio: 0.00,
            descripcion: null,
            imagen:null,
            tec:false,
            hogar:false,
            academico:false,
            literatura:false,
            decoracion:false,
            otros:false
        }
    },
    methods: {
        generarArticulo(){

        }
    }
}
</script>

<style scoped></style>