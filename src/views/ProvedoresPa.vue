<template>

<!-- Section-->
        <section class="py-5">
            <div class="container px-4 px-lg-5 mt-5">
                <input type="submit" v-on:click="Ir"  class="fadeIn fourth" value= "Productos">
                <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                    

                  <div class="col mb-5">
                        
                    </div>




                 
                     
                     <div
                        v-for="(Producto, index) in getListaProductosP"
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
                                 
                                    <button type="button"  class="text-center btn btn-outline-dark mt-auto" v-on:click="deleteTask(Producto._id,index)" >Restaurar</button>
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
            "getListaProductosP",
        ]
      )
    },
  methods: {
     async getAllPro(){
       
        const ProList = this.$store.getters["Provedores/getListaProductosP"];


        if (ProList && ProList.length === 0 ) {
          console.log("getAllProP")
          await this.$store.dispatch("Provedores/getAllProP");
        }
        console.log(ProList)
       

      },
      async deleteTask(id, index){
        console.log(index)
        this.actualId = id
        this.actualIndex = index
        await this.$store.dispatch("Provedores/restorePro", {Id: this.actualId,  Index: this.actualIndex} );
       
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

          await this.$store.dispatch("Provedores/ChangePro", {Id: this.actualId,  Index: this.actualIndex, Nombre: Nombre, Precio: Precio, Cantidad: Cantidad})
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
          
          await this.$store.dispatch("Provedores/addPro", Pro )

        }else{
           window.alert("No se posible crear Productos en blanco");
        }
       
    
      },
      Ir(){
          this.$router.push({path: "/Provedores"});
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
