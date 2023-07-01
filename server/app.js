const express=require('express')
const mongoose=require('mongoose')
const app=express()
const cors=require('cors');
mongoose.connect("mongodb+srv://srivastavaaditya0522:aditya@cluster0.u6brcxf.mongodb.net/").then(()=>{console.log("done")})
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

app.listen(5000);