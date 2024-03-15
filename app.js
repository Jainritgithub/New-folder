require("dotenv").config({path: "./.env"})
const express = require("express");
const app = express();

//db connection
// require('./models/dbconfig').dbconnection();


//routes
const userRouter = require('./routes/userRoute.js')

//logger 
app.use(require('morgan')("tiny"))

// body-parser
app.use(express.json());
app.use(express.urlencoded({extended: true}));




app.use('/api/user', userRouter);

//server
app.listen(process.env.PORT, ()=>{
    console.log(`The Server is running on PORT ${process.env.PORT}`);
})
