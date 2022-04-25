const jwt = require("jsonwebtoken");
const User= require("../models/User")

exports.protect = async function (req,res,next) {
let token;

   if  (req.headers.authorization) {
       try{
        token = req.headers.authorization;
        const decoded =jwt.verify(token,process.env.SECRET);
        req.user =await User.findById(decoded.id);
        next();
       } catch (err) {
           res.status(401).json({
               message: "invalid token"
           });
    }
}
if (!token) {
    res.status(401).json({
        message: "You are not authorized"
    });
}
}
