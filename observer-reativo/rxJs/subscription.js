
const { timer, Subscription } = require('rxjs')

const obs = timer(3000,500)

const  sub1 = obs.subscribe(num => {
    console.log(`O valor gerado é ${num}`)
})

const  sub2 = obs.subscribe(num => {
    console.log(`O valor gerado é ${num}`)
})

sub1.add(sub2)

const subs = new Subscription();
subs.add(sub1)
subs.add(sub2)

setTimeout(() => {
    // subs.unsubscribe()
    sub1.unsubscribe()
}, 10000)