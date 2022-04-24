// Map

function mapSemThis(arr) {
  return arr.map(function (item){
    return item * 2;
  });
}

const nums = [2, 4, 6, 8, 10];
console.log(mapSemThis(nums));

// Filter

function filtraPares(arr){
  return arr.filter(callback);
}

function callback(item){
  return item % 2 == 0;
}
const meuArray = [53, 23, 42, 28, 6, 8, 13];
console.log(`Os números pares dentro do array são: ${filtraPares(meuArray)}`);

// Reduce

function somaNumeros(arr){
  return arr.reduce(function (prev, current){
  //  console.log({prev});
  //  console.log({current});
    return prev + current;
  })
}

const arr = [1, 2, 8, 20];
console.log('Total final: ' + somaNumeros(arr));

// Reduce 2

const lista = [
  {
    name: 'sabão em pó',
    preco: 30
  },
  {
    name: 'Cereal',
    preco: 12
  },
  {
    name: 'Toalha',
    preco: 30,
  },
]

const saldoDisponivel = 100;

function calculaSaldo(saldoDisponivel, lista){
  return lista.reduce(function (prev, current, index){
    console.log('Rodada: ', index + 1);
    console.log([prev]);
    console.log([current]);
    return prev - current.preco;
  }, saldoDisponivel);
}
console.log('Novo saldo disponivel: ' + calculaSaldo(saldoDisponivel, lista));