import User from "../models/userModel";

let userServices = {}

userServices.getAUser = async (req, res) => {
    try{
        const id = req.params.id

        const user =  await User.findByPk(id)
    
        return res.json(user)
    }catch(error){
       return res.json(error)
    }

}

userServices.createUser = async (req, res) => {
    try{
        const {name, email, company, password} = req.body

        const newUser =await  User.create({
            name,
            email,
            company,
            password
        })
    
        return res.json(newUser)
    }catch(error){
        return res.json(error)
    }
   
}

userServices.updateUser = async (req, res) => {
    try{
        const {name, email, company} = req.body
        const id = req.params.id

        const user =  await User.findByPk(id)

        name ? user.name = name : user.name = user.name
        email ? user.email = email : user.email = user.email
        company ? user.company = company : user.company = user.company

        user.save()
        return res.json(user)
    }catch(error){
       return res.json(error)
    }

}

userServices.deleteUser = async (req, res) => {
    try{
        const id = req.params.id

        const user =  await User.findByPk(id)

         user.deleted_at = new Date()
        user.save()
    
        return res.json(user)
    }catch(error){
       return res.json(error)
    }

}