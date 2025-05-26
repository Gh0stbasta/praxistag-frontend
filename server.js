const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.static('frontend'));

// Basic route
app.get('/', (req, res) => {
    res.send('Express server is running!');
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});