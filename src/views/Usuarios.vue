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
                                    <h5 class="fw-bolder">Editar</h5>
                                    <!-- Product reviews-->
                                   <div class="d-flex justify-content-center small text-warning mb-2">
                                    <input type="text"  id="CajaNomC" class="" name="CajaNomC" placeholder="Nombre">
                                    </div>
                                    <div class="d-flex justify-content-center small text-warning mb-2">
                                    <input type="text"  id="CajaCon1" class="" name="CajaCon1" placeholder="Contraseña">
                                    </div>
                                    <div class="d-flex justify-content-center small text-warning mb-2">
                                    <input type="text"  id="CajaCon2" class="" name="CajaCon2" placeholder="Contraseña">
                                    </div>
                                    <div class="d-flex justify-content-center small text-warning mb-2">
                                    </div>
                                    <label class="form-check-label" for="flexCheckDefault" checked>
                                    Rango
                                    </label>
                                    <div class="d-flex justify-content-center small text-warning mb-2 form-check" >
                                    
                                    <input class="form-check-input" type="checkbox"  id="inputAdC">
                                    
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
                                    <input type="text"  id="CajaNom" class="" name="CajaNom" placeholder="Nombre">
                                    </div>
                                    <div class="d-flex justify-content-center small text-warning mb-2">
                                    </div>
                                    <label class="form-check-label" for="flexCheckDefault" checked>
                                    Rango
                                    </label>
                                    <div class="d-flex justify-content-center small text-warning mb-2 form-check" >
                                    
                                    <input class="form-check-input" type="checkbox"  id="inputAd">
                                    
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
                                      <option value="Usuario" selected>Nombre</option>
                                      <option value="Admin"> Administrador</option>
                                      <option value="_id">Id</option>
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
                        v-for="(User, index) in getListaPersonal"
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
                                <button type="button" class="text-center btn btn-outline-dark mt-auto" v-on:click="changeStatus(User._id,index, User.Usuario, User.Admin )" >Modificar</button>
                                <button type="button"  class="text-center btn btn-outline-dark mt-auto" v-on:click="Eliminar(User._id,index)" >Eliminar</button>
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
            "getListaPersonal",
        ]
      )
    },
  methods: {
     async getAllPro(){
       
        const Users = this.$store.getters["User/getListaPersonal"];


        if (Users && Users.length === 0 ) {
          console.log("Usuarios")
          await this.$store.dispatch("User/getAllUsers");
        }
        console.log(Users)
       

      },
      async Eliminar(id, index){
        console.log(index)
        this.actualId = id
        this.actualIndex = index
        await this.$store.dispatch("User/deleteUser", {Id: this.actualId,  Index: this.actualIndex} );
       
      },
       changeStatus(_id,index, Usuario, Admin  ){

        document.getElementById("CajaNom").value = Usuario;
        console.log(_id,index, Usuario, Admin )
        if(Admin){
           document.getElementById("inputAd").checked = true;
        }else{
           document.getElementById("inputAd").checked = false;
        }
        console.log(_id)
        this.actualId = _id
        this.actualIndex = index

        //console.log(index)
        


        
      },

      async buscar(){
         console.log("Buscar")
        const valor = document.getElementById("SelCaja").value;
        const parametros = document.getElementById("bpar").value;

        if(parametros){
          console.log(valor)
          console.log(parametros)
          
          await this.$store.dispatch("User/getFindPro", {parametros : parametros, Datos: valor} )

        }else{
           window.alert("No se posible buscar en blanco");
        }
       
    
      },

      async refresh(){

      await this.$store.dispatch("User/getAllUsers");

      },
       async crear(){
        const Nombre = document.getElementById("CajaNomC").value;
        const Contraseña = document.getElementById("CajaCon1").value;
        const Contraseña2 = document.getElementById("CajaCon2").value;
        const Admin = document.getElementById("inputAdC").checked;

        if(Contraseña === Contraseña2 && Contraseña !== ""){
          const User = {
          Nombre: Nombre,
          Contraseña: Contraseña,
          Admin: Admin,
          Usuario: Nombre
        }

        if(User){
          console.log(User)
          
          await this.$store.dispatch("User/crearUser", User )

        }else{
           window.alert("No se posible crear el usuario en blanco");
        }
          
        }
       
       
    
      },

      async actualizar(){
        console.log("Actualizar")
        if(this.actualId !== ""){
          
          const Nombre = document.getElementById("CajaNom").value;
          const Admin = document.getElementById("inputAd").checked;
      
          console.log(Nombre, Admin)
          await this.$store.dispatch("User/editUser", {Id: this.actualId,  Index: this.actualIndex, Nombre: Nombre, Admin: Admin })
          this.actualId = ""
          this.actualIndex = ""

        }else{
          window.alert("No se ha indicado un usuario a modificar");


        }
      },
     
      Ir(){
          this.$router.push({path: "/PersonalPapelera"});
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
