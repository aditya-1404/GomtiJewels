const express=require('express')
const router=express.Router();
const auth=require("../middleware/auth")
router.use(express.urlencoded({extended:true}))
const productdata=require('../model/product')
const multer=require('multer')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads')
    },
    filename: function (req, file, cb) {
      cb(null,req.body.id + '.jpg')
    }
  })
  
  const upload = multer({ storage: storage })

router.post('/',auth,upload.single('product'),(req,res)=>{
    console.log(req.body)
    res.send('Product Added')
    const data=new productdata(req.body)
    data.save();
})
router.get('/get',async (req,res)=>{
    const data=await productdata.find()
    res.json(data)
    console.log(data)
})

module.exports=router;