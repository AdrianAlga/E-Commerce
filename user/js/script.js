var counter = 0;

// Fungsi untuk menambah jumlah pesanan
function tambahPesanan() {
  counter++;
  document.getElementById("counter").innerHTML = counter;
}

// Fungsi untuk mengurangi jumlah pesanan
function kurangiPesanan() {
  if (counter > 0) {
    counter--;
    document.getElementById("counter").innerHTML = counter;
  }
}

// Menambahkan event listener pada tombol +
document.getElementById("plusBtn").addEventListener("click", tambahPesanan);

// Menambahkan event listener pada tombol -
document.getElementById("minusBtn").addEventListener("click", kurangiPesanan);

// -------------------------------------------------------------------------------
// --------------------------------WAKTU----------------------------------------
// -------------------------------------------------------------------------------
// Waktu Sekarang
var today = new Date();
var tanggal = today.toLocaleDateString();

// Menampilkan tanggal pada elemen dengan id 'tanggal'
document.getElementById("tanggal").innerHTML = "Tanggal: " + tanggal
