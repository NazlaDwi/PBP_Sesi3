const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const LARI = 60 / 5;
const PUSHUP = 200 / 30;
const PLANK = 5;

let totalKalori = 0;

rl.question("Masukkan jumlah aktivitas: ", (jumlah) => {

    let aktivitas = parseInt(jumlah);
    let hitung = 0;

    function inputAktivitas() {
        rl.question("Masukkan jenis olahraga (lari/pushup/plank): ", (olahraga) => {
            rl.question("Masukkan waktu olahraga (menit): ", (waktu) => {

                const menit = parseInt(waktu);
                let kalori = 0;

                if (olahraga == "lari") {
                    kalori = menit * LARI;

                    if (menit > 0) {
                        console.log("Kalori terbakar:", kalori);
                    }

                } else {
                    if (olahraga == "pushup") {
                        kalori = menit * PUSHUP;

                        if (menit > 0) {
                            console.log("Kalori terbakar:", kalori);
                        }

                    } else {
                        if (olahraga == "plank") {
                            kalori = menit * PLANK;

                            if (menit > 0) {
                                console.log("Kalori terbakar:", kalori);
                            }
                        }
                    }
                }

                totalKalori = totalKalori + kalori;
                hitung++;

                if (hitung < aktivitas) {
                    inputAktivitas();
                } else {
                    console.log("Total kalori terbakar:", totalKalori);
                    rl.close();
                }
            });
        });
    }

    inputAktivitas();
});