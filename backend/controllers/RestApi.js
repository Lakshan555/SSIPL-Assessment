
import Employee from '../models/employeeModel1.js'

//get all employe deatils in database1
export const getAllemployee = async(req,res) => {

    try{
        const employee = await Employee.findAll();
        res.json(employee);
    }catch(error){
        res.json({message: error.message});
    }

}

//insert employee deatils to database1
export const insetEmployee = async(req,res) => {
    try{
        await Employee.create(req.body);
        res.json({"message":"Inserted"});
    }catch(error){
        res.json({message: error.message});
    }

}

//update employee deatils to database1
export const updateEmployee = async(req,res) => {
    try{
        await Employee.update(req.body,{
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
        await Employee.destroy({
            where:{
                id:req.params.id
            }
        });
        res.json({"message":"deleted"});
    }catch(error){
        res.json({message: error.message});
    }

}
