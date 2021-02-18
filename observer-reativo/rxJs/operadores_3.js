const { Observable} =  require('rxjs')

function gerandoElementoComDelay(tempo,...elementos){
    return Observable.create(subscriber => {
        (elementos || []).forEach((ele,i) => {
            setTimeout(() =>{
                subscriber.next(ele)
                if(elementos.length === i +1 ){
                    subscriber.complete()
                }
            } , tempo * (i+1));
         })
    })
}

gerandoElementoComDelay(2000,1,'teste',3,4,5,6,7).subscribe(console.log)