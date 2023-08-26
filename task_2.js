let bookFav1 = 'Harry porter';
bookFav1="Sumanto "; //update value from bookFav  TASK 1a =============
const bookFav3 = "Hunter on the darkness";
const bookFav1_Price = 800000; // create 2 variable //matikan jika di assigning
const bookFav3_Price = 300000; // create 2 variable //matikan jika di assigning
console.log("Name of book : "+bookFav1+" " +bookFav1_Price);   // task 1=====
console.log("Name of book : " +bookFav3 + " "+bookFav3_Price); // task 1=====
console.log("======================================");

// TRY WITH assigning and destructing 2a ====================================================
// let bookValuePrice={
    
// }
// bookValuePrice.price1 = 500000;
// bookValuePrice.price2 = 300000;
// const bookValuePriceIs=bookValuePrice.price1>bookValuePrice.price2? bookFav1:bookFav3 //ternary
// console.log("The Higher Price is "+ bookValuePriceIs); 

//compare task 2a
// ==============================================
const thePriceHigh = bookFav1_Price > bookFav3_Price ? bookFav1 : bookFav3 // ternary
console.log("The Higher Price is "+ thePriceHigh); // ternary

// average Task 2b
let averagePrice = (bookFav1_Price+bookFav3_Price)/2;
console.log( "Average price is : " + averagePrice);

// // Ternary Task 2c

let AveragePriceFavBook = averagePrice >= 500000 ? "Expensive" : "Cheap"
console.log( "It Is "+ AveragePriceFavBook);