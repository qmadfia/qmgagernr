// Database NIK dan Nama Karyawan
const employeeDatabase = {
    '1234': 'Rizki',
    '5678': 'Andi Pratama',
    '9012': 'Budi Santoso',
    '3456': 'Siti Nurhaliza',
    '7890': 'Dewi Lestari',
    '1111': 'Ahmad Fauzi',
    '2222': 'Rina Kusuma',
    '3333': 'Joko Widodo',
    '4444': 'Lina Marlina',
    '5555': 'Eko Prasetyo',
    '6666': 'Maya Sari',
    '7777': 'Rudi Hermawan',
    '8888': 'Fitri Handayani',
    '9999': 'Agus Setiawan',
    '0000': 'Dian Safitri',
    '1122': 'Bambang Tri',
    '2233': 'Nurul Hidayah',
    '3344': 'Faisal Rahman',
    '4455': 'Sri Wahyuni',
    '5566': 'Hendra Gunawan',
    '6677': 'Kartika Putri',
    '7788': 'Irfan Hakim',
    '8899': 'Yuni Shara',
    '9900': 'Roni Surya',
    '0011': 'Wulan Guritno'
};

// Fungsi untuk mendapatkan nama berdasarkan NIK
function getEmployeeName(nik) {
    return employeeDatabase[nik] || '';
}

// Fungsi untuk validasi NIK
function isValidNIK(nik) {
    return employeeDatabase.hasOwnProperty(nik);
}

// Fungsi untuk mendapatkan semua NIK
function getAllNIKs() {
    return Object.keys(employeeDatabase);
}

// Fungsi untuk mendapatkan jumlah karyawan
function getTotalEmployees() {
    return Object.keys(employeeDatabase).length;
}
