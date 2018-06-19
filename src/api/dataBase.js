// const _posts = [
//   {"id": 1, "title": "post 1", "author": 'max', "content": 'Lorem ipsum dolor sit amet, consectetur.'},
//   {"id": 2, "title": "post 2", "author": 'max', "content": 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis, sunt.'},
//   {"id": 3, "title": "post 3", "author": 'alex', "content": 'Lorem ipsum dolor sit amet, consectetur adipisicing.'},
//   {"id": 4, "title": "post 4", "author": 'alex', "content": 'Lorem ipsum dolor sit amet, consectetur adipisicing.'},
//   {"id": 5, "title": "post 5", "author": 'illya', "content": 'Lorem ipsum dolor sit amet.'},
//   {"id": 6, "title": "post 6", "author": 'illya', "content": 'Lorem ipsum dolor sit amet, consectetur adipisicing. 6'},
//   {"id": 7, "title": "post 7", "author": 'alex', "content": 'Lorem ipsum dolor sit amet, consectetur adipisicing. 7'},
// ]

export default {

  getPosts (callback) {
    // setTimeout(() => {
    //   // console.log('callback: ', callback)
    //   return  callback(_posts);
    // }, 500)

    // Fetch our array of posts from an API
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(function (response) {
        return response.json()
      })
      .then(function (data) {
        // console.log(data)
        return callback(data);
      })

  }
}
