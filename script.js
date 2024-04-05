// Array buku
let buku = [
    {"nama": "sherlock", "jumlah": 2},
    {"nama": "lupin", "jumlah": 2},
    {"nama": "aladin", "jumlah": 2}
];

// Fungsi untuk mengecek peminjaman buku
function cekPeminjaman() {
    let jumlah = parseInt(document.getElementById('jumlah').value);
    let pilihan = document.getElementById('pilihan').value;

    if (isNaN(jumlah) || jumlah <= 0) {
        alert("Masukkan jumlah buku yang valid.");
        return;
    }

    let bukuDitemukan = false;
    let jumlahBukuTersedia = 0;

    // Mencari buku yang dipilih dalam array buku
    for (let i = 0; i < buku.length; i++) {
        if (buku[i].nama === pilihan) {
            bukuDitemukan = true;
            jumlahBukuTersedia = buku[i].jumlah;
            break;
        }
    }

    if (!bukuDitemukan) {
        alert("Buku tidak ditemukan dalam daftar.");
    } else {
        if (jumlah > jumlahBukuTersedia) {
            alert("Jumlah buku tidak tersedia.");
        } else {
            alert("Silahkan ambil buku Anda.");
        }
    }
}