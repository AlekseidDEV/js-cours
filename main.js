'use strict';

let title
let screens
let screenPrice
let adaptive
let rollback = 20;
let allServicePrices
let fullPrice
let servicePricePercent
let service1
let service2

const showTypeOf = function (variable) {
    console.log(variable, typeof variable);
};

const isNumber = function (num) {
    const trimValue = num === null ? num : num.trim()

    let resultChecking

    if (Number(trimValue) || trimValue === '0') {
        resultChecking = true
    } else {
        resultChecking = false
    }

    return resultChecking
}

const asking = function () {
    title = prompt("Как называется твой проект", "   КаЛьКулятор Верстки");
    screens = prompt("Какие типы экранов нужно разработать?", "Простые, Сложные, Интерактивные");

    do {
        screenPrice = prompt("Сколько будет стоить данная работа");
    }
    while (!isNumber(screenPrice));

    adaptive = confirm("Нужен ли адаптив ?");
}

const getAllServicePrice = function () {
    let sum = 0
    let num

    for (let i = 0; i < 2; i++) {

        if (i === 0) {
            service1 = prompt("Какой дополнительный тип услуг нужен?", "Верстка");
        } else if (i === 1) {
            service2 = prompt("Какой дополнительный тип услуг нужен?", "Адаптив");
        }

        do {
            num = prompt('сколько это будет стоить ?')
        }
        while (!isNumber(num));

        sum += +num
    }

    return sum
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

asking()

showTypeOf(title);
showTypeOf(adaptive);
showTypeOf(screens);

allServicePrices = getAllServicePrice();
fullPrice = getFullPrice(+screenPrice, allServicePrices);
getTitle();
servicePricePercent = getServicePercentPrices(fullPrice, rollback);

console.log(getRollBackMessage(fullPrice));
