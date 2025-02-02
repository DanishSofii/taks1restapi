const express = require("express")
const {connectToMongoDb} = require("./connection")
const deviceRouter = require("./routes/device")
require("dotenv").config()

const app = express();
const PORT = 5000;

connectToMongoDb(process.env.MONGO_URI)

app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use("/",deviceRouter)

app.listen(PORT,()=>{console.log(`server started at http://localhost:${PORT}/`)})