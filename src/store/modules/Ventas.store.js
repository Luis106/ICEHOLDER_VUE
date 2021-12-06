import axios from "axios";
import router from '../../router'
const date = new Date();

	const state = {
		ListaVentas: []
	
	};
	const getters = {

		getListaVentas: (state) => state.ListaVentas,
		
		
	};
	const actions = {
		getAllPro({commit}, Pro) {
				if (commit){
					
					commit('SET_Pro', Pro);
					
				}


		},
		async getVenD({commit}, Fecha) {

		
				try {
					const response = await axios.post(
						"http://localhost:3000/ventas/ventaspordia",
						{Fecha: Fecha}
						);

						console.log(response.data)


						if(response.data){
							commit('SET_TVEN', response.data);
						}

					
				} catch (error) {

					console.log("No se pudo concretar la venta",error)
				}
		},


		async addPro({commit}){
			const Fecha = (date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear())
			console.log("addPro")
			
			try {
				const response = await axios.post(
					"http://localhost:3000/ventas/ventaspordia",
					{Fecha: Fecha}
					);

					console.log(response.data)


					if(response.status === 200){
						commit("SET_TVEN", response.data)
					}


			} catch (error) {

				console.log("No se pudo concretar la venta",error.response)
			}
					
			
		},
		quitarPro({commit}, Pro){
			console.log(Pro)
			if (Pro){
					commit("QUITAR_PRO", Pro)
			}
		},
		clear({commit}){
			console.log("Clear")
			commit("CLEAR")
		},
		async addVenta({commit},List){
			console.log(commit)
			if(List){

				let productos= []
				let cantidades= []
				let personal = ""
				let montos= []

				console.log(List)
				List.forEach(function(entry) {

					console.log(entry.Producto , entry.Cantidad, entry.user, entry.Precio)
					productos.push(entry.Producto)
					cantidades.push(entry.Cantidad)
					personal = entry.user

					montos.push(entry.Cantidad * entry.Precio)

					console.log(productos , cantidades, personal, montos)




				});
				console.log("Fin del ciclo")
				if(personal){

					try {
						const response = await axios.post(
							"http://localhost:3000/ventas/create",
							{Personal: personal, Cantidades: cantidades, Productos: productos, Montos: montos}
							);
	
							console.log(response.data)
	
							if(response.status === 200){
								router.push({path: "/CAJA"});
							}
	
						
					} catch (error) {
	
						console.log("No se pudo concretar la venta",error.response)
					}
				}else{
					window.alert("No se inicio secion con un usuario valido")
				}

			
			
				

				
			}
			
		},
	};



	const mutations = {
		SET_Pro(state, newProList) {
			console.log("newProList")
			state.ListaVentas.push(newProList);
			console.log(state.ListaVentas)
		},
		SET_Ven(state, newProList) {
			console.log("newProList")
			state.ListaVentas.push(newProList);
			console.log(state.ListaVentas)
		},
		SET_TVEN(state, newProList) {
			console.log("newProList")
			state.ListaVentas= newProList;
			console.log(state.ListaVentas)
		},
		QUITAR_PRO(state, index) {
			console.log("index")
			state.ListaVentas.splice(index,1);
			console.log(state.ListaVentas)
		},
		CLEAR(state){
			state.ListaVentas = [];
		}
		
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
