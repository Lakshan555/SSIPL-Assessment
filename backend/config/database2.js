//create database2 connection
import {Sequelize} from "sequelize";

const db2 = new Sequelize('database2','root','Sql@12345',{
    host:"localhost",
    dialect:"mysql"
});

export default db2;