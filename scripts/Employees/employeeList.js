import { useComputers } from "../computerDataProvider";
import { useEmployees } from "./employeeDataProvider";
import { useemployeeComputerData } from "../employeeComputerProvider";
import Employee from "./employee";

const contentTarget = document.querySelector(".employee")

export const employeeList = () => {
    const Computers = useComputers()
    const Employees = useEmployees()
    const employeeComputerData = useemployeeComputerData()

    const render = () =>{
        contentTarget.innerHTML = Employees.map(employee => {
            let relatedEmployees = employeeComputerData.filter(pc => pc.employeesId === employee.id)

            relatedEmployees = relatedEmployees.map(rc => {
                return Computers.find(computer => computer.id === rc.computerId)
            })

            const html = Employee(employee, relatedEmployees)
            return html
        }).join("")
    }
    render()
}

export default employeeList

