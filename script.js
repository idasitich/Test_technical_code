const hasil = document.getElementById('hasil');
const segitiga = document.getElementById('Segitiga');
const ganjil = document.getElementById('Ganjil');
const prima = document.getElementById('Prima');
const inp = document.getElementById('input');

const addSegitiga = () => {
  const angka = inp.value;
  const digits = angka.toString().split('');
  const realDigits = digits.map(Number);

  console.log(realDigits);
  let rows = realDigits.length;
  let words = '0';

  for (let i = 0; i < rows; i++) {
    hasil.innerHTML += realDigits[i];
    for (let j = 0; j <= i; j++) {
      hasil.innerHTML += words;
    }
    hasil.innerHTML += '<br>';
  }
};

const addGanjil = () => {
  const angka = inp.value;
  const digits = angka.toString().split('');
  const realDigits = digits.map(Number);

  console.log(realDigits);
  let rows = realDigits.length;
  let words = '0';

  for (let i = 0; i < rows; i++) {
    hasil.innerHTML += realDigits[i] + i;
    for (let j = 0; j <= i; j++) {
      hasil.innerHTML += words;
    }
    hasil.innerHTML += '<br/>';
  }
};

const addPrima = () => {
  const angka = inp.value;
  const digits = angka.toString().split('');
  const realDigits = digits.map(Number);

  console.log(realDigits);
  let rows = realDigits.length;
  let words = '0';

  for (let i = 0; i < rows; i++) {
    hasil.innerHTML += realDigits[i] + i;
    for (let j = 0; j <= i; j++) {
      hasil.innerHTML += words;
    }
    hasil.innerHTML += '<br/>';
  }
};

segitiga.addEventListener('click', addSegitiga);
ganjil.addEventListener('click', addGanjil);
prima.addEventListener('click', addPrima);
