const  { from, asyncScheduler} = require('rxjs')
const  { observeOn } =  require('rxjs/operators')
console.log('antes...')

from([1,2,3,4,5,6,]) // virou assyncrona
    .pipe(observeOn(asyncScheduler))
    .subscribe(console.log)

    console.log('depois...')
