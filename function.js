function bookPurchasing(bookDetail,discountPercentage,taxPercentage) { // membuat function dengan nama bookPurchasing kemudian memberikan parameter

    console.log("=============================================");
    console.log("Detail Of Books"); 
    console.log("=============================================");

    console.log("Title Of Book : " + bookDetail); // untuk menampilkan isi dari bookDetail, data dari bookDetail di isi di parameter

    const priceOfBook = 30000; // mendeklarasikan harga buku dengan variabel const dan merupakan PENUGASAN

    console.log("Price Of Book : Rp."+ priceOfBook);

    const bookAvailable = true? "Yes It is.":"No."; //digunakan untuk melakukan pengecekan data (output type Bollean)
    console.log("Is There Still A Discount : " + bookAvailable); 

    console.log("Discount : "+discountPercentage+ " %"); // menampilkan nilai dari parameter discount percentage
    console.log("Tax Of Books : " + taxPercentage + " %"); // menampilkan nilai dari tax percentage
    console.log("=============================================");

    const amountOfDiscount = priceOfBook * (discountPercentage / 100); // melakukan operasi PERKALIAN untuk mencari nilai tetap dari discount yang di dapat
    console.log("Amount Of Discount : Rp."+ amountOfDiscount);

    const priceAfterDiscount = priceOfBook - amountOfDiscount; // melakukan operasi PENGURANGAN untuk mencari nilai setelah mendapat discount
    console.log("Price After Discount : Rp."+ priceAfterDiscount);

    const amountOfTax = (priceAfterDiscount * taxPercentage) / 100; // melakukan operasi PEMBAGIAN untuk mencari nilai tax yang harus di bayar
    console.log("Amount of Tax : Rp."+ amountOfTax);

    const priceAfterTaxPurchasing = priceAfterDiscount + amountOfTax ; // melakukan operasi PENJUMLAHAN untuk mencari nilai harga setelah di kuranng dengan Tax
    console.log("Price Book After Tax : Rp."+ priceAfterTaxPurchasing);
    console.log("=============================================");
}
bookPurchasing("Sumanto the bounty hunter",10,9); // untuk mengisi parameter dari function bookPurchasing (bookDetail,discountPercentage,taxPercentage)


