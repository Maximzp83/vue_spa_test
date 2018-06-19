import Vue from 'vue'
import Router from 'vue-router'
import IndexPage from '@/components/IndexPage'
import AuthorsPage from '@/components/AuthorsPage'
import Author from '@/components/Author'
import PostsPage from '@/components/PostsPage'


Vue.use(Router)

export default new Router({
  routes: [
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
      path: '/authors/:id',
      name: 'Author',
      component: Author,
      props: true,
    },
    {
      path: '/posts',
      name: 'PostsPage',
      component: PostsPage
    },

  ]
})
