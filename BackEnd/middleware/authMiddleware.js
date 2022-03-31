import jwt from 'jsonwebtoken'

const authMiddleware = async (req,res, next) =>{
    const bearerToken = req.headers['authorization']

    if(bearerToken){
    const tokenItems = await bearerToken.split(' ')

    const token = tokenItems[1]

    console.log(token)

    jwt.verify(token, 'secret', (err) => {
        console.log(tokenItems)
        if(err){
            res.status(401)
            res.json({err: err})
        }else{
            next()
        }
    })
    }else{
        res.json('No token found')
    }
}

export default authMiddleware