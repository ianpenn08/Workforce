import { getEmployees } from "./Employees/employeeDataProvider";
import { getComputers } from "./computerDataProvider";
import employeeList from "./Employees/employeeList";


getEmployees()
    .then(getComputers)
    .then(employeeList)






