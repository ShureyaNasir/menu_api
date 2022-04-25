const User = require("../models/usersSchema");
const bcrypt = require("bcryptjs");
const validate = require("../config/validator");
const { generateToken } = require("../Utils/generateToken");
//create a new user



const createUser =async (req, res) => {

    const { username, email , password } = req.body;
    const valid = await validate({ username, email, password });

    if (valid) {
        const hashedPassword = await bcrypt.hash(valid.password, 10);
        const user = await User.create({
            username,
            email,
            password: hashedPassword,
        });
        if (username)

        res.status(201).json({
            name: username.name,
            email: username.email,
            id: username._id,
            token:generateToken(username._id),
         });

    } else {
        res.status(400).json({
            message:"invalid data"
        });
    }
};
module.exports = {
    createUser,
};


