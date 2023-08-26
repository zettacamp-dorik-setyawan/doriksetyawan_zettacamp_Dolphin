function bookPurchasing(bookDetail, price, discountPercentage, taxPercentage) {

    
    const discount = (price * discountPercentage) / 100;
    const priceAfterDiscount = price - discount;
    const tax = (priceAfterDiscount * taxPercentage) / 100;
    const priceAfterTax = priceAfterDiscount + tax;
    const bookDetails = {
        Title_Of_Book: bookDetail,
        Normal_Price: price,
        Discount_Percentage: discountPercentage,
        Amount_Of_Discount: discount,
        Price_After_Discount: priceAfterDiscount,
        Tax_Percentage: taxPercentage,
        Amount_Of_Tax: tax,
        Price_After_Tax: priceAfterTax,
    };

    return bookDetails;
}


const bookPurchase = bookPurchasing("Sumanto the Hunter", 100000, 10, 5);
console.log(bookPurchase);