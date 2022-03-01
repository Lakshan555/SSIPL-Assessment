import express from 'express';
import {getAllemployee,insetEmployee,updateEmployee,deleteEmployee,getAllemployee2,getEmployeeById} from "../controllers/RestApi.js"

const router = express.Router();

//route for application A and b
router.get('/appA',getAllemployee);
router.get('/appB',getAllemployee2);
router.post('/', insetEmployee);
router.put(`/:id`, updateEmployee);
router.delete('/:id',deleteEmployee);
router.get(`/:id`, getEmployeeById);

export default router;