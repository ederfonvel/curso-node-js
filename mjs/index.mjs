//.js --> por defecto utiliza CommonJS
//.mjs --> para utilizar ES Modules
//.cjs --> para utilizar CommonJS

import { sum, sub, mult } from './sum.mjs'
console.log(sum(4,6))
console.log(mult(5,6))
console.log(sub(7,3))


