<template>
 <div class="wrapper fadeInDown">

       <input type="submit" v-on:click="ir" class="fadeIn fourth" value ="Volver">

  <div id="formContent">
    
    <!-- Tabs Titles -->

    <!-- Login Form -->

           

      <label >Select list:</label>
        <select class="form-control" id="TaskStatus" aria-label=".form-select-lg example" >
       
          <option v-for="(Servicio) in ServList" :key="Servicio._id">{{ Servicio.name }}</option>
      
        </select>
      <input type="text"  id="Lugar" class="fadeIn second" name="login" placeholder="Hora">
      <input type="text"  id="Hora" class="fadeIn third" name="login" placeholder="Lugar">
      <input type="submit" v-on:click="Crear" class="fadeIn fourth">
   

    <!-- Remind Passowrd -->
    <div id="formFooter">
     <!-- <a class="underlineHover" href="#">Forgot Password?</a> ---->
    </div>

  </div>
</div>
</template>

<script>
  // Libraries
  
  
 
  export default {
  name: "Agendar",
  data() {
    return {
      ServList: {}
    }
  },
  computed:{
      
    },
    methods: {
      async getAllServ(){
        this.ServList = this.$store.getters["Servicios/getListaServicios"];

        if (this.ServList && this.ServList.length === 0 ) {
          console.log("getAllServ")
          await this.$store.dispatch("Servicios/getAllServ");
          this.ServList = this.$store.getters["Servicios/getListaServicios"];
        }
        console.log(this.ServList)
      },
      async Crear(){
        const vueInstance = this;

      setTimeout(async function(){
        const lugar = document.getElementById("Lugar").value
        const Hora = document.getElementById("Hora").value
        const Serv = document.getElementById("TaskStatus").value
        const token = vueInstance.$store.getters["User/gettoke"];
        const user = vueInstance.$store.getters["User/getUser"];
        console.log(lugar + Hora + Serv + user)
        console.log("Token: " + token)
        await vueInstance.$store.dispatch("Citas/addCita", {usuario: user,  servicio: Serv, hora: Hora, ubicacion: lugar, token: token} );
      },1000);
      
      },
      ir(){
         this.$router.push({path: "/VerServicios"});
      }
    },
    
    created() {
      this.getAllServ()
       
      
    }
  }
</script>

<style scoped>


</style>
