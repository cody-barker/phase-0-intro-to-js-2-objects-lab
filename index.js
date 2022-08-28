const employee = {
    name: "Cody Barker",
    streetAddress: "11577 Williams Hwy",
};

function updateEmployeeWithKeyAndValue(obj, key, value) {
    const updatedEmployee = {...obj};

    updatedEmployee[key] = value;

    return updatedEmployee;
};

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;

    return employee;
}

function deleteFromEmployeeByKey(obj) {
    const secondUpdatedEmployee = {...obj};

    delete secondUpdatedEmployee.name;

    return secondUpdatedEmployee;
}

function destructivelyDeleteFromEmployeeByKey() {
    delete employee.name;

    return employee;
}