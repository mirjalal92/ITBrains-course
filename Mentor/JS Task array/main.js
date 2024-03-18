// ===== TASK 2 =====

let arr = ["Azerbaijan", "Georgia", "Turkey"];

let replacedValue = ["Azerbaijan", "Georgia"]

let newVal = ["01AZE", "02GEO"]

// let result = ["01AZE", "02GEO", "03TUR"];

let newArr = arr.map( item => item === replacedValue ? newVal : item);
console.log(newArr);