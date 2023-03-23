
const employee = {
    name: "",
    streetAddress: "",
}

function updateEmployeeWithKeyAndValue(obj, key, value) {
    const newObj = { ...obj };
    newObj[key] = value;
    return newObj;
  }
  
  function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
    obj[key] = value; 
    return obj;
  }

  function deleteFromEmployeeByKey(employee, obj, key) {
    const newObjt = { ...obj };
    delete obj.key;
    return newObjt;
  }

  function destructivelyDeleteFromEmployeeByKey(employee, obj, key) {
    const newObj = obj;
    delete obj.key;
    return newObj;
  }












