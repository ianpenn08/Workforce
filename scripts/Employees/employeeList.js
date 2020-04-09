import { useComputers } from "../computerDataProvider.js";
import { useEmployees } from "./employeeDataProvider.js";
import {Employee} from "./employee.js";
import { useDepartments } from "../../Department/departmentDataProvider.js";
import { useLocations } from "../Locations/locationDataProvider.js";

const contentTarget = document.querySelector(".employee")

const render = employeesToRender => {
    const computers = useComputers()
    const departments = useDepartments()
    const locations = useLocations()

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
            return Employee(employeeObject, foundComputer, foundDepartment, foundLocation)
        }
    ).join("")
}

export const employeeList = () => {
    const employees = useEmployees()

    render(employees)
}


