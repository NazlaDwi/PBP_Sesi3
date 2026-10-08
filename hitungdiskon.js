const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let totalBelanja = 0;

console.log("=== DAFTAR BARANG ===");
console.log("1. Bantal    =  75000");
console.log("2. Hoodie    = 300000");
console.log("3. Jam       = 150000");
console.log("4. Sepatu    = 250000");
console.log("5. Case HP   = 75000");

function pilihBarang(nomor) {
    return new Promise((resolve) => {
        rl.question(`\nMasukkan pilihan barang ke-${nomor} (1-5): `, (pilihan) => {
            let harga = 0;

            switch (parseInt(pilihan)) {
                case 1:
                    harga = 75000;
                    break;
                case 2:
                    harga = 300000;
                    break;
                case 3:
                    harga = 150000;
                    break;
                case 4:
                    harga = 250000;
                    break;
                case 5:
                    harga = 75000;
                    break;
                default:
                    console.log("Pilihan tidak valid!");
                    harga = 0;
            }

            totalBelanja += harga;
            resolve();
        });
    });
}

async function hitungBelanja() {
    await pilihBarang(1);
    await pilihBarang(2);
    await pilihBarang(3);

    let totalDiskon = 0;

    if (totalBelanja >= 300000) {
        totalDiskon = totalBelanja * 0.10;
    } else if (totalBelanja >= 100000) {
        totalDiskon = totalBelanja * 0.05;
    } else if (totalBelanja >= 50000) {
        totalDiskon = totalBelanja * 0.03;
    }

    let totalBayar = totalBelanja - totalDiskon;

    console.log("\n=== HASIL PEMBELIAN ===");

    if (totalDiskon > 0) {
        console.log(`Total Belanja : Rp${totalBelanja}`);
        console.log(`Diskon        : Rp${totalDiskon}`);
        console.log(`Total Bayar   : Rp${totalBayar}`);
    } else {
        console.log(`Total Belanja : Rp${totalBelanja}`);
        console.log("Anda tidak mendapat diskon karena tidak mencapai minimum pembelanjaan.");
    }

    rl.close();
}

hitungBelanja();