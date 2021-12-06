let flag = 0;
function isSubsetSum(M, N, subset, subsetSize, subsetSum, index) {
  if (subsetSum == N) {
    flag = 1;
    console.log(subset.filter((elem) => elem !== 0), "\n");
  } else {
    for (let i = index; i < M.length; i++) {
      subset[subsetSize] = M[i];
      isSubsetSum(M, N, subset, subsetSize + 1, subsetSum + M[i], i + 1);
    }
  }
}

function receiveMN(M, N) {
  // Subconjunto a buscar
  let subset = [];
  // Función recursiva que busca el primer subconjunto
  return isSubsetSum(M, N, subset, 0, 0, 0);
}

let M = [2, 5, 8, 14, 0];
let N = 10;
receiveMN(M, N);

if (flag == 0) {
  console.log("No hay un array posible que cumpla la regla.");
}
