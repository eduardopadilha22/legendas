const {from, Observable,last} = require('rxjs')

function primeiro(){
    return function(source){
        return Observable.create(subscriber => {
            source.subscribe({
                next(v){
                    subscriber.next(v)
                    subscriber.complete()
                }
            })
        })
    }
}



function ultimo(){
    return function(source){
        return Observable.create(subscriber => {
            let ultimo
            source.subscribe({
                next(x){
                ultimo = x
                },
                complete (){
                    subscriber.next(ultimo)
                    subscriber.complete()
                }
            })
        })
    }
}


function nenhum(){
    return function(source){
        return Observable.create(subscriber => {
            let ultimo
            source.subscribe({
                next(x){
                subscriber.complete()
                }
            })
        })
    }
}
// from([1,2,3,4])
//     .pipe(primeiro())
//     .subscribe(console.log)


    from([1,2,3,4])
    .pipe(
         ultimo(),
        nenhum()
        )
    .subscribe(console.log)