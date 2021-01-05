<template>
	<div class="container mt-4">
		<!-- {{ user }} -->

		<h1>HEllo {{ user.first_name + ' ' + user.last_name }}</h1>
		<h3>You are using {{ user.email }} as your email</h3>
		<img :src="user.avatar">
		<hr>
	</div>
</template>

<script>
	import axios from 'axios'
	export default{
		data(){
			return{
				userid: '',
				user: ''
			}
		},
		created(){
			this.userid = this.$route.params.id

			axios.get(`https://reqres.in/api/users/${this.userid}`)
			.then(res => {
				console.log(res)
				this.user=res.data.data
			})
			.catch(err => {
				console.log(err)
			})
		}

	}
</script>