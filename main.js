'use strict';

const title = prompt('Как называется твой проект', 'Project')
const screens = prompt('Какие типы экранов нужно разработать?', 'Простые, Сложные, Интерактивные')
const screenPrice = +prompt('Сколько будет стоить данная работа')
const adaptive = confirm('Нужен ли адаптив ?')
const service1 = prompt('Какой дополнительный тип услуг нужен?', 'Верстка')
const servicePrice1 = +prompt('Сколько это будет стоить')
const service2 = prompt('Какой дополнительный тип услуг нужен?', 'Адаптив')
const servicePrice2 = +prompt('Сколько это будет стоить')

const rollback = 20

const fullPrice = servicePrice1 + servicePrice2 + screenPrice
const servicePricePercent = Math.ceil(fullPrice - ((fullPrice / 100) * rollback))



if(fullPrice > 30000){
    console.log('Даем скидку 10%');
} else if(fullPrice > 15000 && fullPrice <= 30000){
    console.log('Даем скидку 5%');
} else if(fullPrice <= 15000 && fullPrice > 0){
    console.log('Скидка не предусмотрена');
} else if(fullPrice === 0){
    console.log('ну ты жадина');
} else if(fullPrice < 0){
    console.log('что то пошло не так');
}




