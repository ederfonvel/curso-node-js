import { platform, release, arch, cpus, freemem, totalmem, uptime } from 'node:os'

console.log('Informacion del sistema operativo')
console.log('----------------------------------')
console.log('Nombre Sistema Operativo:', platform())
console.log('Version:', release())
console.log('Arquitectura:', arch())
console.log('CPUs', cpus())
console.log('Memoria libre:', freemem() /1020 / 1024)
console.log('Memoria total:', totalmem() /1024 / 1024)
console.log('Uptime:', uptime() / 60 / 60)
console.log('-----------------------------------')