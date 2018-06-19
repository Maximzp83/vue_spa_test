// const _authors = [
//   {"userId": 1, "name": 'max', "lastname": 'sidorov'},
//   {"userId": 2, "name": 'illya', "lastname": 'ivanov'},
//   {"userId": 3, "name": 'alex', "lastname": 'petrov'}
// ]

export default {
  getAuthors (callback) {
    // setTimeout(() => callback(_authors), 500)

    fetch('https://jsonplaceholder.typicode.com/users')
      .then(function (response) {
        return response.json()
      })
      .then(function (data) {
        // console.log(data)
        return callback(data);
      })
  }
  
}
