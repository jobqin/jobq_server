import { Sequelize } from 'sequelize';

import sequelize from '../utils/database.js';

const User = sequelize.define('user', {
   userid: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      unique: true,
      primaryKey: true,
   },   
   mobileno: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
     
   },    
   name: {
      type: Sequelize.STRING,
      allowNull: false,
   },
   dob: {
      type: Sequelize.STRING,
      allowNull: false,
   },
   gender: {
      type: Sequelize.STRING,
      allowNull: false,
   },
   categoryrole: {
      type: Sequelize.STRING,
      allowNull: false,
   },
});

export default User;