<template>
  <div class="relative">
    <div v-if="authStatus == 'success'" class="message-box success">Login {{ authStatus }}</div>
    <div v-else-if="authStatus == 'error'" class="message-box warning">Login {{ authStatus }}, user not found</div>

    <form class="form login" @submit.prevent="submit">
      <h1 class="title">Sign in</h1>
      <div class="form-group">
        <label>User name</label>
        <input required v-model="userId" type="text" placeholder="Your id"/>
      </div>
      <div class="form-group">
        <label>Password</label>
        <input v-model="password" type="password" placeholder="Password"/>
      </div>
      <hr/>
      <div class="submitButtonWrapper">
        <button type="submit">Login</button>
      </div>
    </form>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Login',
  data () {
    return {
      title: 'Test SPA Blog',
      userId: null,
      password: null,
    }
  },
  computed: {
    ...mapGetters({
      authStatus: 'auth/authStatus',
    }),
  },
  methods: {
   submit: function () {
      const { userId, password } = this;
      this.$store.dispatch('auth/login_Attempt', { userId: userId, password: password })
    }
  }
  
}
</script>

