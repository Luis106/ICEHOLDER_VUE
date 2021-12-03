<template>

<!-- Section-->
        <section class="py-5">
            <div class="container px-4 px-lg-5 mt-5">
                     <input type="submit" v-on:click="Ir"  class="fadeIn fourth" value= "Eliminados">
                <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                    

                  <div class="col mb-5">
                        <div class="card h-100">
                
                            <div class="card-body p-4">
                                <div class="text-center">
                                    <!-- Product name-->
                                    <h5 class="fw-bolder">Crear</h5>
                                    <!-- Product reviews-->
                                    <div class="d-flex justify-content-center small text-warning mb-2">
                                    <input type="text"  id="CajaProNam" class="" name="CajaProNam" placeholder="Producto">
                                    </div>
                                    <div class="d-flex justify-content-center small text-warning mb-2">
                                    <input type="text"  id="CajaProPre" class="" name="CajaProPre" placeholder="Precio">
                                    </div>
                                    <div class="d-flex justify-content-center small text-warning mb-2">
                                    <input type="text"  id="CajaProCan" class="" name="CajaProCan" placeholder="Cantidad">
                                    </div>


                                </div>
                            </div>
                            <!-- Product actions-->
                            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <button type="button"  class="text-center btn btn-outline-dark mt-auto" v-on:click="crear()" >Crear</button>
                            </div>
                        </div>
                    </div>



                    <div class="col mb-5">
                        <div class="card h-100">
                
                            <div class="card-body p-4">
                                <div class="text-center">
                                    <!-- Product name-->
                                    <h5 class="fw-bolder">Editar</h5>
                                    <!-- Product reviews-->
                                   <div class="d-flex justify-content-center small text-warning mb-2">
                                    <input type="text"  id="CajaNam" class="" name="CajaNam" placeholder="Producto">
                                    </div>
                                    <div class="d-flex justify-content-center small text-warning mb-2">
                                    <input type="text"  id="CajaPre" class="" name="CajaPre" placeholder="Precio">
                                    </div>
                                    <div class="d-flex justify-content-center small text-warning mb-2">
                                    <input type="text"  id="CajaCan" class="" name="CajaCan" placeholder="Cantidad">
                                    </div>
                                    
                                </div>
                            </div>
                            <!-- Product actions-->
                            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <button type="button"  class="text-center btn btn-outline-dark mt-auto" v-on:click="actualizar()" >Modificar</button>
                            </div>
                        </div>
                    </div>

                 
                     
                      <div
                        v-for="(Producto, index) in getListaProductos"
                        :key="Producto._id"
                        >
                        <proComponent
                        :Nombre ="Producto.Nombre"
                        :Cantidad ="Producto.Cantidad"
                        :Precio ="Producto.Precio"
                        :index="index"
                        :id="Producto._id.toString()"

                        @Delete="deleteTask"
                        @Change="changeStatus"
                        ></proComponent>
                      </div>
                    



                    
                </div>
            </div>
        </section>

</template>




<script>


//import axios from "axios";
import {mapGetters} from "vuex";

// Components
//import createTaskInput from '../components/createTaskInput';
import proComponent from '../components/proComponent.vue';



export default {
name: "Productos",
  data() {
    return {
      actualId: "",
      actualIndex: ""
      
    }
  }, 
  computed:{
      ...mapGetters('Productos',
        [
            "getListaProductos",
        ]
      )
    },
  methods: {
     async getAllPro(){
       
        const ProList = this.$store.getters["Productos/getListaProductos"];


        if (ProList && ProList.length === 0 ) {
          console.log("getAllPro")
          await this.$store.dispatch("Productos/getAllPro");
        }
        console.log(ProList)
       

      },
      async deleteTask(id, index){
        console.log(index)
        this.actualId = id
        this.actualIndex = index
        await this.$store.dispatch("Productos/deletePro", {Id: this.actualId,  Index: this.actualIndex} );
       
      },
       changeStatus(Nombre, Precio, Cantidad, id, index){
        document.getElementById("CajaNam").value = Nombre;
        document.getElementById("CajaPre").value = Precio;
        document.getElementById("CajaCan").value = Cantidad;
        console.log(id)
        this.actualId = id
        this.actualIndex = index
        //console.log(index)
        


        
      },
      async actualizar(){

        if(this.actualId !== ""){
          
          const Nombre = document.getElementById("CajaNam").value;
          const Precio = document.getElementById("CajaPre").value;
          const Cantidad = document.getElementById("CajaCan").value;

          await this.$store.dispatch("Productos/ChangePro", {Id: this.actualId,  Index: this.actualIndex, Nombre: Nombre, Precio: Precio, Cantidad: Cantidad})
          this.actualId = ""
          this.actualIndex = ""

        }else{
          window.alert("No se ha indicado Producto a modificar");


        }
      

    
      },
      async crear(){
        const Nombre = document.getElementById("CajaProNam").value;
        const Precio = document.getElementById("CajaProPre").value;
        const Cantidad = document.getElementById("CajaProCan").value;

       const Pro = {
          Nombre: Nombre,
          Precio: Precio,
          Cantidad: Cantidad
        }

        if(Pro){
          
          await this.$store.dispatch("Productos/addPro", Pro )

        }else{
           window.alert("No se posible crear Productos en blanco");
        }
       
    
      },
      Ir(){
          this.$router.push({path: "/ProductosPapelera"});
      }
  },
  created() {
    this.getAllPro()
  },
  components: {
    proComponent
  }
}




</script>

<style scoped>

ul {
  list-style-type: none;
}
 html, body {
  background: #e9ecef;
}

.cursor-grab {
  cursor: -webkit-grab;
  cursor: grab;
}

.tasks {
  min-height: 450px;
}

</style>
