<template>
 <div class="wrapper fadeInDown">
  <div class="col mb-5" v-for="(Producto, index) in List"
                        :key="index">                 
    <div class="card h-100">
        <!-- Sale badge-->
        
        <!-- Product details-->
        <div class="card-body p-4">
            <div class="text-center">
                <!-- Product name-->
                <h5 class="fw-bolder">{{Producto.Producto}}</h5>
                <!-- Product price-->
                {{Producto.Precio}} x  {{Producto.Cantidad}} = {{Producto.Cantidad * Producto.Precio}}
            </div>
        </div>
        <!-- Product actions-->
          <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
          
          </div>

      </div>
  </div>

<div class="col mb-5">                 
    <div class="card h-100">
        <!-- Sale badge-->
        
        <!-- Product details-->
        <div class="card-body p-4">
            <div class="text-center">
                <!-- Product name-->
                <h5 class="fw-bolder"></h5>
                <!-- Product price-->
                <h1>Total: ${{this.count}}</h1>
            </div>
        </div>
        <!-- Product actions-->
          <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
        </div>
      </div>
         <button type="button"  class="text-center btn btn-outline-dark mt-auto" v-on:click="Terminar()" >Terminar</button>
  </div>

 
</div>
</template>

<script>
  // Libraries
  //import axios from 'axios';
  
 
  export default {
  name: "Login",
  data() {
    return {
      List: [],
      Count : 0
    
    }
  },
    methods: {
      async Terminar(){
        this.List = this.$store.getters["Ventas/getListaVentas"];
        

        console.log(this.List)
        await this.$store.dispatch("Ventas/addVenta", this.List);
      },
      async getAll(){
          this.List = this.$store.getters["Ventas/getListaVentas"];
          console.log(this.List)
          if(this.List.length){
            console.log("Dentro")
            this.count = 0
            
            this.List.forEach(element => 

            
            this.count += element.Precio
           
            
            )
            console.log(this.count)
        

           }
       




      }
       
    },
    created() {
      this.getAll()
    
    }
  }
</script>

<style scoped>


</style>
