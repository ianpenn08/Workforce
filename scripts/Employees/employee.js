const Employee = (employees, computers) => {
    return `
    <section class="employee">
        <header>
            <h2>${employees.firstName}${employees.lastName}</h2>
        </header>
        <div> 
            <ol>
                ${
                    computers.map(computer => `<li>${computer.model}${computer.year}</li>`.join("") )
                }
            </ol>
        </div>
    </section>    
    `
}
export default Employee