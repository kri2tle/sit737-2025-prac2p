
// importing required modules 
const express = require('express');
const path = require('path');
//instance of express application  as app 
const app = express();
const PORT = 3000;

// Serve static files from the "public" directory
app.use(express.static('public'));

// Define a route for the homepage
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

//starting the server 
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
