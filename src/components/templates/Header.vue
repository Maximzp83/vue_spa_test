<template>
  <header class="main-header">
    <h3>{{ title }}</h3>
    <nav>
      <ul class="nav-links">Navigation: 
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/authors">Authors</router-link></li>
        <li><router-link to="/posts">Posts</router-link></li>
      </ul>
    </nav>
    
  </header>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      title: 'Test SPA Blog'
    }
  }
}
</script>

