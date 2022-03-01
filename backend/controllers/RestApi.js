
import Application_A from '../models/employeeModel1.js'; //import employeemodel for Application A
import Application_B from '../models/employeeModel2.js' //import employeemodel for Application B

//get all employe deatils in database1
export const getAllemployee = async(req,res) => {

    try{
        const employee = await Application_A.findAll();
        res.json(employee);
    }catch(error){
        res.json({message: error.message});
    }

}

//insert employee deatils to database1 & database2
export const insetEmployee = async(req,res) => {
    try{
        await Application_A.create(req.body);
        await Application_B.create(req.body);
        res.json({"message":"Inserted"});
    }catch(error){
        res.json({message: error.message});
    }

}

//getEmployee by id
export const getEmployeeById = async(req,res) => {
    try{
        const employee = await Application_A.findAll({
            where:{
                id:req.params.id
            }
        });
        res.json(employee[0]);
    }catch(error){
        res.json({message: error.message});
    }

}

//update employee deatils to database1  & database2
export const updateEmployee = async(req,res) => {
    try{
        await Application_A.update(req.body,{
            where:{
                id:req.params.id
            }
        });
        await Application_B.update(req.body,{
            where:{
                id:req.params.id
            }
        });
        res.json({"message":"updated"});
    }catch(error){
        res.json({message: error.message});
    }

}

//Delete employee deatils
export const deleteEmployee = async(req,res) => {
    try{
        await Application_A.destroy({
            where:{
                id:req.params.id
            }
        });
        res.json({"message":"deleted"});
    }catch(error){
        res.json({message: error.message});
    }

}

//=========================================================

//get all employe deatils in database2
export const getAllemployee2 = async(req,res) => {

    try{
        const employee = await Application_B.findAll();
        res.json(employee);
    }catch(error){
        res.json({message: error.message});
    }

}