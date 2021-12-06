<template>

<!-- Section-->
        <section class="py-5">
        
            <div class="container px-4 px-lg-5 mt-5">
               
                <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                  <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <label for="fname">Fecha a buscar</label>
                  <input type="text" id="fecha"  placeholder="1/1/2021" >
                  <button type="button"  class="text-center btn btn-outline-dark mt-auto" v-on:click="buscarFe()" >Buscar</button>
                </div>

                    <div class="col mb-5">
                        <div class="card h-100">
                
                            <div class="card-body p-4">
                                <div class="text-center">
                                    <!-- Product name-->
                                    <h5 class="fw-bolder">Corte</h5>
                                    <!-- Product reviews--> 
                                    <h5 class="fw-bolder">Fecha: {{data.Dia}}</h5>  
                                    <h5 class="fw-bolder">Capital Total:{{data.MontoTotal}}</h5>  
                                    <h5 class="fw-bolder">Número de ventas: {{data.Ventas}}</h5>                                   
                                </div>
                            </div>
                            <!-- Product actions-->
                            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                            </div>
                        </div>
                    </div>  
                </div>

               <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">

                      <div
                        v-for="(data, index) in getListaVentas"
                        :key="index"
                        >
                        {{index}}

                          <div class="col mb-5">
                        <div class="card h-100">
                
                            <div class="card-body p-4">
                                <div class="text-center">
                                    <!-- Product name-->
                                    <h5 class="fw-bolder">Venta:</h5>
                                    <!-- Product reviews--> 
                                    <h5 class="fw-bolder">Productos: {{data.Productos}}</h5>  
                                    <h5 class="fw-bolder">Cantidades:{{data.Cantidades}}</h5>  
                                    <h5 class="fw-bolder">Montos: {{data.Montos}}</h5>      
                                    <h5 class="fw-bolder">Fecha {{data.Fecha}}</h5>   
                                    <h5 class="fw-bolder">Hora: {{data.Hora}}</h5>                               
                                                                
                                </div>
                            </div>
                            <!-- Product actions-->
                            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
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

import axios from 'axios';


export default {
name: "Productos",
  data() {
    return {
      actualId: "",
      actualIndex: "",
      data: {}
      
    }
  }, 
  computed:{
        ...mapGetters('Productos',["getListaProductos"]),
       ...mapGetters( "Ventas",["getListaVentas"])
    },
  methods: {
     async getAllPro(){

        try {

				const response = await axios.post(
					`http://localhost:3000/Ventas/corte`,
          
				);

        await this.$store.dispatch("Ventas/addPro");


        console.log(response.data)
        this.data = response.data
        }
        catch(error) {
            console.log(error)
        }
     
      
    
      },
      Ir(){
          this.$router.push({path: "/ProductosPapelera"});
      },
     async buscarFe(){
        const Fecha = document.getElementById("fecha").value
        console.log(Fecha)
        try{
				
					const response = await axios.post(
						`http://localhost:3000/Ventas/cortepordia`,
						{Fecha: Fecha}
					);
          console.log(response.data)

          this.data = response.data

          }
          catch(error) {
              console.log("Error al realizar busqueda",error.response)
          }

        await this.$store.dispatch("Ventas/getVenD",Fecha);
    
      },
  },
  created() {
    this.getAllPro();

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
