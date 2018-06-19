<style src="../src/assets/css/main.css"></style>


<template>
  <div id="app" class="mainWrapper">
    <Header></Header>
    <main class="page">
      <div class="container">
        <router-view></router-view>
      </div>
    </main>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './components/templates/Header'
import Footer from './components/templates/Footer'

export default {
  components: {
    Header,
    Footer
  },
  name: 'App'
}
</script>
