import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// Modules import
import Productos from '@/store/modules/Productos.store';
import Citas from '@/store/modules/Citas.store';
import User from '@/store/modules/User.store';
import Ventas from '@/store/modules/Ventas.store';

export default new Vuex.Store({
	state: {},
	mutations: {},
	modules: {
		Productos: Productos,
		Citas: Citas,
		User: User,
		Ventas: Ventas
	}
})
