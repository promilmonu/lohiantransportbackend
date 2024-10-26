const UserModel= require("../models/user")
exports.registerUserService = async (user)=>{
    const {name, email, password, truckRego, mobile, licenceNumber} =user


    const userPayload = new UserModel({
        name,
        email, 
        password, 
        truckRego,
        mobile, 
        licenceNumber,


    })

    const saveUser= await userPayload.save()
    return saveUser;
}