const title = 'newProject'
const screenPrice = 1500
const rollback = 20
const fullPrice = 70000

let adaptive = true
let screens = 'Простые, Сложные, Интерактивные'

console.log(typeof title);
console.log(typeof screens);
console.log(screenPrice + ' рублей')
console.log(fullPrice + '$')
console.log(screens.toLocaleLowerCase().split());
console.log(fullPrice * (rollback / 100));

