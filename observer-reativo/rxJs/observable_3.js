const { interval, Observable , noop} =  require('rxjs')

function entre(min,max){
    return new Observable(subscriber => { // criação do observable
        for(let i = min; i<max; i++){
            subscriber.next(i); // 
        }
        subscriber.complete()
    })
}



entre(4,10).subscribe(
    num => console.log(num), // retorno do subscriber
    noop, //  error
    () => console.log
)
