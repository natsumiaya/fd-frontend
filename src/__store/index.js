import Vue from 'vue'
import Vuex from 'vuex'
import datahome from '@/__store/datahome'

Vue.use(Vuex)


export default new Vuex.Store({
	modules: {
		datahome,
	}
})
