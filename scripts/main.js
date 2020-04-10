import { getEmployees } from "./Employees/employeeDataProvider.js";
import { getComputers } from "./computerDataProvider.js";
import {employeeList} from "./Employees/employeeList.js";
import { getDepartments } from "../Department/departmentDataProvider.js";
import { getLocations } from "./Locations/locationDataProvider.js";
import { getCustomers } from "../Customer/customerProvider.js";
import { getEmployeeCustomers } from "./Employees/employeeCustomerProvider.js";


getEmployees()
    .then(getComputers)
    .then(getDepartments)
    .then(getLocations)
    .then(getCustomers)
    .then(getEmployeeCustomers)
    .then(employeeList)






