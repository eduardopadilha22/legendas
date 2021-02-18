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

let obterAlunos = async () => {
    const ta = await getTurma('A')
    const tb = await getTurma('B')
    const tc =  await getTurma('C')
    return [].concat(ta,tb,tc)
} // essa async retorna um objeto asyncFunction


obterAlunos().then( alunos => alunos.map(a => a.nome))
             .then(nomes => console.log(nomes))
