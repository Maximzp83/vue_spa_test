<template>
  <div class="relative">
    <!-- <div v-else-if="authStatus == 'error'" class="message-box warning">Login {{ authStatus }}, user not found</div> -->
    <div v-if="postAddStatus === 'loading'" class="title"><b>Processing ...</b></div>
    <div v-if="post">
      <form v-if="postAddStatus === 'ready'" class="form postForm" @submit.prevent="submit">
        <h1 class="title">Edit Post</h1>
        <div class="form-group">
          <label>Post title</label>
          <input required v-model="currentPost.title" type="text"
                 placeholder="input title"/>
        </div>
        <div class="form-group">
          <label>Content</label>
          <textarea v-model="currentPost.body" placeholder="text"></textarea>
        </div>
        <hr/>
        <div class="submitButtonWrapper">
          <button type="submit">Save post</button>
        </div>
      </form>
    </div>
<!--     <div>
      {{currentPost}}
    </div> -->
  </div>
  
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'EditPost',
  // beforeRouteEnter (to, from, next) {
  //   (vm) => {
      
  //     // console.log(vm)
  //   } 
  //   // if (true) {}
  // },
  props: ['authorId', 'id'],
  data () {
    return {
      currentPost: {
        id: null,
        userId: null,
        title: null,
        body: null,
        views: null,
      },      
    }
  },
  computed: {
    ...mapGetters({
      postAddStatus: 'posts/postAddStatus',
    }),
    post() {
      let post = this.$store.getters['posts/getPostById'](this.id);
      if (post) {
        this.currentPost.id = this.id;
        this.currentPost.userId = post.userId;
        this.currentPost.title = post.title;
        this.currentPost.body = post.body;
        this.currentPost.views = post.views;
      }
      return  post;
    },
  },

  methods: {
    submit: function () {
      if (this.$store.state.posts.postAddStatus === 'ready') {
        console.log('ready' )
        this.$store.dispatch('posts/editPost', { post: this.currentPost }).then(() => {
          console.log(this.$store.state.posts.postAddStatus)
        })
      } else {
        console.log('not  ready' )
      }

        // const {newPost } = this;
        // console.log(postTitle)
      
      // this.newPost
    }
  },
  // updated() {
  //   console.log('updated:', this.localPostAddStatus)
  // }
  
}
</script>

