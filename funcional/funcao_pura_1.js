const PI = 3.14
//  uma função pura é uma função em que o valor
// de retorno é determinado apenas por seus valores
// de entrada, sem efeitos colaterais


//função pura
function circ(raio,pi){
    return raio * raio * pi;
}



console.log(circ(10,3.14))
console.log(circ(10,3.1334))
console.log(circ(10,3.134))