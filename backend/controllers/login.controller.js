import User from "../model/user.model.js"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const login = async (req, res) => {
    //get all fields
    const { email, password } = req.body

    //check all fields
    if (!email || !password) {
        return res.status(400).json({
            success: false,
            message: "Please enter all fields"
        })
    }

    //check if user already exists
    const user = await User.findOne({ email })
    if (!user) {
        return res.status(400).json({
            success: false,
            message: "User does not exist"
        })
    }

    //check password
    const isMatch = await bcrypt.compare(password, user.password)
    if (!isMatch) {
        return res.status(400).json({
            success: false,
            message: "Invalid credentials"
        })
    }

    //token genration
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET)

    //response
    res.status(200).json({
        success: true,
        message: "User logged in successfully",
        token,
        user: {
            name: user.name,
            email: user.email
        }
    })
}

export default login