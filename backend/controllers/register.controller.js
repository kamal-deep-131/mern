import User from "../model/user.model.js"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'


const register = async (req, res) => {
    //get all fields
    const { name, email, password } = req.body

    //check all fields
    if (!name || !email || !password) {
        return res.status(400).json({
            success: false,
            message: "Please enter all fields"
        })
    }

    //check if user already exists
    const user = await User.findOne({ email })
    if (user) {
        return res.status(400).json({
            success: false,
            message: "User already exists"
        })
    }

    //hash password
    const hashedPassword = await bcrypt.hash(password, 10)

    //create new user
    const newUser = new User({
        name,
        email,
        password: hashedPassword
    })

    await newUser.save()

    //token genration
    const token = jwt.sign({ userId: newUser._id }, process.env.JWT_SECRET)

    //response
    res.status(201).json({
        success: true,
        message: "User created successfully",
        token,
        user: {
            name: newUser.name,
            email: newUser.email
        }
    })
}

export default register