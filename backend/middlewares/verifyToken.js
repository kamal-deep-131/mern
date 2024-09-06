import jwt from 'jsonwebtoken'

const verifyToken = (req, res, next) => {
    const { token } = req.body
    //is token undefined or null
    if (!token) {
        return res.status(400).json({
            success: false,
            message: "Token is not defined. Try to login again"
        })
    }

    //verify token 
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) {
            return res.status(400).json({
                success: false,
                message: "Invalid token. Try to login again"
            })
        }

        req.body = { ...req.body, user }
        next()
    })
}

export default verifyToken
