
import {mongoose} from 'mongoose'

const EmployeeSchema = new mongoose.Schema({
    name:String,
    email:String,
    password:String
})


const EmployeeModel = mongoose.model("employes", EmployeeSchema)

  
export { EmployeeModel };
  

