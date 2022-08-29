const user = require('../models/user');


const signup = async (req, res) => {
    try {


        const { name, email, password } = req.body;

        const userData = await user.create({
            name,
            email,
            password,

        });

        return res.status(201).json({
            message: 'User created successfully',
            user: userData
        });

    } catch (error) {
        res.send(error);
    }
};

module.exports = { signup };