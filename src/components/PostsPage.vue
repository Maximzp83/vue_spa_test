<template>
  <div class="page-wrapper">
    <Aside></Aside>
    <div class="page-content">
      <h1 class="title">{{ title }}</h1>
    </div>
  </div>
</template>

<script>
import Aside from './templates/Aside'

export default {
  components: {
    Aside,
  },
  name: 'PostsPage',
  data () {
    return {
      title: 'Post List'
    }
  }
}
</script>

