<template>
  <div class="page-wrapper">
    <Aside></Aside>
    <div class="page-content">
      <h1>{{ msg }}</h1>
    </div>
  </div>
</template>

<script>
import Aside from './templates/Aside'

export default {
  components: {
    Aside,
  },
  name: 'IndexPage',
  data () {
    return {
      msg: 'indexPage content'
    }
  }
}
</script>

