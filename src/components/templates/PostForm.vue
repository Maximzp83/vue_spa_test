<template>
  <form class="form postForm" v-on:submit.prevent="$emit('submit', postData)">
    <h1 class="title">{{ title }}</h1>
    <div class="form-group">
      <label>Post title</label>
      <input required type="text" placeholder="input title"
        v-model="postData.title" 
      /> 
    </div>
    <div class="form-group">
      <label>Content</label>
      <textarea v-model="postData.body" placeholder="post text"></textarea>
    </div>
    <hr/>
    <div class="submitButtonWrapper">
      <button type="submit">
        {{ buttonText }}
      </button>
    </div>
  </form>
</template>

<script>
export default {
  name: 'PostForm',
  props: ['title', 'buttonText', 'authUser', 'post'],
  data () {
    return {
      postData: {
        userId: this.authUser.id,
        id: this.post ? this.post.id : null,
        title: this.post ? this.post.title : null,
        body: this.post ? this.post.body : null,
        views: this.post ? this.post.views : 0
      },      
    }
  },
}
</script>