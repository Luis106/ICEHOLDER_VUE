import axios from "axios";
import router from '../../router'

	const state = {
		ListaVentas: []
	
	};
	const getters = {

		getListaVentas: (state) => state.ListaVentas,
		
		
	};
	const actions = {
		async getAllPro(commit) {
				if (commit){
					
					commit('SET_Pro', commit);
					
				}


		},
		addPro({commit}, Pro){
			console.log(Pro)
			if (Pro){
					commit("SET_Pro", Pro)
			}
		},
		quitarPro({commit}, Pro){
			console.log(Pro)
			if (Pro){
					commit("QUITAR_PRO", Pro)
			}
		},
		clear({commit}){
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
				

				
			}
			
		},

	
	
	

	};

	const mutations = {
		SET_Pro(state, newProList) {
			console.log("newProList")
			state.ListaVentas.push(newProList);
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
