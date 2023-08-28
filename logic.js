function containsDuplicate(numb) { // fungsi menerima number ()
    // menggunakan nested loop (perulangan bersarang/ perulangan dalam perulangan)
    for (let i = 0; i < numb.length; i++) { //Loop pertama (dengan variabel i) akan mengambil karakter pertama 
        //Loop kedua (dengan variabel k) akan memeriksa karakter yang ada setelah karakter yang sedang diperiksa dalam loop pertama.
        for (let k = i + 1; k < numb.length; k++) {
            if (numb[i] === numb[k]) {// membandingkan karakter dari numb i dan numb k
                return true // jika ada karakter sama akan di taampilkan true
            }
        }   
    }
    return false // jika tidak akan di return false
}
console.log(containsDuplicate([1, 2, 3, 1])); // Output: true
console.log(containsDuplicate([1, 2, 3, 4])); // Output: false
console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])); // Output: true