const axios = require('axios');

const searchByISBN = (isbn) => {
  axios
    .get(`http://localhost:5000/books/${isbn}`)
    .then((response) => {
      console.log('Book Details:', response.data);
    })
    .catch((error) => {
      console.error('Error fetching book by ISBN:', error.message);
    });
};

// Example Usage
//searchByISBN('123456');
