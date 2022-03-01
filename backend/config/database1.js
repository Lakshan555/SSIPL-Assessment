//create database1 connection
import {Sequelize} from "sequelize";

const db1 = new Sequelize('database1','root','Sql@12345',{
    host:"localhost",
    dialect:"mysql"
});

export default db1;