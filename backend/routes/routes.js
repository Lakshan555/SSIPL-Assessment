import express from 'express';
import {getAllemployee,insetEmployee,updateEmployee,deleteEmployee} from "../controllers/RestApi.js"

const router = express.Router();

router.get('/',getAllemployee);
router.post('/', insetEmployee);
router.put(`/:id`, updateEmployee);
router.delete('/:id',deleteEmployee);

export default router;