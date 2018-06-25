<template>
  <header class="main-header">
    <div class="container">
      <h3>{{ title }}</h3>
      <nav class="nav-menu">
        <ul class="nav-links">Navigation: 
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/authors">Authors</router-link></li>
          <li><router-link :to="{ name: 'AllPosts', params: {authorId: null} }">Posts</router-link></li>
          <!-- <li v-if="authUser"><router-link :to="'/authors/'+authUser.id+'/posts'">Your Posts</router-link></li> -->
          <li v-if="authUser">
            <router-link :to="{ name: 'authorPosts', params: {authorId: authUser.id} }">Your Posts</router-link>            
          </li>
        </ul>
        <div class="user-control">
          <div class="buttons" v-if="authUser">
            <button type="button" v-on:click="logout">Logout {{ authUser.name }}</button>
          </div>
          <div class="buttons" v-else>
            <button type="button" v-on:click="login">Login</button>
            <button type="button">Register</button>
          </div>
          
        </div>
      </nav>
    </div>
    
  </header>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Header',
  data () {
    return {
      title: 'Test SPA Blog'
    }
  },
  computed: {
    ...mapGetters({
      authUser: 'auth/authUser'
    }),
  },
  methods: {
    login() {
      this.$router.push('/login')
    },
    logout() {
      this.$store.dispatch('auth/logout')
    },

  }
}
</script>

