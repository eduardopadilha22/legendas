const {from, Observable,last, Subject} = require('rxjs')


function getSubject(){
    const sub = new Subject()

    setTimeout(() =>{
        console.log("Subject .... ")
        sub.next(Math.random()),
        sub.complete()
    },1000)
    return sub
}


const sub = getSubject();
sub.subscribe(console.log)
sub.subscribe(console.log) 

// mesmo assunto para todos os inscritos...