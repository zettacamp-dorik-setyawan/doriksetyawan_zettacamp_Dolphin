// membuat function bookPurchasing dengan parameter bookDetail, discountPercentage, taxPercentage, amountStock, amountPurchase
function bookPurchasing(bookDetail, discountPercentage, taxPercentage, amountStock, amountPurchase, creditDuration) { 
    // mendeklarasikan harga dari buku
    const priceOfBook = 90000; 
    // melakukan operasi PERKALIAN untuk mencari nilai tetap dari amountOfDiscount yang di dapat
    const amountOfDiscount = priceOfBook * (discountPercentage / 100); 
    // melakukan operasi PENGURANGAN untuk mencari nilai setelah mendapat discount
    const priceAfterDiscount = priceOfBook - amountOfDiscount; 
    // melakukan operasi PEMBAGIAN untuk mencari nilai tax yang harus di bayar
    const amountOfTax = (priceAfterDiscount * taxPercentage) / 100; 
    // melakukan operasi PENJUMLAHAN untuk mencari nilai harga setelah di kuranng dengan Tax
    const priceAfterTaxPurchasing = priceAfterDiscount + amountOfTax; 
    const totalPriceBookSolds= priceAfterTaxPurchasing * amountPurchase;
    const amountPayment=true;

    console.log("=============================================");
    console.log("            Detail Of Books"); 
    console.log("=============================================");
    // menampilkan pesan Title Of Book dimana nilai diperoleh dari bookDetail
    console.log("Title Of Book : " + bookDetail); 
    // boolean menggunakan ternery untuk melakukan pengecekan terhadap jumlah stock
    const bookAvailable = amountStock > 0 ? "Yes It is." : "No."; 
    // menampilkan pesan dimana data diperoleh dari bookAvailable
    console.log("Is Book Already :  " + bookAvailable);
    // menampilkan pesan harga buku data dari priceOfBook
    console.log("Price Of Book : Rp." + priceOfBook); 
    // menampilkan pesan Discount data diambil dari discountPercentage
    console.log("Discount : " + discountPercentage + " %"); 
    // menampilkan pesan Tax Of Books data diambil dari taxPercentage
    console.log("Tax Of Books : " + taxPercentage + " %"); 
    // menampilkan pesan Amount Stock data diambil dari amountStock 
    console.log("Stock This Books : " + amountStock); 
    
    // melakukan loop untuk amountPurchase
   for (let i = 1; i <= amountPurchase; i++) { 
        // menggunakan strict equality operator (memeriksa nilai dan tipe data, bernilai true jika tipe data dan nilai sama)
        if (amountStock === 0) {  
            console.log("Out of Stock.");
            // Menghentikan perulangan jika jumlah stok buku sudah habis.
            break; 
        }
        
        console.log("=============================================");
        console.log("                 PURCHASE   " +i );  
        console.log("==============================================");
        // menampilkan pesan dari stok dari nilai amountStock
        console.log("Amount Stock : " + amountStock);  
        //menampilkan pesan discount dari nilai amountOfDiscount
        console.log("Amount Of Discount : Rp." + amountOfDiscount); 
        // menampilkan pesan harga setelah discount dari nilai priceAfterDiscount 
        console.log("Price After Discount : Rp." + priceAfterDiscount); 
        // menampilkan tax dari nilai amountOfTax
        console.log("Amount of Tax : Rp." + amountOfTax); 
        // menampilkan pesan dari nilai priceAfterTaxPurchasing
        console.log("Price Total After Tax : Rp." + priceAfterTaxPurchasing); 
        console.log("=============================================");
        // menampilkan pesan dari nilai yang sedang dikerjakan
        console.log("                 PURCHASE   " +i );  
        console.log("=============================================");
        console.log(" ");
        // melakukan penguranan stok dengan (decrement operator )
        amountStock--; 
        console.log("Stock Books is " + amountStock + " more .");
        console.log("=============================================");
    }
    console.log("=============================================");
    // Setelah perulangan, cek apakah buku dapat dibeli lagi atau tidak.
    if (amountStock > 0) { 
        console.log("Books Availabe is : " + amountStock );
    } else {
        console.log("No more books on Stock.");
    }
    console.log("=============================================");
    // menampilkan nilai dari jumlah buku yang terjual
    console.log("Total Price From Book Sold : Rp " + totalPriceBookSolds); 
    console.log("=============================================");

    if(priceOfBook>100000){
        console.log('mahal');
    }else{
        console.log('murah');
    }
    
    // mendeklarasikan array kosong untuk menampung nilai dalam dueDates
    const dueDates = []; 
    // membuat objek yang berisi tanggal dan waktu sekarang
    const currentDate = new Date(); 
    // set nilai dari currenDate ke satubulan kedepan pada tanggal sekarang
    currentDate.setMonth(currentDate.getMonth() + 1); 
    
    

    
    if (amountPayment) { 

        const amountPrice = totalPriceBookSolds / creditDuration; 
        //Array.from => digunakan untuk membuat array baru dari objek yang dapat diiterasi dengan atau tanpa transformasi tambahan.
        // argumen 
        // mengembalikan objek atau nilai yang akan menjadi elemen dalam array yang sedang dibuat.
        const creditDue = Array.from({ length: creditDuration }, (_, i) => {// (pemetaan) ,
            //deklarasi dueDateString dengan nilai dari tanggal yang ada di region
            const dueDateString = currentDate.toLocaleDateString(); 
            // set nilai dari currenDate ke satubulan kedepan pada tanggal sekarang
            currentDate.setMonth(currentDate.getMonth() + 1); 
            //digunakan untuk membuat objek yang akan ditambahkan ke dalam array creditDue
            return {   
                
                credit:i+1, 
                dueDatePayment:dueDateString,
                amountPayment:amountPrice,
            };
        });
        
        

        console.log("Credit Duration : " + creditDuration + " Month");
        console.log("Total Amount of Payment :");
        console.log(creditDue);
        console.log("=============================================");
        console.log("Total price from all credit : "+  + amountPrice*creditDuration);
        
    }
    

    return dueDates;
    
}


//Parameter bookDetail, discountPercentage, taxPercentage, amountStock, amountPurchase, creditDuration
bookPurchasing("Sumanto the bounty hunter", 10, 1, 0, 0,1);
