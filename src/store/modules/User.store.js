import axios from "axios";

	const state = {
		User: String,
        Token : String,
        Admin: Boolean,
		Personal: [],
		PersonalP: []


	};
	const getters = {

		getUser: (state) => state.User,
        gettoken: (state) => state.Token,
        getAdmin: (state) => state.Admin,
		getListaPersonal: (state) => state.Personal,
		getListaPersonalP: (state) => state.PersonalP
		
	};
	const actions = {
        addUser({commit}, user){

            console.log(user)
            if(user){
                console.log("UserSET")
                commit('SET_USER', user);
            }
        },
		
		async getToken({commit}) {
			
			try {
				
				const response = await axios.get(
					`http://localhost:3000/auth/sing`,
				
				);
                console.log("Token")
				console.log(response.data);

				if (response.data){
				
					commit('SET_TOKEN', response.data);
				}

			}catch (err) {
				console.log(err);
			}
		},

		async getAllUsers({commit}){
			try {
				
				const response = await axios.post(
					`http://localhost:3000/Usuario/mostrar`
				);
			

				console.log(response.data)
				

				if (response.data){
					
					commit('SET_USERS', response.data);
					
				}

			}catch (err) {
				console.log(err);
			}
		},
		async getAllUsersP({commit}){
			try {
				
				const response = await axios.post(
					`http://localhost:3000/Usuario/papelera`,
				);
			

				console.log(response)
				

				if (response.data){
					
					commit('SET_USERSP', response.data);
					
				}

			}catch (err) {
				console.log(err);
			}
		},
		async editUser({commit},user){
			try {
				
				const response = await axios.post(
					`http://localhost:3000/Usuario/cambiar`,
					{_id:user.Id,  Nombre: user.Nombre, Admin: user.Admin}

				);
			

				console.log(response.data)
				

				if (response.data){
					console.log("Respuesta",response.data)
					
					commit('EDIT_USERS', {data: response.data, Index:user.index});
					
				}

			}catch (err) {
				console.log(err);
			}
		},
		async crearUser({commit},user){
			try {
				console.log("Crear User" )
				console.log(user)
				const response = await axios.post(
					`http://localhost:3000/Usuario/crear`,
					{Nombre: user.Nombre, Contraseña: user.Contraseña, Admin: user.Admin}

				);
				
					console.log("Paso la consulta")

				if (response.status == 200){
					console.log("Respuesta",response)
					
					commit('SET_CREAR', user);
					
				}

			}catch (err) {

				console.log("Error en el cleinte " );
				console.log(err.response)
			}
		
		},
		async restoreUser({commit},Pro){
			console.log(Pro.Id)
			console.log(Pro.Index)

			if (Pro.Id !== ""){
				// add task to server

				try {
				const response = await axios.post(
					"http://localhost:3000/Usuario/restaurar",
					{_id: Pro.Id}
				);
				console.log()
				if (response.status !== 500) {
					commit("RESTORE_User", Pro.Index)
				
				} else {
					//alert("No se pudo crear la tarea")
					console.log("No se pudo crear la tarea")
				}
				
				} catch (err){
				console.log(err);
				}
			}
		},
		async deleteUser({commit},Pro){
			console.log(Pro.Id)
			console.log(Pro.Index)

			if (Pro.Id !== ""){
				// add task to server

				try {
				const response = await axios.post(
					"http://localhost:3000/Usuario/borrar",
					{_id: Pro.Id}
				);
				console.log()
				if (response.status !== 500) {
					commit("DELETE_User", Pro.Index)
				
				} else {
					//alert("No se pudo crear la tarea")
					console.log("No se pudo crear la tarea")
				}
				
				} catch (err){
				console.log(err);
				}
			}
		},
	};

	const mutations = {
        SET_TOKEN(state, token) {
			state.token = token.jwt;
			console.log("state.token")
			console.log(state.token)
			
		},
        SET_USER(state, User) {
			state.User = User.Usuario;
            state.Admin = User.Administrador;
			console.log("state.token")
			console.log( state.Admin)
            console.log(state.User)
			
		},
		SET_USERS(state, Users) {
			state.Personal = Users

		},
		SET_USERSP(state, Users) {
			state.PersonalP = Users

		},
		EDIT_USERS(state, User) {
			console.log(User)
			state.Personal.splice(User.Index, 1, User.data) 

		},
		DELETE_User(state, Index) {
			console.log(Index)
			state.PersonalP.push(state.Personal[Index])
			state.Personal.splice(Index, 1);

		},
		RESTORE_User(state, Index) {
			console.log(Index)
			state.Personal.push(state.PersonalP[Index])
			state.PersonalP.splice(Index, 1);

		},
		SET_CREAR(state, User) {
			console.log(User)
			state.Personal.push(User) 

		},

	};
	export default {
		namespaced: true,
		state : {
			...state
		},
		getters: {
			...getters
		},
		actions: {
			...actions
		},
		mutations: {
			...mutations
		}
	}
