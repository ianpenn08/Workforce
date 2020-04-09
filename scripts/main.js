import { getEmployees } from "./Employees/employeeDataProvider.js";
import { getComputers } from "./computerDataProvider.js";
import {employeeList} from "./Employees/employeeList.js";
import { getDepartments } from "../Department/departmentDataProvider.js";


getEmployees()
    .then(getComputers)
    .then(getDepartments)
    .then(employeeList)






