// Write your solution in this file!
let employee = {
    name: 'Kinuthia',
    streetAddress: 'P.O BOX 7611-00200, Nairobi'
};

// updateEmployeeWithKeyAndValue()
function updateEmployeeWithKeyAndValue(obj, key, value) {
    let newEmployee = {...employee}
    newEmployee[key] = value;
    return newEmployee;

};

// destructivelyUpdateEmployeeWithKeyAndValue()
function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
    employee[key] = value;
    return employee
};

// deleteFromEmployeeByKey(employee, key)
function deleteFromEmployeeByKey(employee, key) {
    let modifiedEmployee = {...employee}
    delete modifiedEmployee[key]
    return modifiedEmployee
}

// destructivelyDeleteFromEmployeeByKey()
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key]
    return employee
};