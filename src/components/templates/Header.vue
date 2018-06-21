<template>
  <header class="main-header">
    <h3>{{ title }}</h3>
    <nav class="nav-menu">
      <ul class="nav-links">Navigation: 
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/authors">Authors</router-link></li>
        <li><router-link to="/posts">Posts</router-link></li>
      </ul>
      <div class="user-control">
        <div class="buttons" v-if="user">
          <button type="button" v-on:click="logout">Logout {{ user.name }}</button>
        </div>
        <div class="buttons" v-else>
          <button type="button" v-on:click="login">Login</button>
          <button type="button">Register</button>
        </div>
        
      </div>
    </nav>
    
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
      user: 'auth/authUser'
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

