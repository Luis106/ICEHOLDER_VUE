import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// Modules import
import tasks from '@/store/modules/tasks.store';
import Productos from '@/store/modules/Productos.store';
import Citas from '@/store/modules/Citas.store';
import User from '@/store/modules/User.store';

export default new Vuex.Store({
	state: {},
	mutations: {},
	modules: {
		tasks: tasks,
		Productos: Productos,
		Citas: Citas,
		User: User
	}
})
