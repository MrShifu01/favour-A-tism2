// Import the Express framework
const express = require('express');
const path = require('path')

// Import CORS
const cors = require('cors');

// Import the router module from './router.js'
const { router } = require('./router.js');

// Import Helmet
const helmet = require('helmet');

// Create an instance of the Express application
const app = express();

// Use helmet
app.use(helmet());

// app.use(cors())

// // Specify the allowed origin
// const allowedOrigin = 'https://favour-a-tism2-9fjh.vercel.app/'; // Replace with your desired site URL

// // CORS options
// const corsOptions = {
//   origin: allowedOrigin,
// };

// Enable CORS for all routes
app.use(cors({origin: ['https://favour-a-tism2-9fjh.vercel.app/', 'http://localhost:3000']}));

// Set the port to either the value specified in the environment variable "PORT" or 8000
const PORT = process.env.PORT || 8000;

// Use the router for handling routes starting with "/api"
app.use('/api', router);

// Start the server and listen on the specified port
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
