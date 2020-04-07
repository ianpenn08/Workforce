let computers = []

export const useComputers = () => computers.slice()

export const getComputers = () => fetch("http://localhost:8088/computers")
    .then(response => response.json())
    .then(data => computers = data)
    