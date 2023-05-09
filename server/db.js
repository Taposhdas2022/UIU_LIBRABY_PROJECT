const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.mongo_uri).then(
    () => {
        console.log('Connected to the User database');
    }
)
mongoose.connect(process.env.mongo_URI).then(
    () => {
        console.log('Connected to the Library database');
    }
)
.catch((err)=>{
    console.log(`Could not connect to db ` + err);
})