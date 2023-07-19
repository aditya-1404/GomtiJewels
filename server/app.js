const express=require('express')
const mongoose=require('mongoose')
const dotenv=require('dotenv')
const app=express()
const cors=require('cors');
dotenv.config();
mongoose.connect(process.env.LINK).then(()=>{console.log("done")})
app.use(express.urlencoded({extended:true}))
app.use(express.json())
const path=require('path')

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));


app.use(cors({
    origin: true,
    credentials: true,
    exposedHeaders: ["set-cookie"],
}));
// app.use(cors())
app.use('/',require("./routes/add"))
app.use('/admin',require("./routes/admin"))

app.listen(process.env.PORT || 5000);
