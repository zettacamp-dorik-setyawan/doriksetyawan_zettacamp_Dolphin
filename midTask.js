let songList = [
    {
        songTitle: "Banyu_Moto",
        songArtist: "Didi_Kempot",
        songGenre: "Campursari",
        songDuration: "26.45"
    },
    {
        songTitle: "Mungkin_Hari_Ini_Esok_Atau_Nanti",
        songArtist: "Anji",
        songGenre: "Pop",
        songDuration: "26.08"
    },
    {
        songTitle: "Tetap_Dalam_Jiwa",
        songArtist: "Isyana_Sarasvati",
        songGenre: "Pop",
        songDuration: "27.55"
    },
    {
        songTitle: "Pelukku_Untuk Pelikmu",
        songArtist: "Musisi_Jalanan",
        songGenre: "Pop",
        songDuration: "27.46"
    },
    {
        songTitle: "Kasih_Tak_Sampai",
        songArtist: "Padi",
        songGenre: "Pop_Rock",
        songDuration: "28.53"
    },
    {
        songTitle: "Sempurna",
        songArtist: "Andra_and_The_Backbone",
        songGenre: "Rock",
        songDuration: "29.18"
    },
    {
        songTitle: "Kisah Klasik Untuk Masa Depan",
        songArtist: "Sheila_On_7",
        songGenre: "Pop",
        songDuration: "26.11"
    },
    {
        songTitle: "Aku_Bukan_Untukmu",
        songArtist: "Rossa",
        songGenre: "Pop",
        songDuration: "26.43"
    },
    {
        songTitle: "Kemesraan",
        songArtist: "Iwan_Fals",
        songGenre: "Pop",
        songDuration: "27.12"
    },
    {
        songTitle: "Rumah_Kita",
        songArtist: "God_Bless",
        songGenre: "Rock",
        songDuration: "28.07"
    },
    {
        songTitle: "Pergi_Pagi_Pulang_Pagi",
        songArtist: "Armada",
        songGenre: "Pop",
        songDuration: "26.15"
    },
    {
        songTitle: "Jangan_Sampai_Tiga_Kali",
        songArtist: "Pance_Pondaag",
        songGenre: "Pop",
        songDuration: "25.28"
    },
    {
        songTitle: "Terlalu_Manis",
        songArtist: "Slank",
        songGenre: "Rock",
        songDuration: "28.42"
    },
    {
        songTitle: "Kangen",
        songArtist: "Dewa_19",
        songGenre: "Pop_Rock",
        songDuration: "29.36"
    },
    {
        songTitle: "Menunggu_Kamu",
        songArtist: "Anji",
        songGenre: "Pop",
        songDuration: "27.06"
    },
    {
        songTitle: "Seperti_Yang_Kau_Minta",
        songArtist: "Chrisye",
        songGenre: "Pop",
        songDuration: "26.28"
    },
    {
        songTitle: "Takkan_Terganti",
        songArtist: "Marcell",
        songGenre: "Pop",
        songDuration: "28.56"
    },
    {
        songTitle: "Kau_Adalah",
        songArtist: "Isyana_Sarasvati",
        songGenre: "Pop",
        songDuration: "26.08"
    },
    {
        songTitle: "Cinta_Sejati",
        songArtist: "Bunga_Citra_Lestari",
        songGenre: "Pop",
        songDuration: "27.54"
    },{
        songTitle: "Teman_Hidup",
        songArtist: "Tulus",
        songGenre: "Pop",
        songDuration: "25.31"
    }
]
// console.log(songList);

// function songArtistBy (){
//     // mengumpulkan nilai-nilai elemen dalam array menjadi satu
//     // membuat varabel untuk menampung nilai. dengan menggabungkannya 
//     const songsByArtist = songList.reduce((result, song) => {
//         // melakukan pengecekan apakah sudah ada dalam objek
//             if (!result[song.songArtist]) {
//                 result[song.songArtist] = [];
//             }
//             // menambahkan lagu ke dalam array dalam artis yang sesuai
//             result[song.songArtist].push(song);
//                 return result;
                
//             },
//             // nilai awal dari objek result
//             {});

//             console.log("====================================");
//             console.log("Group By Artisit");
//             console.log("====================================");
//             console.log("Artist:", songsByArtist);
            
// }
// songArtistBy();

// ============================================
function songGroupBy (){
    const songByGroup = songList.reduce((result, song )=> {
        if (!result[song.songGenre]){
            result[song.songGenre] = [];
        }
        result[song.songGenre].push(song);
        return result
    },{});
    console.log("Genre : ", songByGroup);
}
songGroupBy();




// function durationToSeconds(duration) {
//     // pisah dengan menggunakkan split kemudian ubah menjadi angka dengan menggunakan map
//     const [minutes, seconds] = duration.split('.').map(Number);
//     return minutes * 60 + seconds;
// }

//   // Menggunakan reduce() untuk menjumlahkan durasi dalam detik
// const totalDurationInSeconds = songList.reduce((total, song) => {
//     const durationInSeconds = durationToSeconds(song.songDuration);
//     return total + durationInSeconds;
// }, 0);

// console.log(totalDurationInSeconds);

// function groupSongsByDuration(songList) {
//     const songsLessThan1Hour = [];
//     let currentDurationInSeconds = 0;

//     //  dua array yang digunakan untuk menyimpan judul lagu dan duration
//     const availableTitles = songList.map(song => song.songTitle);
//     const availableDurations = songList.map(song => song.songDuration);

//     const getRandomArtist = () => {
//         // menggunakan objek spread untuk mengambil nilai acak dari songArtist
//         const artists = [...new Set(songList.map(song => song.songArtist))];
//         //mengambil genre acak dari daftar lagu yang diberikan.
//         const randomIndex = Math.floor(Math.random() * artists.length);
//         return artists[randomIndex];
//     };

//     const getRandomGenre = () => {
//          // menggunakan objek spread dan digabungkan. untuk mengambil nilai acak dari songGenre
//         const genres = [...new Set(songList.map(song => song.songGenre))];
//         //mengambil genre acak dari daftar lagu yang diberikan.
//         const randomIndex = Math.floor(Math.random() * genres.length);
//         return genres[randomIndex];
//     };
//     // loop di jalankan selama durasi dalam detik kurang dari sama dengan 3600
//     while (currentDurationInSeconds <= 3600) {
        
//         const randomIndex = Math.floor(Math.random() * availableTitles.length);
//         const randomTitle = availableTitles[randomIndex];
//         const randomDuration = availableDurations[randomIndex];
//         const durationInSeconds = durationToSeconds(randomDuration);


//         if (currentDurationInSeconds + durationInSeconds <= 3600) {
//             songsLessThan1Hour.push({
//                 songTitle: randomTitle,
//                 songArtist: getRandomArtist(),
//                 songGenre: getRandomGenre(),
//                 songDuration: randomDuration
//             });

//             currentDurationInSeconds += durationInSeconds ;
//         } else {
//             // menghentikan perulangan jika nilali melebihi 3600
//             break; 
//         }
//     }

//     // kondisi apakah nilai lebih dari 7200
//     if (currentDurationInSeconds >= 7200) {
//         return ;
//     }

//     const totalDurationFormatted = `${Math.floor(currentDurationInSeconds / 60)} minutes ${currentDurationInSeconds % 60} seconds`;

//     return {
//         songs: songsLessThan1Hour,
//         totalDuration: totalDurationFormatted
//     };
// }

// const result = groupSongsByDuration(songList);

// if (typeof result === "string") {
//     console.log(result); 
// } else {
//     console.log("Grouped Songs:", result.songs);
//     console.log("Total Duration:", result.totalDuration);
// }

    
        

