const http = require('http')

const getTurma = letra => {
    const url =  `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    return  new Promise((resolve,reject) => {
        http.get(url, resp => {
            let resultado = ''
            resp.on('data', dados => {
                resultado += dados
            })

            resp.on('end', () => {
                try {
                    resolve(JSON.parse(resultado))
                } catch (error) {
                    reject(error)
                }
            })

        })
    })
}


// let nomes  = []
// getTurma('A', alunos => {
//     nomes = nomes.concat(alunos.map( a => `A: ${a.nome}`))
//     getTurma('B', alunos => {
//         nomes  =  nomes.concat(alunos.map (a => `B: ${a.nome}`))
//         console.log(nomes)
//     })
//         getTurma('C', alunos => {
//             nomes = nomes.concat(alunos.map(a => `C: ${a.nome}`))
//             console.log(nomes)
//         })
// })

Promise.all([getTurma('A'), getTurma('B'), getTurma('C')])
            .then(turmas => [].concat(...turmas))
            .then(alunos => alunos.map(aluno => aluno.nome))
            .then(nomes => console.log(nomes))
            

getTurma('D').catch(e => console.log(e))