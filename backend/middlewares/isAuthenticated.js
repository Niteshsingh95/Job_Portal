import jwt from "jsonwebtoken";
import { User } from "../models/user_model.js";

const isAuthenticated = async (req, res, next) => {
    try {
        const token = req.cookies.token;
        if (!token) {
            return res.status(401).json({
                message: "User not authenticated",
                success: false,
            })
        }
        const decode = await jwt.verify(token, process.env.SECRET_KEY);
         const user = await User.findById(decode.userId);
        if(!user){
            return res.status(401).json({
                message:"Invalid token  and user not found",
                success:false
            })
        };
        req.id = decode.userId;
        req.role=user.role;
        next();
    } catch (error) {
        console.log(error);
         return res.status(401).json({
        message: "Invalid or expired token.",
        success: false
    });
    }
}
export default isAuthenticated;