"use strict";

const appData = {
    title: "",
    screens: '',
    screenPrice: 0,
    adaptive: true,
    rollback: 20,
    allServicePrices: 0,
    fullPrice: 0,
    servicePricePercent: 0,
    service1: '',
    service2: '',

    start: function () {
        this.asking(),
        this.allServicePrices = this.getAllServicePrice()
        this.fullPrice = this.getFullPrice(+this.screenPrice, this.allServicePrices)
        this.servicePricePercent = this.getServicePercentPrices(this.fullPrice, this.rollback)
        this.logger()
    },

    asking: function () {
        this.title = prompt("Как называется твой проект", "   КаЛьКулятор Верстки");
        this.screens = prompt(
            "Какие типы экранов нужно разработать?",
            "Простые, Сложные, Интерактивные"
        );

        do {
            this.screenPrice = prompt("Сколько будет стоить данная работа");
        } while (!this.isNumber(this.screenPrice));

        this.adaptive = confirm("Нужен ли адаптив ?");
    },

    getTitle: function(title) {
        const trimStr = title.trim();
    
        return trimStr.split("")[0].toUpperCase() + trimStr.slice(1).toLowerCase();
    },

    isNumber: function (num) {
        const trimValue = num === null ? num : num.trim();

        let resultChecking;

        if (Number(trimValue) || trimValue === "0") {
            resultChecking = true;
        } else {
            resultChecking = false;
        }

        return resultChecking;
    },

    getAllServicePrice: function () {
        let sum = 0;
        let num;

        for (let i = 0; i < 2; i++) {
            if (i === 0) {
                this.service1 = prompt(
                    "Какой дополнительный тип услуг нужен?",
                    "Верстка"
                );
            } else if (i === 1) {
                this.service2 = prompt(
                    "Какой дополнительный тип услуг нужен?",
                    "Адаптив"
                );
            }

            do {
                num = prompt("сколько это будет стоить ?");
            } while (!this.isNumber(num));
            sum += +num;
        }

        return sum;
    },

    getFullPrice: function (price, servicePrices) {
        return price + servicePrices
    },

    getServicePercentPrices: function (fullPrice, rollBack) {
        return fullPrice - (fullPrice / 100) * rollBack;
    },

    getRollBackMessage: function (price) {
        if (price > 30000) {
            return "Даем скидку 10%";
        } else if (price > 15000 && price <= 30000) {
            return "Даем скидку 5%";
        } else if (price <= 15000 && price > 0) {
            return "Скидка не предусмотрена";
        } else if (price < 0) {
            return "Что то пошло не так";
        }
    },

    logger: function () {
        console.log(this.getTitle(this.title));
        console.log(this.fullPrice);
        console.log(this.getRollBackMessage(this.fullPrice));
        
        for(let key in appData){
            console.log(appData[key]);
        }
    }
};

appData.start()