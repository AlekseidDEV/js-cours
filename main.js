const title = 'newProject'
const screenPrice = 1500
const rollback = 20
const fullPrice = 70000

let adaptive = true
let screens = 'Простые, Сложные, Интерактивные'

console.log(typeof title);
console.log(typeof fullPrice);
console.log(typeof adaptive);

console.log(screens.length);

console.log("Стоимость верстки экранов " + screenPrice + " рублей / долларов / гривен / юани")
console.log("Стоимость разработки сайта " + fullPrice + " рублей / долларов / гривен / юани")

console.log(screens.toLowerCase().split());
console.log(fullPrice * (rollback / 100));

