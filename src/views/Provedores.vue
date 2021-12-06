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
                                    <input type="text"  id="CajaProNam" class="" name="CajaProNam" placeholder="Npmbre">
                                    </div>
                                    <div class="d-flex justify-content-center small text-warning mb-2">
                                    <input type="text"  id="CajaProPre" class="" name="CajaProPre" placeholder="Dirección">
                                    </div>
                                    <div class="d-flex justify-content-center small text-warning mb-2">
                                    <input type="text"  id="CajaProCan" class="" name="CajaProCan" placeholder="Correo">
                                    </div>
                                     <div class="d-flex justify-content-center small text-warning mb-2">
                                    <input type="text"  id="CajaProTel" class="" name="CajaProTel" placeholder="Teléfono">
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
                                    <input type="text"  id="CajaNam" class="" name="CajaNam" placeholder="Nombre">
                                    </div>
                                    <div class="d-flex justify-content-center small text-warning mb-2">
                                    <input type="text"  id="CajaPre" class="" name="CajaPre" placeholder="Dirección">
                                    </div>
                                    <div class="d-flex justify-content-center small text-warning mb-2">
                                    <input type="text"  id="CajaCan" class="" name="CajaCan" placeholder="Correo">
                                    </div>
                                    <div class="d-flex justify-content-center small text-warning mb-2">
                                    <input type="text"  id="CajaTel" class="" name="CajaTel" placeholder="Teléfono">
                                    </div>
                                    
                                </div>
                            </div>
                            <!-- Product actions-->
                            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <button type="button"  class="text-center btn btn-outline-dark mt-auto" v-on:click="actualizar()" >Modificar</button>
                            </div>
                        </div>
                    </div>
                    <div class="col mb-5">
                        <div class="card h-100">
                
                            <div class="card-body p-4">
                                <div class="text-center">
                                    <!-- Product name-->
                                    <h5 class="fw-bolder">Buscar:</h5>
                                    <!-- Product reviews-->                            
                                    <div class="d-flex justify-content-center small text-warning mb-2">
                                    <select name="select" id = "SelCaja">
                                      <option value="Nombre" selected>Nombre</option>
                                      <option value="Direccion"> Direccion</option>
                                      <option value="_id">Id</option>
                                      <option value="Correo">Correo</option>
                                      <option value="Telefono">Telefono</option>                                   
                                    </select>
                                    </div>
                                    <div class="d-flex justify-content-center small text-warning mb-2">
                                    <input type="text"  id="bpar" class="" name="bpar" placeholder="Valor">
                                    </div>


                                </div>
                            </div>
                            <!-- Product actions-->
                            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <button type="button"  class="text-center btn btn-outline-dark mt-auto" v-on:click="buscar()" >Buscar</button>
                                  <button type="button"  class="text-center btn btn-outline-dark mt-auto" v-on:click="refresh()" >Refrescar</button>
                            </div>
                        </div>
                    </div>

                 
                     
                      <div
                        v-for="(Producto, index) in getListaProductos"
                        :key="Producto._id"
                        >
                         <div class="col mb-5">
                            <div class="card h-100">
                                <!-- Sale badge-->
                                <!-- Product details-->
                                <div class="card-body p-4">
                                    <div class="text-center">
                                        <!-- Product name-->
                                        <h5 class="fw-bolder">{{Producto.Nombre}}</h5>
                                         <h5 class="fw-bolder">{{Producto.Direccion}}</h5>
                                          <h5 class="fw-bolder">{{Producto.Correo}}</h5>
                                           <h5 class="fw-bolder">{{Producto.Telefono}}</h5>
                                    </div>
                                </div>
                                <!-- Product actions-->
                                  <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                    <button type="button" class="text-center btn btn-outline-dark mt-auto" v-on:click="ChangeStatus(Producto.Nombre, Producto.Direccion, Producto.Telefono,Producto.Correo, Producto._id, index)" >Modificar</button>
                                    <button type="button"  class="text-center btn btn-outline-dark mt-auto" v-on:click="deleteTask(Producto._id,index)" >Eliminar</button>
                                </div>
                              </div>
                            </div>
             
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

export default {
name: "Productos",
  data() {
    return {
      actualId: "",
      actualIndex: ""
      
    }
  }, 
  computed:{
      ...mapGetters('Provedores',
        [
            "getListaProductos",
        ]
      )
    },
  methods: {
     async getAllPro(){
       
        const ProList = this.$store.getters["Provedores/getListaProductos"];


        if (ProList && ProList.length === 0 ) {
          console.log("getAllPro")
          await this.$store.dispatch("Provedores/getAllPro");
        }
        console.log(ProList)
       

      },
       async refresh(){
       
    
      await this.$store.dispatch("Provedores/getAllPro");
      },

      async deleteTask(id, index){
        console.log(index)
        this.actualId = id
        this.actualIndex = index
        await this.$store.dispatch("Provedores/deletePro", {Id: this.actualId,  Index: this.actualIndex} );
       
      },
       ChangeStatus(Nombre, Direccion, Correo,Telefono, id, index){
        document.getElementById("CajaNam").value = Nombre;
        document.getElementById("CajaPre").value = Direccion;
        document.getElementById("CajaCan").value = Correo;
        document.getElementById("CajaTel").value = Telefono;
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
          const Telefono = document.getElementById("CajaTel").value;

          await this.$store.dispatch("Provedores/ChangePro", {Id: this.actualId,  Index: this.actualIndex, Nombre: Nombre, Direccion: Precio, Correo: Cantidad, Telefono: Telefono})
          this.actualId = ""
          this.actualIndex = ""

        }else{
          window.alert("No se ha indicado Producto a modificar");


        }
      

    
      },
      async crear(){
        const Nombre = document.getElementById("CajaProNam").value;
        const Direccion = document.getElementById("CajaProPre").value;
        const Correo = document.getElementById("CajaProCan").value;
        const Telefono = document.getElementById("CajaProTel").value;
       
       const Pro = {
          Nombre: Nombre,
          Direccion: Direccion,
          Correo: Correo,
          Telefono: Telefono
        }
        console.log(Pro)

        if(Pro){
          
          await this.$store.dispatch("Provedores/addPro", Pro )

        }else{
           window.alert("No se posible crear Productos en blanco");
        }
       
    
      },
       async buscar(){
         console.log("Buscar")
        const valor = document.getElementById("SelCaja").value;
        const parametros = document.getElementById("bpar").value;

        if(parametros){
          console.log(valor)
          console.log(parametros)
          
          await this.$store.dispatch("Provedores/getFindPro", {parametros : parametros, Datos: valor} )

        }else{
           window.alert("No se posible buscar en blanco");
        }
       
    
      },
      Ir(){
          this.$router.push({path: "/ProvedoresPapelera"});
      }
  },
  created() {
    this.getAllPro()
  },
  components: {
    
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
