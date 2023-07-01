function auth(req,res,next){
    try{
    const t = req.headers.cookie.split(";").find(c => c.trim().startsWith("token="));
    const token=t.substring(7,)
    console.log(token)
    if(!token) res.status(401).json({err:"Unauthorized"})
    next();
    }catch(err){
        console.error(err);
        res.status(401).json({ errorMessage: "Unauthorized" });
    }
}


module.exports=auth