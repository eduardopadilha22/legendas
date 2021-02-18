// os dois tipos


//1 cricação
//2. operadores encadeaveis

const { of } = require('rxjs') // operador de criação

const {last, map} = require('rxjs/operators')//  encadeaveis

of(1,2,'maria',false,'ultimo')
    .pipe(last())
    .pipe(map(v => v[0]))
.subscribe(function(valor){
    console.log(`o valor é : ${valor}`)
})


