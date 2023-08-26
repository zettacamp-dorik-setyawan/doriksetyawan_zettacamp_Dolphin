function bookPurchasing(bookDetail, discountPercentage, taxPercentage, amountStock, amountPurchase) { // membuat function bookPurchasing dengan parameter bookDetail, discountPercentage, taxPercentage, amountStock, amountPurchase
    
    const priceOfBook = 30000; // mendeklarasikan harga dari buku

    const amountOfDiscount = priceOfBook * (discountPercentage / 100); // melakukan operasi PERKALIAN untuk mencari nilai tetap dari amountOfDiscount yang di dapat
    const priceAfterDiscount = priceOfBook - amountOfDiscount; // melakukan operasi PENGURANGAN untuk mencari nilai setelah mendapat discount
    const amountOfTax = (priceAfterDiscount * taxPercentage) / 100; // melakukan operasi PEMBAGIAN untuk mencari nilai tax yang harus di bayar
    const priceAfterTaxPurchasing = priceAfterDiscount + amountOfTax; // melakukan operasi PENJUMLAHAN untuk mencari nilai harga setelah di kuranng dengan Tax
    
    const totalPriceBookSolds= priceAfterTaxPurchasing * amountPurchase;
    console.log("=============================================");
        console.log("            Detail Of Books"); // menampilkan pesan Detail Of Books
        console.log("=============================================");
        console.log("Title Of Book : " + bookDetail); // menampilkan pesan Title Of Book dimana nilai diperoleh dari bookDetail
        const bookAvailable = amountStock > 0 ? "Yes It is." : "No."; // boolean menggunakan ternery untuk melakukan pengecekan terhadap jumlah stock
        console.log("Is Book Already :  " + bookAvailable);// menampilkan pesan dimana data diperoleh dari bookAvailable
        console.log("Price Of Book : Rp." + priceOfBook); // menampilkan pesan harga buku data dari priceOfBook
        console.log("Discount : " + discountPercentage + " %"); // menampilkan pesan Discount data diambil dari discountPercentage
        console.log("Tax Of Books : " + taxPercentage + " %"); // menampilkan pesan Tax Of Books data diambil dari taxPercentage
        console.log("Amount Stock : " + amountStock); // menampilkan pesan Amount Stock data diambil dari amountStock
    
    //  misal amount stock = ( 3 ), dan amount purchase = ( 2 )
    for (let i = 1; i <= amountPurchase; i++) { // melakukan loop untuk amountPurchase
        if (amountStock === 0) { // menggunakan strict equality operator (memeriksa nilai dan tipe data, bernilai true jika tipe data dan nilai sama) 
            console.log("Out of Stock.");
            break; // Menghentikan perulangan jika jumlah stok buku sudah habis.
        }
        
        console.log("=============================================");
        console.log("                 PURCHASE   " +i );  // menampilkan pesan dari nilai yang sedang dikerjakan
        console.log("==============================================");
        console.log("Amount Stock : " + amountStock);  // menampilkan pesan dari stok dari nilai amountStock
        console.log("Amount Of Discount : Rp." + amountOfDiscount); //menampilkan pesan discount dari nilai amountOfDiscount
        console.log("Price After Discount : Rp." + priceAfterDiscount); // menampilkan pesan harga setelah discount dari nilai priceAfterDiscount 
        console.log("Amount of Tax : Rp." + amountOfTax); // menampilkan tax dari nilai amountOfTax
        console.log("Price Total After Tax : Rp." + priceAfterTaxPurchasing); // menampilkan pesan dari nilai priceAfterTaxPurchasing
        console.log("=============================================");
        console.log("                 PURCHASE   " +i );  // menampilkan pesan dari nilai yang sedang dikerjakan
        console.log("=============================================");
        amountStock--; // melakukan penguranan stok dengan (decrement operator )
        console.log("Stock Books is " + amountStock + " more books.");
        console.log("=============================================");
        // console.log("Total Price From Book Sold : Rp " + totalPriceBookSolds);
    }
    console.log("=============================================");
    
    if (amountStock > 0) { // Setelah perulangan, cek apakah buku dapat dibeli lagi atau tidak.
        console.log("Books Availabe is : " + amountStock );
    } else {
        console.log("No more books on Stock.");
    }
    console.log("=============================================");
    console.log("Total Price From Book Sold : Rp " + totalPriceBookSolds);
    console.log("=============================================");
}
// parameter bookDetail, discountPercentage, taxPercentage, amountStock, amountPurchase
bookPurchasing("Sumanto the bounty hunter", 10, 1, 2, 2); 





