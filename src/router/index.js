import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '@/components/Login'

import IndexPage from '@/components/IndexPage'
import AuthorsPage from '@/components/AuthorsPage'
import Author from '@/components/Author'
import AuthorPosts from '@/components/AuthorPosts'
import AllPosts from '@/components/AllPosts'
import Post from '@/components/Post'
import EditPost from '@/components/EditPost'
import NewPost from '@/components/NewPost'


Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    // {
    //   path: '/register',
    //   name: 'Register',
    //   component: Register
    // },
    {
      path: '/',
      name: 'IndexPage',
      component: IndexPage
    },
    {
      path: '/authors',
      name: 'AuthorsPage',
      component: AuthorsPage
    },
    {
      path: '/authors/:authorId',
      name: 'Author',
      component: Author,
      props: true,
    },
    {
      path: '/authors/:authorId/posts',
      name: 'authorPosts',
      component: AuthorPosts,
      props: true,
    },
    {
      path: '/posts',
      name: 'AllPosts',
      component: AllPosts,
      beforeEnter: (to, from, next) => {
        // console.log(this)
        next()
      },
      // props: true,
    },
    {
      path: '/authors/:authorId/posts/:id',
      name: 'Post',
      component: Post,
      props: true,
    },
    {
      path: '/authors/:authorId/posts/:id/edit',
      name: 'EditPost',
      component: EditPost,
      meta: { editPostGuard: true },
      props: true,
    },
    {
      path: '/posts/new-post',
      name: 'NewPost',
      component: NewPost,
      meta: { requiresAuth: true },
      // props: true,
    },
    
    
  ],


})

export default router






