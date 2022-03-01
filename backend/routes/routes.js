import express from 'express';
import {getAllemployee,insetEmployee,updateEmployee,deleteEmployee,getAllemployee2,getEmployeeById,getEmployeeById2} from "../controllers/RestApi.js"

const router = express.Router();

//route for application A and b
router.get('/appA',getAllemployee);
router.get('/appB',getAllemployee2);
router.post('/', insetEmployee);
router.put(`/:id`, updateEmployee);
router.delete('/:id',deleteEmployee);
router.get(`/:id`, getEmployeeById);
router.get(`/appB/:id`, getEmployeeById2);

export default router;