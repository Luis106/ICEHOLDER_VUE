import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// Modules import
import Productos from '@/store/modules/Productos.store';

import User from '@/store/modules/User.store';
import Ventas from '@/store/modules/Ventas.store';
import Provedores from '@/store/modules/Provedores.store';

export default new Vuex.Store({
	state: {},
	mutations: {},
	modules: {
		Productos: Productos,
		User: User,
		Ventas: Ventas,
		Provedores: Provedores
	}
})
