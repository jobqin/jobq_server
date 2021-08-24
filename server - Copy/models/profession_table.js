import { Sequelize } from 'sequelize';

import sequelize from '../utils/database.js';
import User from '../models/user.js';

const Profession_table = sequelize.define('profession_table', {
   mobileno: {
      type: Sequelize.STRING,
      allowNull: false,
      
   },    
   professions: {
      type: Sequelize.STRING,
      allowNull: false,
   },
   
  
});


Profession_table.belongsTo(User, {foreignKey: 'fk_mobileno', targetKey: 'mobileno'});


export default Profession_table;