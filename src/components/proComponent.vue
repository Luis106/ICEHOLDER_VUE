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
            <button type="button" class="text-center btn btn-outline-dark mt-auto" v-on:click="emitChangeStatus(Nombre, Precio, Cantidad, id, index)" >Modificar</button>
            <button type="button"  class="text-center btn btn-outline-dark mt-auto" v-on:click="emitDelete(id,index)" >Eliminar</button>
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
    index: {
      type: Number
    },
    id: {
      type: String
    },

  },
  methods: {
    emitDelete(id,index){
      this.$emit("Delete", id, index);
    },
    emitChangeStatus(Nombre, Precio, Cantidad, id, index){
      this.$emit("Change", Nombre, Precio, Cantidad, id, index);
    }
  }
}
</script>

<style scoped>

</style>
