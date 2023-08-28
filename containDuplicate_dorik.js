/**
 * write a function that returns true if there's duplicate in the array, and false otherwise.
 * SEE EXAMPLE BELLOW!
 * 
 * 
Example
console.log(containsDuplicate([1, 2, 3, 1])); // Output: true
console.log(containsDuplicate([1, 2, 3, 4])); // Output: false
console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])); // Output: true

 * Determines if the array contains any duplicate value.

 * @param {number[]} nums - The input array of integers.
 * @return {boolean} Returns true if the array contains any duplicate value, false otherwise.
 */
function containsDuplicate(nums) { // fungsi untuk cek nilai dari nums
    const duplicate = {}; // menampung data objek ke dalam variabel duplikat
    for (const number of nums) {  // melakukan iterasi satu per satu, dan pada setiap iterasi, dan di simpan pada variable baru
        if (duplicate[number]) { // melakukan pemeriksaan apakah nilai sudah ada dalam objek
            return true; // menampilkan true, jika nilai ada dalam objek
        }
        duplicate[number] = true; // jika nilai belum ada dalam objek maka akan di simpan nilai baru ke dalam objek
    }
    return false; // menampilkan false
}

// Example usage:
console.log(containsDuplicate([1, 2, 3, 1])); // Output: true
console.log(containsDuplicate([1, 2, 3, 4])); // Output: false
console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])); // Output: true