let employees = []

export const useEmployees = () => employees.slice()


export const getEmployees = () => fetch("http://localhost:8088/employees")
    .then(response => response.json())
    .then(data => employees = data)
