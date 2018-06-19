<template>
  <header class="main-header">
    <h3>{{ title }}</h3>
    <nav>
      <ul class="nav-links">
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
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

