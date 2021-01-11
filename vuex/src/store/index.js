import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
	globalCounter:0
  },
  mutations: {
		ADD_COUNTER(state,data){ 
			console.log("IN INDEX")
			state.globalCounter=data
		}		
  },
	getters: {
	get_counter(state){
		return state.globalCounter
	}
	},
  actions: {
  
  },
  modules: {
  }
})
