const employees = [
    { id: 1, name: 'John Doe', age: 30, department: 'IT', salary: 50000},
    { id: 2, name: 'Alice Smith', age: 28, department: 'HR', salary: 45000 },
    { id: 3, name: 'Bob Johnson', age: 35, department: 'Finance', salary: 60000 },
    { id: 4, name: 'Diksha Parab', age: 22, department: 'IT', salary: 25000},
    { id: 5, name: 'Varada Dali', age: 23, department: 'Finance', salary: 24000 },
];

function displayEmployees() {
    const totalEmployees = employees
      .map(employee => `<p>${employee.id}: ${employee.name} - ${employee.department} - ${employee.salary}</p>`)
      .join('');
    document.getElementById('employeeDetails').innerHTML = totalEmployees;
}

function calculateTotalSalaries() {
    const totalSalaries = employees.reduce((acc, employee) => acc + employee.salary, 0);
    alert(`Total Salaries: ${totalSalaries}`);
}
function displayHREmployees() {
    const hrEmployees = employees.filter(employee => employee.department === 'HR');
    const hrEmployeesDisplay = hrEmployees.map((employee, index) => `<p>${employee.id}: ${employee.name}: ${employee.name} - ${employee.department} - ${employee.salary}</p>`).join('');
    document.getElementById('employeeDetails').innerHTML = hrEmployeesDisplay;
}

function displayITEmployees() {
    const itEmployees = employees.filter(employee => employee.department === 'IT');
    const itEmployeesDisplay = itEmployees.map((employee, index) => `<p>${employee.id}: ${employee.name}: ${employee.name} - ${employee.department} - ${employee.salary}</p>`).join('');
    document.getElementById('employeeDetails').innerHTML = itEmployeesDisplay;
}

function displayFinanceEmployees() {
    const fnEmployees = employees.filter(employee => employee.department === 'Finance');
    const fnEmployeesDisplay = fnEmployees.map((employee, index) => `<p>${employee.id}: ${employee.name}: ${employee.name} - ${employee.department} - ${employee.salary}</p>`).join('');
    document.getElementById('employeeDetails').innerHTML = fnEmployeesDisplay;
}

function findEmployeeById(employeeId) {
      const foundEmployee = employees.find(employee => employee.id === employeeId);
      if (foundEmployee) {
      document.getElementById('employeeDetails').innerHTML =`<p>${foundEmployee.id}: ${foundEmployee.name}: ${foundEmployee.name} - ${foundEmployee.department} - ${foundEmployee.salary}</p>`;
      }
      else{
        document.getElementById('employeeDetails').innerHTML = 'no employee has been found with this ID';
       }
   }
