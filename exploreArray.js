// Array indices
// ===================================

// const years=[];
// console.log(years["2"] !== years["2"]);
// ===================================

// Array methods and empty slots
// ===================================

//array concat (Menggabungkan array)
// ===================================
// const array1 = ['a', 'b', 'c'];
// const array2 = ['d', 'e', 'f'];
// const array3 = array1.concat(array2);
// console.log(array3);

// ================================

const dueDates = []; // Initialize an array to store due dates
const currentDate = new Date();
currentDate.setMonth(currentDate.getMonth() + 1); // Start from next month
const dueDateString = currentDate.toLocaleDateString();
dueDates.push("Due Date for Month " + i + ": " + dueDateString);
currentDate.setMonth(currentDate.getMonth() + 1);
return dueDates; // Return the array of due dates
const dueDatesArray = bookPurchasing("Sumanto the bounty hunter", 10, 1, 2, 2, 2); // Example wi
console.log(dueDatesArray); // Display the array of due dates