import jwt from 'jsonwebtoken'
const authMiddleWare = async (req, res, next) => {
    const { authorization } = req.headers
    if (!authorization) {
        return res.status(401).json('Not autorization')
    }
    const [type, token] = authorization.split(' ')

    if (type !== 'Bearer') {
        return res.status(400).json('Token type uncorrect')
    }
    try {
        req.user = await jwt.verify(token, process.env.SECRET_JWT_KEY)

        next()
    } catch (error) {
        return res.status(401).json('Token uncorrect')

    }
}

export default authMiddleWare