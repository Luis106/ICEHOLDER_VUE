<template>

<!-- Section-->
        <section class="py-5">
            <div class="container px-4 px-lg-5 mt-5">
               
                <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                    

                  <div class="col mb-5">
                        <div class="card h-100">
                
                            <div class="card-body p-4">
                               <div class="text-center">
                                    <!-- Product name-->
                                    <h5 class="fw-bolder">Productos</h5>
                                  
                                </div>
                            </div>
                            <!-- Product actions-->
                            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                      <input type="submit" v-on:click="IrPro"  class="fadeIn fourth" value= "Eliminados">
                            </div>
                        </div>
                    </div>



                    <div class="col mb-5">
                        <div class="card h-100">
                
                            <div class="card-body p-4">
                               <div class="text-center">
                                    <!-- Product name-->
                                    <h5 class="fw-bolder">Caja</h5>
                                  
                                </div>
                            </div>
                            <!-- Product actions-->
                            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                      <input type="submit" v-on:click="IrCaj"  class="fadeIn fourth" value= "Eliminados">
                            </div>
                        </div>
                    </div>

                    <div class="col mb-5">
                        <div class="card h-100">
                
                            <div class="card-body p-4">
                               <div class="text-center">
                                    <!-- Product name-->
                                    <h5 class="fw-bolder">Personal</h5>
                                  
                                </div>
                            </div>
                            <!-- Product actions-->
                            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                      <input type="submit" v-on:click="IrPer"  class="fadeIn fourth" value= "Personal">
                            </div>
                        </div>
                    </div>

                    <div class="col mb-5">
                        <div class="card h-100">
                
                            <div class="card-body p-4">
                               <div class="text-center">
                                    <!-- Product name-->
                                    <h5 class="fw-bolder">Personal</h5>
                                  
                                </div>
                            </div>
                            <!-- Product actions-->
                            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                      <input type="submit" v-on:click="IrCor"  class="fadeIn fourth" value= "Corte">
                            </div>
                        </div>
                    </div>

                 
                     
                      
                    



                    
                </div>
            </div>
        </section>

</template>




<script>


//import axios from "axios";


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
    
    },
  methods: {
      IrPro(){
          this.$router.push({path: "/Productos"});
      },
      IrCaj(){
          this.$router.push({path: "/CAJA"});
      },
      IrPer(){
          this.$router.push({path: "/Personal"});
      },
      IrCor(){
          this.$router.push({path: "/CORTE"});
      }
  },
  created() {
  
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
