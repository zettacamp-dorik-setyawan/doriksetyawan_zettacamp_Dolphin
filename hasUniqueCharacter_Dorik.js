function hasUniqueCharacter(str) { // fungsi menerima karakter (str)
    // menggunakan nested loop (perulangan bersarang/ perulangan dalam perulangan)
    for (let i = 0; i < str.length; i++) { //Loop pertama (dengan variabel i) akan mengambil karakter pertama dalam string 
        //Loop kedua (dengan variabel k) akan memeriksa karakter yang ada setelah karakter yang sedang diperiksa dalam loop pertama.
        for (let k = i + 1; k < str.length; k++) {
            if (str[i] == str[k]) {// membandingkan karakter dari str i dan str k
                return false // jika ada karakter sama akan di taampilkan false
            }
        }   
    }
    return true // jika tidak akan di return true
}
console.log(hasUniqueCharacter("abcdeffg")); 
console.log(hasUniqueCharacter("hello"));  