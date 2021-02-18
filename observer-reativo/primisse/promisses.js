function falarDepoisDe(segundos , frase){
    return new Promise( ( resolve,reject) => {
        setTimeout(() => {
            reject(frase)
            
        }, segundos * 1000)
    })
}


falarDepoisDe(3,'Que legal!!').then(frase => frase.concat('!&&'))
                                .then(novafrase => console.log(novafrase))
                                .catch(e => console.log(e))