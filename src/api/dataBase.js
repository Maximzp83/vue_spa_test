let _posts = [
  {"id": 1, "title": "post 1", "userId": 1, "views": 0, "body": 'Lorem ipsum dolor sit amet, consectetur.'},
  {"id": 2, "title": "post 2", "userId": 1, "views": 1, "body": 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis, sunt.'},
  {"id": 3, "title": "post 3", "userId": 2, "views": 7, "body": 'Lorem ipsum dolor sit amet, consectetur adipisicing.'},
  {"id": 4, "title": "post 4", "userId": 2, "views": 2, "body": 'Lorem ipsum dolor sit amet, consectetur adipisicing.'},
  {"id": 5, "title": "post 5", "userId": 3, "views": 1, "body": 'Lorem ipsum dolor sit amet.'},
  {"id": 6, "title": "post 6", "userId": 4, "views": 5, "body": 'Lorem ipsum dolor sit amet, consectetur adipisicing. 6'},
  {"id": 7, "title": "post 7", "userId": 3, "views": 2, "body": 'Lorem ipsum dolor sit amet, consectetur adipisicing. 7'},
]

let nextPostId = 8;

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

  },

  addPost (post, callback, callbackError) {
    setTimeout(() => {
      post.id = nextPostId;
      // console.log('post: ', post)
      _posts.push(post);
      // console.log('posts: ', _posts)

      let isAdded =  _posts.some(function(_post) {
        return _post.id == post.id
      })

      if (isAdded) {
        nextPostId++;
        callback();
      } else callbackError();
    }, 100)
  },

  savePost (post, callback, callbackError) {
    setTimeout(() => {
      
      let result = 0;
      // for (var i = 0; i < _posts.length; i++) {
      //   if (_posts[i].id == post.id ) {
      //     _posts[i] = post;
      //     result = 'success'
      //   }
      // }
      _posts = _posts.map(function(_post) {
        if (_post.id == post.id) {
          _post = post;
          result++;
        }
         return _post;
      })   
      // console.log('posts: ', _posts)

      result == 1 ? callback() : callbackError();
      
    }, 100)
  },

  removePost (post, callback, callbackError) {
    setTimeout(() => {
      let result = 0;

      _posts =_posts.filter( function(_post) {
        _post.id === post.id ? result++ : null;
        return _post.id !== post.id
      }) 

      result == 1 ? callback() : callbackError();
      
    }, 500)
  }

}
