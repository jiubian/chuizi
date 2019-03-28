import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store=new Vuex.Store({
	state:{
		shopping:[]
	},
	actions:{
		additem({commit},msg){
			commit("Addgoods",msg);
		},
		del({commit},index){
			this.state.shopping.splice(index,1);
		}
	},
	mutations:{
		Addgoods(state,msg){
			state.shopping.push(msg);
			console.log(state.shopping)
		}
	}
})
export default store;