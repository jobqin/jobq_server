//import bcrypt from 'bcryptjs';

//import jwt from 'jsonwebtoken';

//import Profileuser from '../models/user.js';
import User from '../models/user.js';


const Usertable_insert = (req, res, next) => {
     // checks if email already exists
     User.findOne({ where : {
        mobileno: req.body.mobileno, 
    }})
    .then(dbUser => {
        if (dbUser) {
            return res.status(409).json({message: "this number already registered in jobq"});
        } else {
            // password hash
           
                    return User.create(({
                        mobileno: req.body.mobileno,
                        name: req.body.name,
                        dob: req.body.dob,
                        gender: req.body.gender,
                        categoryrole: req.body.categoryrole,
                    }))
                    .then(() => {
                        res.status(200).json({message: "user created"});
                    })
                    .catch(err => {
                        console.log(err);
                        res.status(502).json({message: "error while creating the user"});
                    });

        };
    })
    .catch(err => {
        console.log('error', err);
    });
  
};



export { Usertable_insert };