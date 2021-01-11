<template>
  <div class="home">
	<h2>
		This is a counter {{ counter }}
		<br>
		THis is global counter {{ getcountervaluefromstore }}
	</h2>
	<button @click="increment()">
		Add
	</button>
	<button @click="reset()">
		Reset
	</button>
    
  </div>
</template>

<script>
// @ is an alias to /src

export default {
	data(){
		return{
		counter:0
		}
	},
	computed: {
		getcountervaluefromstore(){
			return this.$store.getters['get_counter']
		}
	},
	created(){
		this.counter=this.$store.state.globalCounter
	},
	methods:{
		increment(){
			console.log("IN HOME")
			this.counter++
			this.$store.commit('ADD_COUNTER',this.counter)
			
		},
		reset(){
			this.counter=0
		}
	}


 }
</script>
