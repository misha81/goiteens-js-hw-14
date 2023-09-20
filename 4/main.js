function countTotalSalary(employees) {
    let totalSalary = 0;
  
    for (const employee in employees) {
      if (employees.hasOwnProperty(employee)) {
        totalSalary += employees[employee];
      }
    }
  
    return totalSalary;
}
  
const salary = {
    mango: 2000,
    poly: 2200,
    ajax: 1800,
    kiwi: 3000
};
  
console.log(countTotalSalary(salary));