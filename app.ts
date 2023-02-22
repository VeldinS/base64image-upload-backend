const express = require('express');
const mongoose = require('mongoose')
let bodyParser = require("body-parser");
// @ts-ignore
import cors from "cors";

//IMPORTS FOR ROUTES
const uploadRoutes = require('./uploads/uploads-routes')

const app = express();

//HANDLING 'CORS' ERROR
app.use((req: any, res: { setHeader: (arg0: string, arg1: string) => void; }, next: () => void)=>{     //FOR CORS ERROR IN BROWSER WHEN SENDING DATA
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');
    next();
})

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', uploadRoutes);

//CONNECTING TO DATABASE
mongoose
    .connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.kai58d9.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`)
    .then(() => {
        app.listen(5000);
        console.log('Connected to database')
    })
    .catch((err: any) => {
        console.log(err);
    });

