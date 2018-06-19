const _posts = [
  {"id": 1, "title": "1 post", "author": 'max', "content": 'Lorem ipsum dolor sit amet, consectetur.'},
  {"id": 2, "title": "2 post", "author": 'max', "content": 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis, sunt.'},
  {"id": 3, "title": "3 post", "author": 'alex', "content": 'Lorem ipsum dolor sit amet, consectetur adipisicing.'}
]

export default {
  // getPosts (callback) {
    // setTimeout(() => callback(_posts), 100)
  // },
  getPosts () {
    return _posts;
  }
}
