const axios = require('axios');
axios.get('http://www.google.com')
    .then(response => {
        console.log(`Received response: ${response.status}`);
    })
    .catch(error => {
        console.error(`Error fetching data: ${error.message}`);
    });