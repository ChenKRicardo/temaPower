module.exports = (req,res,next) =>{
    if(req.method === "POST" && req.path ==='/login'){
        if(req.body.username ==='1374575582@qq.com' && req.body.password === 'ck200072'){
            return res.status(200).json({
                user:{
                    token:'123',
                }
            })
        }else{
            return res.status(400).json({
                msg:"账号或密码错误",
            })
        }
    }
    next()
}