require('dotenv').config()
const express = require("express")
const app = express();
const port = 5000;
const authRoute = require("./router/auth-router")
const connectDb = require("./utils/db");
const cors = require('cors');

// cors policy
const corsOptions = {
    origin : "http://localhost:5173",
    method: "GET",
    credentials: true,
}

app.use(cors(corsOptions));

app.use(express.json())

app.use('/api/auth', authRoute);


connectDb().then(() => {
    app.listen(port, () => {
        console.log(`server is listening on http://localhost:${port}`);
    });
})