const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

// Serve static files from the 'public' directory


// Parse URL-encoded bodies (as sent by HTML forms)


// Serve the first HTML page listing tasks and providing a form to create one


// Serve the second HTML page showing details of a task and providing a form to mark it done or delete it


// Echo back the form submission for the first HTML page


// Echo back the form submission for the second HTML page


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
