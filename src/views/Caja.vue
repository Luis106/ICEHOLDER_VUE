<template>
<!-- Section-->
        <section class="py-5">
            <div class="container px-4 px-lg-5 mt-5">
                     <input type="submit" v-on:click="restCaja"  class="fadeIn fourth" value= "Limpiar">
                <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">

                      <div
                        v-for="(Producto, index) in getListaProductos"
                        :key="Producto._id"
                        >
                        <proCajaComponent
                        :Nombre ="Producto.Nombre"
                        :Cantidad ="Producto.Cantidad"
                        :Precio ="Producto.Precio"
                        :index="index"
                        :id="Producto._id.toString()"
                        @Agregar="Agregar"
                        ></proCajaComponent>
                      </div>
                </div>
                <h1>-------------------------------------------------------------------- </h1>

                 <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">

                      <div
                        v-for="(Producto, index) in getListaVentas"
                        :key="index"
                        >
                        <AnadidoCajaComponent
                        :Nombre ="Producto.Nombre"
                        :Cantidad ="Producto.Cantidad"
                        :Precio ="Producto.Precio"
                        :index="index"
                      
                        @Quitar="Quitar"
                        ></AnadidoCajaComponent>
                      </div>
                </div>
                  <input type="submit" v-on:click="Terminar"  class="fadeIn fourth" value= "Terminar">
            </div>
        </section>

</template>




<script>


//import axios from "axios";
import {mapGetters} from "vuex";

// Components
//import createTaskInput from '../components/createTaskInput';
import proCajaComponent from '../components/proCajaComponent.vue';
import AnadidoCajaComponent from '../components/AñadidoCajaComponent.vue';




export default {
name: "Productos",
  data() {
    return {
      actualId: "",
      actualIndex: ""
      
    }
  }, 
  computed:{
      ...mapGetters('Productos',["getListaProductos"]),
       ...mapGetters( "Ventas",["getListaVentas"])
     
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
        Agregar(Producto, Precio, Cantidad){
           //const user = "Luna"
        const user = this.$store.getters["User/getUser"];
        console.log(Producto,Precio,Cantidad , user)
        
       
        this.$store.dispatch("Ventas/addPro", {user: user, Producto: Producto, Precio: Precio, Cantidad: Cantidad  });
       
      },
        Quitar(index){
        //const user = vueInstance.$store.getters["User/getUser"];
       
        this.$store.dispatch("Ventas/quitarPro", {index: index });
       
      },
      Terminar(){

      this.$router.push({path: "/Terminar"});

      },
      Ir(){
          this.$router.push({path: "/ProductosPapelera"});
      },
      restCaja(){
          this.$store.dispatch("Ventas/clear" )
      }
  },
  created() {
    this.getAllPro()
    this.restCaja()
  },
  components: {
    proCajaComponent,
    AnadidoCajaComponent
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
