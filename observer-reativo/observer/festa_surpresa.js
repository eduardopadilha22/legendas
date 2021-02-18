const realine = require('readline')
const { resolve } = require('path')

function obterREposta(pergunta) {
    const rl = realine.createInterface({
        input: process.stdin,
        output: process.stdout
    })
    return new Promise(resolve => {
        rl.question(pergunta, resp => {
            resolve(resp)
            rl.close()
        })
    })
}

obterREposta('Esse é um teste ?').then(console.log)

//observer
function namorada(){
    

    setTimeout(() => {
        console.log('N: Apagar as luzes')
        console.log('N: Pedir Silencio')
        console.log('N: Surpresa')
    },2000)
}

//observer
function sindico(){
    setTimeout(() => {
        console.log('monitarando barulho!')
    },1000)
}

//subject
async function porteiro(interessados){
    while(true){
        const resp  =  await obterREposta('ja chegou  : (s/N/q) ')
        if(resp.toLowerCase() === 's'){
            (interessados || []).forEach(obs => obs());
        }else if(resp.toLowerCase() === 'q'){
            break
        }
        
    }
  
}

 porteiro([namorada,sindico])
