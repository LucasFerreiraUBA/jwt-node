import { UserModel } from "../models/user.model.js";
import bcryptjs from 'bcryptjs'

const register = async(req,res) =>{
    try {
        console.log(req.body);
        const {username,email,password} = req.body
        // validaciones ------------------------------|
        if (!username || !email || !password){
            return res.status(400).json({ok:false,msg:"Missing required fields : email, password, username"})
        }
        //----------------------------------------------|
        const user = UserModel.findOneByEmail(email)
        if (!user){
            return res.status(409).json({ok:false,msg:"Email already exists"})
        }
        
        const salt = await bcryptjs.genSalt(10) //salt: pequeños saltos con palabras aleatorias
        const hashedPassword = await bcryptjs.hash(password, salt)
        console.log("hashedPASS:"+hashedPassword);
        const newUser = UserModel.create({email,password:hashedPassword,username})
        return res.status(201).json({ok:true,msg:newUser})
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok:false,
            msg: 'Error server'
        })
    }
}

const login = async(req,res) =>{
    try {
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok:false,
            msg: 'Error server'
        })
    }
}

export const UserController = {
    register,
    login
}