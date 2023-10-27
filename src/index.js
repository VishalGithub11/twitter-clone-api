import express, { json } from "express";
import path from 'path';
import userRoutes from "./routes/userRoutes.js"
import tweetRoutes from "./routes/tweetRoutes.js"

const app = express();
app.use(json()) //to parse all the data in json
const PORT = 8080;
app.use("/user", userRoutes)
app.use("/tweet", tweetRoutes)


app.get("/", (req, res)=>{
    res.send("Hello, it's me.")
})


app.listen(PORT, ()=>{
    console.log(`server is running on port ${PORT}`);
})