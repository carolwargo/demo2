const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const e = require('cors');
require('dotenv').config(); 


const app = express();

app.use(cors());
app.use(express.json());


mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

.then(() => {   

    console.log("Connected to MongoDB");
}
).catch((err) => {
    console.error("Error connecting to MongoDB:", err);
}
);          

app.get('/', (req, res) => {
    res.send('API is running...');
}       
);

// Define your routes here
/*const userRoutes = require('./routes/userRoutes');  
const postRoutes = require('./routes/postRoutes');
const commentRoutes = require('./routes/commentRoutes');
const likeRoutes = require('./routes/likeRoutes');
const followRoutes = require('./routes/followRoutes'); */


const PORT = process.env.PORT || 5000; // Use the port from environment variables or default to 5000        