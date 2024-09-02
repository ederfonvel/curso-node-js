const fs = require('node:fs')

console.log('leyendo el primer archvivo')
fs.readFile('./archivo.txt','utf-8', (err,text)=>{

    console.log(text)
})

console.log('hacer otra cosa....')

console.log('leyendo el Segundo archvivo')
fs.readFile('./archivo2.txt','utf-8', (err,text)=>{
    console.log(text)

})