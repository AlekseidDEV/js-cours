"use strict";

const title = prompt("Как называется твой проект", "   КаЛьКулятор Верстки");
const screens = prompt(
    "Какие типы экранов нужно разработать?",
    "Простые, Сложные, Интерактивные"
);
const screenPrice = +prompt("Сколько будет стоить данная работа");
const adaptive = confirm("Нужен ли адаптив ?");
const service1 = prompt("Какой дополнительный тип услуг нужен?", "Верстка");
const servicePrice1 = +prompt("Сколько это будет стоить");
const service2 = prompt("Какой дополнительный тип услуг нужен?", "Адаптив");
const servicePrice2 = +prompt("Сколько это будет стоить");

const rollback = 20;

let allServicePrices = 0;
let fullPrice = 0;
let servicePricePercent = 0;

const showTypeOf = function (variable) {
    console.log(variable, typeof variable);
};

const getAllServicePrice = function (service1, service2) {
    return service1 + service2;
};

function getFullPrice(screenPrice, sumService) {
    return screenPrice + sumService;
}

const getTitle = function () {
    const trimStr = title.trim();

    return trimStr.split("")[0].toUpperCase() + trimStr.slice(1).toLowerCase();
};

const getServicePercentPrices = function (fullPrice, rollBack) {
    return fullPrice - (fullPrice / 100) * rollBack;
};

const getRollBackMessage = function (price) {
    if (price > 30000) {
        return "Даем скидку 10%";
    } else if (price > 15000 && price <= 30000) {
        return "Даем скидку 5%";
    } else if (price <= 15000 && price > 0) {
        return "Скидка не предусмотрена";
    } else if (price < 0) {
        return "Что то пошло не так";
    }
};

showTypeOf(title);
showTypeOf(adaptive);
showTypeOf(screens);

allServicePrices = getAllServicePrice(servicePrice1, servicePrice2);
fullPrice = getFullPrice(screenPrice, allServicePrices);
getTitle();
servicePricePercent = getServicePercentPrices(fullPrice, rollback);

console.log(getRollBackMessage(fullPrice));
