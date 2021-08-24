import { Sequelize } from 'sequelize';

import sequelize from '../utils/database.js';

const Jobsposted_table = sequelize.define('jobsposted', {
   jobid: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
   },    
   reporterid: {
      type: Sequelize.INTEGER,
      allowNull: false,
   },
   position: {
      type: Sequelize.STRING,
      allowNull: false,
   },
   localarea: {
      type: Sequelize.STRING,
      allowNull: false,
   },
   address: {
      type: Sequelize.STRING,
      allowNull: false,
   },
   mapcoordinates: {
      type: Sequelize.STRING,
      allowNull: false,
   },
   image: {
      type: Sequelize.STRING,
      allowNull: false,
   },
   providefood: {
      type: Sequelize.STRING,
      allowNull: false,
   },
   contractorwork: {
      type: Sequelize.STRING,
      allowNull: false,
   },
   date: {
      type: Sequelize.DATE,
      allowNull: false,
   },
  
});

export default Jobsposted_table;