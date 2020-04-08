import { useComputers } from "../computerDataProvider.js";
import { useEmployees } from "./employeeDataProvider.js";
import {Employee} from "./employee.js";

const contentTarget = document.querySelector(".employee")

const render = employeesToRender => {
    const computers = useComputers()

    contentTarget.innerHTML = employeesToRender.map(
        (employeeObject) => {
            
            const foundComputer = computers.find(
                (computer) => {
                    return computer.id === employeeObject.computerId
                }
            )
        
            return Employee(employeeObject, foundComputer)
        }
    ).join("")
}

export const employeeList = () => {
    const employees = useEmployees()

    render(employees)
}


