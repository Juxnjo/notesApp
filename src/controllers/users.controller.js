import User from "../models/user.model.js";

export const getUsers = async (req, res) => {
    const users = await User.find()
    res.json( users )
}

export const createUser = async (req, res) => {
    const { username} = req.body

    const newUser = new User( {
        username
    } )
    const savedUser = await newUser.save()
    res.json( savedUser )
}

export const deleteUser = async (req, res) => {
    const user = await User.findByIdAndDelete( req.params.id )
    if ( !user ) return res.status( 404 ).json( { message: 'User not found' } )
    return res.sendStatus(204)
}