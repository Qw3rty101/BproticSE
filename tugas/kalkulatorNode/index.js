const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function tambah(x, y) {
  return x + y;
}  

function kurang(x, y) {
  return x - y;
}

function kali(x, y) {
  return x * y;
}

function bagi(x, y) {
  if (y === 0) {
    return "Tidak dapat dibagi dengan nol!";
  }
  
  return x / y;
}

function calculator() {
  rl.question('Masukkan angka pertama: ', (num1) => {
    rl.question('Masukkan angka kedua: ', (num2) => {
      rl.question('Pilih operasi (tambah, kurang, kali, bagi): ', (operator) => {
        const number1 = parseFloat(num1);
        const number2 = parseFloat(num2);

        switch (operator) {
          case 'tambah':
            console.log(`Hasil: ${tambah(number1, number2)}`);
            break;
          case 'kurang':
            console.log(`Hasil: ${kurang(number1, number2)}`);
            break;
          case 'kali':
            console.log(`Hasil: ${kali(number1, number2)}`);
            break;
          case 'bagi':
            console.log(`Hasil: ${bagi(number1, number2)}`);
            break;
          default:
            console.log('Operasi tidak valid.');
            break;
        }

        rl.close();
      });
    });
  });
}

calculator();
