const {of, Observable} = require('rxjs')

// function terminadoCom(parteFinal){
//     return function(source){
//         return Observable.create(subscriber => {
//             source.subscribe(data => {
//                 if(data.split(' ')[1] == parteFinal){
//                     subscriber.next(data)
//                 }
//             })
    
//         })

//     }
// }

function terminadoCom(parteFinal){
    return function(source){
        return Observable.create(subscriber => {
            source.subscribe({
                next(valor){

                    if(Array.isArray(valor)){
                        subscriber.next(
                            valor.filter(ele => ele.endsWith(parteFinal)) // filtra elementos se for vendadeiro
                        )
                    }else if(valor.endsWith(parteFinal)){
                        subscriber.next(valor)
                    }
                },
                error(e){
                    subscriber.error(e)
                },
                complete(){
                    subscriber.complete()
                }
            })
    
        })

    }
}


of(['Maria Silva','Maria Silva', 'joao Oliveira'])
    .pipe(terminadoCom('Silva'))
    .subscribe(console.log)