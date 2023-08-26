// Write a Node.js function isPrime(n) that takes an integer n as an argument and returns true if n is a prime number and false otherwise.

function isPrime(n) {
    if (n <= 1) { // Bilangan 1 bukan bilangan prima maka jika n = 1 maka akan di kembalikan yakni false
        return false; 
    }
    for( let i = 2; i < n;i++){ //looping dimulai dari 2 karena bilangan prima adalah bilangan yang lebih dari 1 
                            // perualangan akan terus berjalan jika kondisi nya benar

        if ( n % i == 0){ // dilakukan pengoperasian yakni modulo(mengembalikan sisa dari pembagian bilangan bulat)
            return false; // dan di lakukan perulangan selama kondisinya
        }
    }
    return true;
}
  console.log(isPrime(4)); // jika bilangan primer maka akan di tampilkan true, jika tidak false
  console.log(isPrime(43)); // jika bilangan primer maka akan di tampilkan true, jika tidak false