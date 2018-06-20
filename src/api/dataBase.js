const _posts = [
  {"id": 1, "title": "post 1", "userId": 1, "views": 0, "body": 'Lorem ipsum dolor sit amet, consectetur.'},
  {"id": 2, "title": "post 2", "userId": 1, "views": 1, "body": 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis, sunt.'},
  {"id": 3, "title": "post 3", "userId": 2, "views": 8, "body": 'Lorem ipsum dolor sit amet, consectetur adipisicing.'},
  {"id": 4, "title": "post 4", "userId": 2, "views": 2, "body": 'Lorem ipsum dolor sit amet, consectetur adipisicing.'},
  {"id": 5, "title": "post 5", "userId": 3, "views": 1, "body": 'Lorem ipsum dolor sit amet.'},
  {"id": 6, "title": "post 6", "userId": 4, "views": 5, "body": 'Lorem ipsum dolor sit amet, consectetur adipisicing. 6'},
  {"id": 7, "title": "post 7", "userId": 3, "views": 2, "body": 'Lorem ipsum dolor sit amet, consectetur adipisicing. 7'},
]

export default {

  getPosts (callback) {
    setTimeout(() => {
      // console.log('callback: ', callback)
      return  callback(_posts);
    }, 500)

    // Fetch our array of posts from an API
    // setTimeout(() => {
    //   // console.log('posts')
    //   fetch('https://jsonplaceholder.typicode.com/posts')
    //     .then(function (response) {
    //       return response.json()
    //     })
    //     .then(function (data) {
    //       // console.log(data)
    //       return callback(data);
    //     })
    // }, 1000)

  }
}
