const { Observable } =  require('rxjs')






const obs$ = Observable.create(subscriber => {
    subscriber.next('RxJs')
    subscriber.next('é')
    subscriber.next('bem')

    subscriber.next('poderoso!!!!')
    if(Math.random() > 0.3){
        subscriber.complete() // finalizado o observable
    }else {
        subscriber.error("que problema!!!!");
    }
    
})


obs$.subscribe(
    valor => console.log(`Valor: ${valor}`),
    erro => console.log(`Error: ${erro}`),
    () => console.log('fim')
)

obs$.subscribe(
    {
        next(valor){
            console.log(`Valor: ${valor}`)
        },
        error(msg){
            console.log(`Error: ${msg}`)
        },
        complete(){
            console.log('fim')
        }
    }
)
