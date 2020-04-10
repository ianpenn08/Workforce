import { useComputers } from "../computerDataProvider.js";
import { useEmployees } from "./employeeDataProvider.js";
import {Employee} from "./employee.js";
import { useDepartments } from "../../Department/departmentDataProvider.js";
import { useLocations } from "../Locations/locationDataProvider.js";
import { useEmployeeCustomers } from "./employeeCustomerProvider.js";
import { useCustomers } from "../../Customer/customerProvider.js";

const contentTarget = document.querySelector(".employee")

const render = employeesToRender => {
    const computers = useComputers()
    const departments = useDepartments()
    const locations = useLocations()
    const employeeCustomers = useEmployeeCustomers()
    const customers = useCustomers()

    contentTarget.innerHTML = employeesToRender.map(
        (employeeObject) => {
            
            const foundComputer = computers.find(
                (computer) => {
                    return computer.id === employeeObject.computerId
                }
            )
            const foundDepartment = departments.find(
                (department) => {
                    return department.id === employeeObject.departmentId
                }
            )
            const foundLocation = locations.find(
                (location) => {
                    return location.id === employeeObject.locationId
                }
            )
            const thisEmployeesCustomerRelationships = employeeCustomers.filter(
                empCustRel => {
                    return employeeObject.id === empCustRel.employeeId
                }
            )

            // For each relationship, convert to corresponding customer object
            const theMatchingCustomers = thisEmployeesCustomerRelationships.map(
                rel => {
                    const customer = customers.find(cust => rel.customerId === cust.id)
                    return customer
                }
            )
            return Employee(employeeObject, foundComputer, foundDepartment, foundLocation, theMatchingCustomers)
        }
    ).join("")
}



export const employeeList = () => {
    const employees = useEmployees()

    render(employees)
}
