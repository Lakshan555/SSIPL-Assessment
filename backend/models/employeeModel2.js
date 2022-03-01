import { Sequelize } from "sequelize";
import db2 from  "../config/database2.js";

const {DataTypes} = Sequelize;

const Employee = db2.define('employee',{
    name:{
        type:DataTypes.STRING
    },
    email:{
        type:DataTypes.STRING
    },
    mobile:{
        type:DataTypes.INTEGER
    },
    address:{
        type:DataTypes.STRING
    }
},{
    
freezeTableName:true
});
export default Employee;