const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("Masukkan total belanja: ", function(harga) {
    harga = parseInt(harga);

    let diskon = 0;

    if (harga >= 50000) {
        diskon = harga * 0.03; // Diskon 3%
    } else if (harga >= 100000) {
        diskon = harga * 0.05; // Diskon 5%
    } else if (harga >= 300000) {
        diskon = harga * 0.10; // Diskon 10%
    } else {
        diskon = 0;
    }

    console.log("Total harga: Rp" + harga);

    if (diskon > 0) {
        console.log("Diskon: Rp" + diskon);
        console.log("Total bayar: Rp" + (harga - diskon));
    } else {
        console.log("Tidak mendapatkan diskon");
        console.log("Total bayar: Rp" + harga);
    }

    rl.close();
});