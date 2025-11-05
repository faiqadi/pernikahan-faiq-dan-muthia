export const data = {
    bride: {
        L: {
            id: 1,
            name: 'Faiq Adi Wibowo S.Kom',
            child: 'Putra pertama',
            father: 'Sujito S.Pd. M.Si.',
            mother: 'Sri Purwatiningsih A.Md',
            image: './src/assets/images/cowo.jpeg',
            location: '- Blora, Jawa Tengah -'
        },
        P: {
            id: 2,
            name: 'Muthia Syafitri Amni S.I.Kom',
            child: 'Putri pertama',
            father: 'Abrahamsyah (alm)',
            mother: 'Zuliarni',
            image: './src/assets/images/cewe.jpeg',
            location: '- Batusangkar, Sumatera Barat -'
        },

        couple: './src/assets/images/couple.png'
    },

    time: {
        marriage: {
            year: '2025',
            month: 'Desember',
            date: '06',
            day: 'Sabtu',
            hours: {
                start: '08.15',
                finish: 'Selesai'
            }
        },
        reception: {
            year: '2025',
            month: 'Desember',
            date: '07',
            day: 'Minggu',
            hours: {
                start: '10.00',
                finish: '13.00'
            }
        },
        address: 'Graha Nusantara - Jl. Mr. Iskandar No.95, Beran, Mlangsen, Kec. Blora, Kabupaten Blora, Jawa Tengah'
    },

    // Story timeline content for the Story section
    story: [
        {
            id: 1,
            title: 'Pertemuan',
            date: '2023',
            description: 'Tidak ada yang kebetulan di dunia ini. Semua sudah tersusun dengan sangat rapi oleh Sang Maha Kuasa, kita tidak bisa memilih kepada siapa kita akan jatuh cinta. Kami bertemu pertama kalinya tanpa sengaja pada tahun 2023 di alun-alun kidul kota Yogyakarta.',
            image: './src/assets/images/2.jpeg'
        },
        {
            id: 2,
            title: 'Pendekatan',
            date: '-',
            description: 'Katanya cinta dapat tumbuh dengan kebersamaan, seiring berjalannya waktu, kami semakin dekat. Memang tidak ada kata pacaran tapi Tuhan mentakdirkan kita untuk bersama.',
            image: './src/assets/images/3.jpeg'
        },
        {
            id: 3,
            title: 'Lamaran',
            date: '8 September 2025',
            description: 'Kehendak-Nya menuntun kami pada sebuah pertemuan yang tak pernah disangka hingga akhirnya pada 20 Agustus 2023 membawa kami pada sebuah ikatan yang diridhoi-Nya.',
            image: './src/assets/images/1.jpeg'
        },
        {
            id: 4,
            title: 'Pernikahan',
            date: '6 Desember 2025',
            description: 'Bukan karena bertemu lalu berjodoh, tapi karena berjodohlah kami bisa bertemu. Kami memutuskan untuk mengikrarkan janji suci pernikahan pada 24 Februari 2024.',
            image: './src/assets/images/6.jpg'
        }
    ],

    storyQuote: {
        text: 'Apa yang menjadi takdirmu akan menemukan jalannya untuk menemukannmu.',
        author: 'Ali Bin Abi Thalib'
    },

    link: {
        calendar: 'https://calendar.app.google/9dwoP3owH9eQjqqq7',
        map: 'https://maps.app.goo.gl/mEpp5ZpLekQGZdVM6',
    },

    galeri: [
        {
            id: 1,
            image: './src/assets/images/1.jpeg'
        },
        {
            id: 2,
            image: './src/assets/images/2.jpeg'
        },
        {
            id: 3,
            image: './src/assets/images/3.jpeg'
        },
        {
            id: 4,
            image: './src/assets/images/4.jpg'
        },
        {
            id: 5,
            image: './src/assets/images/5.jpg'
        },
        {
            id: 6,
            image: './src/assets/images/6.jpg'
        }
    ],

    bank: [
        {
            id: 1,
            name: 'Faiq Adi Wibowo',
            icon: './src/assets/images/bca.png',
            rekening: '1960458091'
        },
        {
            id: 2,
            name: 'Muthia Syafitri Amni',
            icon: './src/assets/images/bri.png',
            rekening: '300701024174535'
        },
    ],

    audio: './src/assets/audio/wedding.mp3',

    api: 'https://script.google.com/macros/s/AKfycbz0PfcLdG3UXR6l6NTUeNzX-Grac2kwnGGEUkgqByhxGHiMw-_c4JF2R-aM5Iw62dECsQ/exec',

    navbar: [
        {
            id: 1,
            teks: 'Home',
            icon: 'bx bxs-home-heart',
            path: '#home',
        },
        {
            id: 2,
            teks: 'Mempelai',
            icon: 'bx bxs-group',
            path: '#bride',
        },
        {
            id: 3,
            teks: 'Tanggal',
            icon: 'bx bxs-calendar-check',
            path: '#time',
        },
        {
            id: 4,
            teks: 'Galeri',
            icon: 'bx bxs-photo-album',
            path: '#galeri',
        },
        {
            id: 5,
            teks: 'Ucapan',
            icon: 'bx bxs-message-rounded-dots',
            path: '#wishas',
        },
    ],
}
