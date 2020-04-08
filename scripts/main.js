import { getEmployees } from "./Employees/employeeDataProvider.js";
import { getComputers } from "./computerDataProvider.js";
import {employeeList} from "./Employees/employeeList.js";


getEmployees()
    .then(getComputers)
    .then(employeeList)






