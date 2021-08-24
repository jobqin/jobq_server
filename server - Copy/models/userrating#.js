import { Sequelize } from 'sequelize';

import sequelize from '../utils/database.js';

const Userrating = sequelize.define('userrating', {
   Eventid: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
   },    
   workerid: {
      type: Sequelize.STRING,
      allowNull: false,
   },
   professionid: {
      type: Sequelize.STRING,
      allowNull: false,
   },
   avgrating: {
      type: Sequelize.INTEGER,
      allowNull: false,
   },
   teamrate: {
      type: Sequelize.INTEGER,
      allowNull: false,
   },
   beharate: {
      type: Sequelize.INTEGER,
      allowNull: false,
   },
   punrate: {
      type: Sequelize.INTEGER,
      allowNull: false,
   },
   hardrate: {
      type: Sequelize.INTEGER,
      allowNull: false,
   },
   review: {
      type: Sequelize.STRING,
      allowNull: false,
   },
   eventerid: {
      type: Sequelize.STRING,
      allowNull: false,
   },
   like: {
      type: Sequelize.INTEGER,
      allowNull: false,
   },
   dislike: {
      type: Sequelize.INTEGER,
      allowNull: false,
   },
   report: {
      type: Sequelize.INTEGER,
      allowNull: true,
   },
   reportid: {
      type: Sequelize.INTEGER,
      allowNull: false,
   },


  
});

export default Userrating;