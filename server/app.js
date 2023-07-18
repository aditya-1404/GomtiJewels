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
    origin: ['http://localhost:3000'],
    credentials: true,
}));
app.use('/',require("./routes/add"))
app.use('/admin',require("./routes/admin"))

app.listen(process.env.PORT);