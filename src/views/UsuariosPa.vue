<template>

<!-- Section-->
        <section class="py-5">
            <div class="container px-4 px-lg-5 mt-5">
                     <input type="submit" v-on:click="Ir"  class="fadeIn fourth" value= "Eliminados">
                <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                           
                  
                      <div
                        v-for="(User, index) in getListaPersonalP"
                        :key="User._id"
                        >
                         <div class="card h-100">
                            <!-- Sale badge-->
                             <div class="badge bg-dark text-white position-absolute" style="top: 0.5rem; right: 0.5rem">{{index}}</div>
                            <!-- Product details-->
                            <div class="card-body p-4">
                                <div class="text-center">
                                    <!-- Product name-->
                                    <h5 class="fw-bolder">{{User.Usuario}}</h5>
                                    <!-- Product price-->
                                    
                                      Estatus: <h5 v-if="User.Admin">Administrador</h5>
                                                <h5 v-else> Personal </h5>
                                                {{User.Admin}}
                                </div>
                            </div>
                            <!-- Product actions-->
                              <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <button type="button"  class="text-center btn btn-outline-dark mt-auto" v-on:click="Eliminar(User._id,index)" >Restaurar</button>
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
//import proComponent from '../components/proComponent.vue';



export default {
name: "User",
  data() {
    return {
      actualId: "",
      actualIndex: ""
      
    }
  }, 
  computed:{
      ...mapGetters('User',
        [
            "getListaPersonalP",
        ]
      )
    },
  methods: {
     async getAllPro(){
       
        const Users = this.$store.getters["User/getListaPersonalP"];

        if (Users && Users.length === 0 ) {
          console.log("Usuarios")
          await this.$store.dispatch("User/getAllUsersP");
        }

        console.log(Users)
       

      },
      async Eliminar(id, index){
        console.log(index)
        this.actualId = id
        this.actualIndex = index
        await this.$store.dispatch("User/restoreUser", {Id: this.actualId,  Index: this.actualIndex} );
       
      },
      
      
      
      Ir(){
          this.$router.push({path: "/Personal"});
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
