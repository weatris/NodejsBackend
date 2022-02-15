import express from "express"
import bodyParser from "body-parser"
import mongoose from "mongoose"
import cors from "cors"
import router from "./routes/routes.js";

const app = express();

app.use(bodyParser.json({limit:"30mb",extended:true}));
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}));
app.use(cors())
const CONNECTION_URL = "mongodb+srv://test_mongo_db:12341234@atris.vrk8o.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
const  PORT = process.env.PORT||5000;
mongoose.connect(CONNECTION_URL).then(() => {});

app.use('/events',router);


app.listen(PORT,() => {
    console.log("Started on PORT : "+PORT);
})

