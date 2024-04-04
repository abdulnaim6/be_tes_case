// Soal 1
let string_awal = "NEGIE1";

let huruf = string_awal.slice(0, -1);
let angka = string_awal.slice(-1);

let reverse = huruf.split("").reverse().join("");

let hasil = reverse + angka;

console.log(hasil);

// Soal 2
function panjangKata(kalimat) {
  let kataArr = kalimat.split(" ");

  let kalimatPanjang = "";

  kataArr.forEach(function (kata) {
    if (kata.length > kalimatPanjang.length) {
      kalimatPanjang = kata;
    }
  });
  return kalimatPanjang;
}

let kalimat = "Saya sangat senang mengerjakan soal algoritma";

let kalimatPanjang = panjangKata(kalimat);
let jumlahKarakter = kalimatPanjang.length;

console.log("Kata terpanjang:", kalimatPanjang);
console.log("Jumlah karakter dari kata terpanjang:", jumlahKarakter);

// Soal 3

function hitungKemunculan(input, query) {
  let output = [];

  let countMap = {};
  input.forEach((kata) => {
    countMap[kata] = (countMap[kata] || 0) + 1;
  });

  query.forEach((kata) => {
    output.push(countMap[kata] || 0);
  });

  return output;
}

let input = ["xc", "dz", "bbb", "dz"];
let query = ["bbb", "ac", "dz"];

let output = hitungKemunculan(input, query);

console.log("OUTPUT =", output);

// Soal 4

function penguranganDiagonal(matrix) {
  let diagonalPertama = 0;
  let diagonalKedua = 0;

  for (let i = 0; i < matrix.length; i++) {
    diagonalPertama += matrix[i][i];
  }

  for (let i = 0; i < matrix.length; i++) {
    diagonalKedua += matrix[i][matrix.length - 1 - i];
  }

  let hasil = diagonalPertama - diagonalKedua;

  return hasil;
}

let matrix = [
  [2, 2, 5],
  [4, 5, 5],
  [5, 8, 9],
];

const total = penguranganDiagonal(matrix);

console.log("Hasil pengurangan dari jumlah diagonal matriks:", total);
