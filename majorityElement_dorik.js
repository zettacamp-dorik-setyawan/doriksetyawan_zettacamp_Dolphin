function majorityElement(nums) {
//mengisi majority dari index ke-0
    let majority = nums[0]; 
    // deklasai look = 1
    let look = 1; 

    // loop dari index ke 1, karena index ke-1  sudah dihitung.
    for (let i = 1; i < nums.length; i++) {
        
        // Jika look bernilai 0, ganti majority dengan elemen saat ini
        // dan reset look ke 1.
        if (look === 0) {
            majority = nums[i];
            look = 1;
            
        }
        // Jika elemen saat ini sama dengan majority, tambahkan look.
        else if (nums[i] === majority) {
            look++;
        }
        // Jika elemen saat ini tidak sama dengan majority, kita kurangi look.
        else{
            look--;
        }
    }

    // Hasilnya adalah elemen mayoritas yang ditemukan.
    return majority;
}

console.log(majorityElement([2 ,3, 3])); // Output: 3 
console.log(majorityElement([2, 2, 1, 1, 2, 3])); // Output: 2 
