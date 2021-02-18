const {from, Observable,last} = require('rxjs')

function createPipeableOperator(operatorfn){ // function gereneric
    return function(source){
        return Observable.create(subscriber => {
            const sub  =  operatorfn(subscriber)
            source.subscribe({
                next: sub.next,
                error: sub.error || (e=> subscriber.error(e)),
                complete: sub.complete ||(() => subscriber.complete())
            })
        })
    }
}

// function createPipeableOperator(nextGenerator){ // function gereneric
//     return function(source){
//         return Observable.create(subscriber => {
//             source.subscribe({
//                 next: nextGenerator(subscriber)
//             })
//         })
//     }
// }


function primeiro(){
    // return createPipeableOperator((subscriber,v) => {
    //     subscriber.next(v);
    //     subscriber.complete()
    // })
    // return createPipeableOperator(function(subscriber){
    //     return function(valor){
    //         subscriber.next(valor);
    //         subscriber.complete()
    //     }
    // })

    // return createPipeableOperator(subscriber => valor => {
        
    //         subscriber.next(valor);
    //         subscriber.complete()
        
    // })

    return createPipeableOperator(subscriber => ({
        next(v){
            subscriber.next(v);
            subscriber.complete()
        }
    }))

}

function ultimo(){
    // return function(source){
    //     return Observable.create(subscriber => {
    //         let ultimo
    //         source.subscribe({
    //             next(x){
    //             ultimo = x
    //             },
    //             complete (){
    //                 subscriber.next(ultimo)
    //                 subscriber.complete()
    //             }
    //         })
    //     })
    // }
    let ultimo
    return createPipeableOperator(subscriber => ({
        
        next(v){

            ultimo = v
        },
        complete (){
             subscriber.next(ultimo)
             subscriber.complete()
        }
    }))
}


function nenhum(){
    return createPipeableOperator(subscriber => ({
        next(v){

            subscriber.complete()

        }
    }))
}
// from([1,2,3,4])
//     .pipe(primeiro())
//     .subscribe(console.log)


    from([1,2,3,4])
    .pipe(
        //  ultimo()
        // nenhum()
         primeiro()
        )
    .subscribe(console.log)