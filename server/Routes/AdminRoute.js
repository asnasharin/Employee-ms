import express from 'express'
import {EmployeeModel} from '../utils/db.js'


const router = express.Router()


router.post('/adminlogin', (req,res) => { 
    console.log(req.body)
    EmployeeModel.create(req.body)
    .then(employees => res.json(employees))
    .catch(err => res.json(err))
    
})

export {router as adminRouter}
