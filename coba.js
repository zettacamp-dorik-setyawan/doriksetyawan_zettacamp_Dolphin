const a = 10;//10 dalam biner 00000110
const b = 1;//6 dalam biner   00000001

// TRY BETWISE membandingkan dua angka bit ( 0 dan 1 )
//===============================================================
// AND
console.log( "USING AND : "+ (a & b)); //Membandingkan dua angka bit per bit dan menghasilkan 1 jika keduanya adalah 1.
// OR
console.log( "USING OR : "+ (a | b)); // Membandingkan dua angka bit per bit dan menghasilkan 1 jika salah satu atau keduanya adalah 1.
// XOR
console.log( "USING XOR : "+ (a ^ b)); // Membandingkan dua angka bit per bit dan menghasilkan 1 jika hanya satu bit adalah 1 (eksklusif OR).
// NOT
console.log( "USING NOT ==> "+ "NOT A : " + (~ a)+ " " + "NOT B : "+ (~ b)); //  Mengubah setiap bit (dengan berlawanan) menjadi kebalikannya (0 menjadi 1 dan sebaliknya). 
//jika nilai positif maka +1 lalu di balik menjadi minus, jika data negative maka di kurang 1 kemudian di balik datanya
// LEFT SHIFT <<
console.log( "USING LEFT SHIFT : "+ (a << b)); // setiap 1 pergeseran nilai ke kiri maka akan di kali 2
// RIGHT SHIFT >>
console.log( "USING RIGHT SHIFT : "+ (a >> b)); // setiap 1 penggeseran nilai ke kanan maka akan di bagi 2 nilai dan digit paling kanan di hapus