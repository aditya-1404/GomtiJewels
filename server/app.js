const express=require('express')
const mongoose=require('mongoose')
const dotenv=require('dotenv')
const app=express()
const cors=require('cors');
var cookies = require("cookie-parser");

app.use(cookies());
dotenv.config();
mongoose.connect(process.env.LINK).then(()=>{console.log("done")})
app.use(express.urlencoded({extended:true}))
app.use(express.json())
const path=require('path')

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
// app.use((req, res, next) => {
//     res.setHeader("Access-Control-Allow-Origin", process.env.DOMAIN_URL);
//     res.setHeader("Access-Control-Allow-Credentials", true);
//     res.setHeader("Access-Control-Allow-Headers", "Content-Type");
//     res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
//     next();
//   });
app.set("trust proxy", 1)
const corsOptions = {
    origin: "https://gomti-jewels-tq9c.vercel.app", // Allow requests only from this origin
    credentials: true, // Allow credentials (cookies) to be sent
    exposedHeaders: ["set-cookie"], // Expose the set-cookie header
};
// app.use(cors())
app.use('/',require("./routes/add"))
app.use('/admin',require("./routes/admin"))

app.listen(process.env.PORT || 5000);
