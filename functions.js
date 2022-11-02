const axios = require('axios');

const functions = {
  add: (num1, num2) => num1 + num2,
  isNull: () => null,
  checkValue: x => x,
  createUser: () => {
    const user = [
      { firstName: 'Dave', lastName: 'Tan' },
      { firstName: 'Peter', lastName: 'Lim' },
    ]
    
    return user;
  },
  compileCode: () => {
    throw new Error("This is an error statement");
  },
  fetchUser: () =>
  axios
    .get('https://jsonplaceholder.typicode.com/users/1')
    .then(res => res.data)
    .catch(err => 'error'),
  fetchData: async (id) => {
    const results = await axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`);
    console.log(results);
    return results.data;
  }
}

module.exports = functions;

// testing
console.log(functions.add(10, 10));
functions.fetchData(1);