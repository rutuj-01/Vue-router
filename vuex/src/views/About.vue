<template>
  <div class="about">
    <h1>Global counter value: {{ count }}</h1>
  
  </div>


</template>
<script>
	export default{
		data(){
			return{
				count:''
			}
		},
		created(){
			this.count=this.$store.state.globalCounter
		}
	}
</script>