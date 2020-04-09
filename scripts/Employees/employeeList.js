import { useComputers } from "../computerDataProvider.js";
import { useEmployees } from "./employeeDataProvider.js";
import {Employee} from "./employee.js";
import { useDepartments } from "../../Department/departmentDataProvider.js";

const contentTarget = document.querySelector(".employee")

const render = employeesToRender => {
    const computers = useComputers()
    const departments = useDepartments()

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
            return Employee(employeeObject, foundComputer, foundDepartment)
        }
    ).join("")
}

export const employeeList = () => {
    const employees = useEmployees()

    render(employees)
}


