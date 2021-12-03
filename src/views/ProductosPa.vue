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
                        <proComponentP
                        :Nombre ="Producto.Nombre"
                        :Cantidad ="Producto.Cantidad"
                        :Precio ="Producto.Precio"
                        :index="index"
                        :id="Producto._id.toString()"

                        @Delete="deleteTask"
                        @Change="changeStatus"
                        ></proComponentP>
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
import proComponentP from '../components/proComponentP.vue';



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
            "getListaProductosP",
        ]
      )
    },
  methods: {
     async getAllPro(){
       
        const ProList = this.$store.getters["Productos/getListaProductosP"];


        if (ProList && ProList.length === 0 ) {
          console.log("getAllProP")
          await this.$store.dispatch("Productos/getAllProP");
        }
        console.log(ProList)
       

      },
      async deleteTask(id, index){
        console.log(index)
        this.actualId = id
        this.actualIndex = index
        await this.$store.dispatch("Productos/restorePro", {Id: this.actualId,  Index: this.actualIndex} );
       
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
          this.$router.push({path: "/Productos"});
      }
  },
  created() {
    this.getAllPro()
  },
  components: {
    proComponentP
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
