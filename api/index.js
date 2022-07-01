const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRoute = require('./routes/auth');
const userRoute = require('./routes/user');
const movieRoute = require('./routes/movies');
const listRoute = require('./routes/list');
const helmet = require("helmet");
const morgan = require("morgan");

const app = express();

dotenv.config();

mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true, 
}).then(()=>console.log("Database conneected")).catch((err)=>console.log(err))


app.use(helmet());
app.use(morgan("combined"));
app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/movies", movieRoute);
app.use("/api/lists", listRoute);

app.listen(8800,()=>{
    console.log("Server is runnning on on 8800 ")
})