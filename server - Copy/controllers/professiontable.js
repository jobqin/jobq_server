//import bcrypt from 'bcryptjs';

//import jwt from 'jsonwebtoken';

//import Profileuser from '../models/user.js';
import Profession_table from '../models/Profession_table.js';


const Profession_insert = (req, res, next) => {

    return Profession_table.create(({
        mobileno: req.body.mobileno,
        professions: req.body.professions,
        
    }))
    .then(() => {
        res.status(200).json({message: "user created"});
    })
    .catch(err => {
        console.log(err);
        res.status(502).json({message: "error while creating the user"});
    });
  
};


const Profession_retrive = (req, res, next) => {
    // checks if email already exists
    Profession_insert.Sensors.findAll({
        where: {mobileno: req.body.mobileno}
    }).success(function (sensors) {
            var nodedata = JSON.parse(JSON.stringify(node)); // this is my trick
            nodedata.sensors = sensors;
            nodesensors.push(nodedata);
            response.json(nodesensors);
    });
};









export { Profession_insert,Profession_retrive };