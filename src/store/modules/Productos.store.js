	import axios from "axios";

	const state = {
		ListaProductos: [],
		ListaProductosP: [],
	};
	const getters = {

		getListaProductos: (state) => state.ListaProductos,
		getListaProductosP: (state) => state.ListaProductosP,
		

	};
	const actions = {
		async getAllPro({commit}) {
			try {
				
				const response = await axios.get(
					`http://localhost:3000/Producto`
				);
			

				console.log(response.data)
				

				if (response.data){
					
					commit('SET_Pro', response.data);
					
				}

			}catch (err) {
				console.log(err);
			}
		},
		async addPro({commit}, Pro){
			console.log(Pro)
			if (Pro !== ""){
				// add task to server
				try {
				const response = await axios.post(
					"http://localhost:3000/Producto/create",
					{Nombre:Pro.Nombre, Precio: Pro.Precio,Cantidad: Pro.Cantidad }
				);
				if (response.status !== 500) {
					commit("DELETE_Pro", response.data)
				
				} else {
					//alert("No se pudo crear la tarea")
					console.log("No se pudo crear la tarea")
				}
				
				} catch (err){
				console.log(err);
				}
			}
		},
		async deletePro({commit},Pro){
			console.log(Pro.Id)
			console.log(Pro.Index)

			if (Pro.Id !== ""){
				// add task to server

				try {
				const response = await axios.post(
					"http://localhost:3000/Producto/delete",
					{_id: Pro.Id}
				);
				console.log()
				if (response.status !== 500) {
					commit("DELETE_Pro", Pro.Index)
				
				} else {
					//alert("No se pudo crear la tarea")
					console.log("No se pudo crear la tarea")
				}
				
				} catch (err){
				console.log(err);
				}
			}
		},
		async restorePro({commit},Pro){
			console.log(Pro.Id)
			console.log(Pro.Index)

			if (Pro.Id !== ""){
				// add task to server

				try {
				const response = await axios.post(
					"http://localhost:3000/Producto/restore",
					{_id: Pro.Id}
				);
				console.log()
				if (response.status !== 500) {
					commit("RESTORE_Pro", Pro.Index)
				
				} else {
					//alert("No se pudo crear la tarea")
					console.log("No se pudo crear la tarea")
				}
				
				} catch (err){
				console.log(err);
				}
			}
		},
		async ChangePro({commit},Pro){
			console.log(Pro)

			if (Pro.Id !== ""){
				// add task to Proer

				try {
				const response = await axios.post(
					"http://localhost:3000/Producto/update",
					{_id: Pro.Id, Nombre:Pro.Nombre, Precio: Pro.Precio,Cantidad: Pro.Cantidad}
				);
				console.log(response.data)

				///////El updaate no funciona actualizar el post
				if (response.status !== 500) {
					commit("CHANGE_Pro", {Index: Pro.Index, NewPro: response.data})
				
				} else {
					//alert("No se pudo crear la tarea")
					console.log("No se pudo crear la tarea")
				}
				
				} catch (err){
				console.log(err);
				}
			}
		},
		async getAllProP({commit}) {
			try {
				
				const response = await axios.post(
					`http://localhost:3000/Producto/Papelera`
				);
			

				console.log(response.data)
				

				if (response.data){
					
					commit('SET_ProP', response.data);
					
				}

			}catch (err) {
				console.log(err);
			}
		},

	};

	const mutations = {
		SET_Pro(state, newProList) {
			
			state.ListaProductos = newProList;
			console.log(state.ListaProductos)			
		},
		CHANGE_Pro(state, Pro){
				console.log(Pro.Index)
				console.log(Pro.NewPro)
				state.ListaProductos.splice(Pro.Index, 1, Pro.NewPro);
			
		},
		DELETE_Pro(state, index){
			console.log(index + "Delete pro")
			state.ListaProductosP.push(state.ListaProductos[index])
			state.ListaProductos.splice(index, 1);
			
		},
		RESTORE_Pro(state, index){
			console.log(index + "Res pro")
			state.ListaProductos.push(state.ListaProductosP[index])
			state.ListaProductosP.splice(index, 1);
		},
		CREATE_Pro(state, Pro){
			console.log(Pro.savedTask)
			state.ListaProductos.push(Pro.savedTask);
			
		},
		SET_ProP(state, newProList) {
			
			state.ListaProductosP = newProList;
					
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
