import User from '../Models/User.model.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
const usersControllers = {
    getUsers: async (req, res) => {
        try {
            const users = await User.find()
            res.json(users)
        } catch (error) {
            res.json(error)
        }

    },
    addUser: async (req, res) => {

        const hash = await bcrypt.hash(req.body.password, Number(process.env.BCRYPT_ROUNDES))
        const user = await User.create({
            login: req.body.login,
            password: hash
        })
        res.json(user)
    },
    login: async (req, res) => {
        const { login, password } = req.body
        const candidate = await User.findOne({ login })

        if (!candidate) {
            return res.status(401).json('Login uncorrect')
        }
        const valid = await bcrypt.compare(password, candidate.password)

        if (!valid) {
            res.status(401).json("Uncorrect password")
        }

        const payload = {
            id: candidate._id,
        }
        const token = await jwt.sign(payload, process.env.SECRET_JWT_KEY, {
            expiresIn: '24h'
        })
        res.json({token, id: payload.id})
    }
}
export default usersControllers