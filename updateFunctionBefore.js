function bookPurchasing(bookDetail, discountPercentage, taxPercentage, amountStock, amountPurchase, creditDuration) { // membuat function bookPurchasing dengan parameter bookDetail, discountPercentage, taxPercentage, amountStock, amountPurchase
    
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
    console.log("Stock This Books : " + amountStock); // menampilkan pesan Amount Stock data diambil dari amountStock 
    
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
        console.log(" ");
        amountStock--; // melakukan penguranan stok dengan (decrement operator )
        console.log("Stock Books is " + amountStock + " more .");
        console.log("=============================================");
    }
    console.log("=============================================");
    
    if (amountStock > 0) { // Setelah perulangan, cek apakah buku dapat dibeli lagi atau tidak.
        console.log("Books Availabe is : " + amountStock );
    } else {
        console.log("No more books on Stock.");
    }
    console.log("=============================================");
    console.log("Total Price From Book Sold : Rp " + totalPriceBookSolds); // menampilkan nilai dari jumlah buku yang terjual
    console.log("=============================================");



    const dueDates = []; // mendeklarasikan array kosong untuk menampung nilai dalam dueDates
    const currentDate = new Date(); // membuat objek yang berisi tanggal dan waktu sekarang
    currentDate.setMonth(currentDate.getMonth() + 1); // set nilai dari currenDate ke satubulan kedepan pada tanggal sekarang
    for (let i = 1; i <= creditDuration; i++){ //melakukan looping creditDuration sebanyak nilai dari creditDuration
        const dueDateString = currentDate.toLocaleDateString();//mengubah objek currentDate yang berisi tanggal dan waktu menjadi bentuk string yang hanya berisi tanggal dalam format lokal yang sesuai dengan preferensi pengguna.
        // const dueDateString = currentDate.toISOString();//mengubah tanggal sekarang menjadi string dengan format ISO 
        dueDates.push("Due Date for Month " + i + ": " + dueDateString);// menambahkan pesan ke dalam array
        currentDate.setMonth(currentDate.getMonth() + 1);//set nilai dari currenDate ke satubulan kedepan pada tanggal sekarang
    }
    console.log("Credit Duration : " + creditDuration + " Month");// menampilkan pesan 
            // for each : mengiterasi melalui setiap elemennya.
    // dueDates.forEach(function (dates) { // setelah looping selesai akan menjalankan fungsi callback pada setiap elemen dalam array, kemudian mencetak array yang ada ke dalam konsol
    //     console.log(dates);
    // });

    for(const dates of dueDates){
        console.log(dates);
    }

    return dueDates; //menggembalikan nilai dari dueDates
}
// parameter bookDetail, discountPercentage, taxPercentage, amountStock, amountPurchase, creditDuration
bookPurchasing("Sumanto the bounty hunter", 10, 1, 3, 1, 3); // ==========
// console.log(arrayString);







