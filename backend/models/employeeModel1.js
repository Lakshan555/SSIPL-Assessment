import { Sequelize } from "sequelize";
import db from  "../config/database1.js";

const {DataTypes} = Sequelize;

const Employee = db.define('employee',{
    name:{
        type:DataTypes.STRING
    },
    email:{
        type:DataTypes.STRING
    },
    mobile:{
        type:DataTypes.INTEGER
    }
},{
    
 freezeTableName:true
});
export default Employee;