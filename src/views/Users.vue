<template>
	<div class="container">
		<!-- {{ users }} -->
		<div class="row"  style="margin-top: 30px;">
			<div class="col-4" v-for="(user,index) in users[0]" :key="index">
		<b-card
			:title="user.first_name + ' ' + user.last_name " 
			:img-src="user.avatar"
			img-alt="Image"
			img-top
			style="max-width: 20rem;"
			tag="article" 
			class="mb-2"
		>
    <b-card-text>
       {{ user.email }}
       {{ user.id }}

       <router-link :to="`/users/${user.id}`">
		<b-button variant="outline-primary">View Profile</b-button>
	</router-link> 

    </b-card-text>
    
     
    <router-view/>
		</b-card>
	
	</div>
</div>


	</div>
</template>

<script>
import axios from 'axios'
export default{
	data()
	{
		return {
			users:[]
		}
	},
	created(){
		axios.get('https://reqres.in/api/users')
		.then(res => {
			console.log(res.data.data)
			this.users.push(res.data.data)
		})
		.catch(err => {
			console.log(err)
		})
	}
}
</script>