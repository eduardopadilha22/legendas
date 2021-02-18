const  {interval} = require('rxjs')
const  {map, concatAll} = require('rxjs/operators')
const { ajax } = require('rxjs/ajax')

const { XMLHttpRequest } = require('xmlhttprequest')

ajax({
    createXHR: () => new XMLHttpRequest(),
    url: 'https://api.github.com/users/cod3rcursos/repos'
}). pipe( 
    map(resp => JSON.parse(resp.xhr.responseText)),
    concatAll(), // elimina o array
    map(repo => repo.full_name)
   
)
    .subscribe(console.log)