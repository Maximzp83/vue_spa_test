<style src="../src/assets/css/main.css"></style>


<template>
  <div id="vapp" class="mainWrapper">
    <Header></Header>
    <div v-if="globalWarning.message.length" :class="['global-message  ', globalWarning.status]">
      {{ globalWarning.message }}
      <button type="button" v-on:click="clearWarning()">X</button>
    </div>
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

import { mapGetters } from 'vuex'

// import store from './store/index'


export default {
  components: {
    Header,
    Footer
  },
  name: 'App',
  computed: {
    ...mapGetters({
      globalWarning: 'getGlobalWarning',
    }),
  },
  methods: {
    clearWarning() {
      this.$store.dispatch('clearWarning');
    }
  }
}
</script>
