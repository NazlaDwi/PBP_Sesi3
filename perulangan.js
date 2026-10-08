const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Masukkan sebuah bilangan: ", (input) => {
    let n = parseInt(input);
    let faktorial = 1;

    for (let i = 1; i <= n; i++) {
        faktorial *= i;
    }

    console.log(`Faktorial dari ${n} adalah ${faktorial}`);

    rl.close();
});