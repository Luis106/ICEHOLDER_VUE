<template>
  <div class="col mb-5">
    <div class="card h-100">
        <!-- Sale badge-->
        <div class="badge bg-dark text-white position-absolute" style="top: 0.5rem; right: 0.5rem">{{Cantidad}}</div>
        <!-- Product details-->
        <div class="card-body p-4">
            <div class="text-center">
                <!-- Product name-->
                <h5 class="fw-bolder">{{Nombre}}</h5>
                <!-- Product price-->
                ${{Precio}}
            </div>
        </div>
        <!-- Product actions-->
          <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
           {{Cantidad}}
            <button type="button"  class="text-center btn btn-outline-dark mt-auto" v-on:click="emitAgregar(index)" >Quitar</button>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: "proComponent",
  props: {
    Nombre: {
      type: String
    },
    Cantidad: {
      type: Number
    },
    Precio: {
      type: Number
    },
    id: {
      type: String
    },
    index:{
      type:Number
    }

  },
  methods: {
    emitAgregar(index){
      this.$emit("Quitar", index);
    }
    
  }
}
</script>

<style scoped>

</style>
