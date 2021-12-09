let flag = 0;

function receiveMN(M, N) {
  const subset = [];
  const hashTable = {};

  // Obtendremos el subset con un solo barrido  (sweep line)
  for (let i = 0; i < M.length; i++) {
    // Número actual
    let currentNum = M[i];
    // Número que lo complementa
    let complementNum = N - M[i];
    // Buscamos si el valor ya se encuentra en la tabla hash
    const foundNum = hashTable[complementNum];

    // Si es distinto de 'undefined', entrará al 'if', caso contrario al 'else'
    if (foundNum !== undefined) {
      // Si está el complemento, termina el bucle
      flag = 1;
      return [complementNum, currentNum];
    } else {
      hashTable[currentNum] = i;
    }
  }
  return;
}

let M = [2, 5, 8, 14, 0];
let N = 10;
let result = receiveMN(M, N);

if (flag == 0) {
  console.log("No hay un array posible que cumpla la regla.");
} else {
  console.log("El subset es: ", result);
}
