"use strict";

const appData = {
    title: "",
    screens: [],
    screenPrice: 0,
    adaptive: true,
    rollback: 20,
    allServicePrices: 0,
    fullPrice: 0,
    servicePricePercent: 0,
    services: {},

    start: function () {
        this.asking(),
        this.addPrices()
        this.getTitle(this.title)
        this.getFullPrice(+this.screenPrice, this.allServicePrices)
        this.getServicePercentPrices(this.fullPrice, this.rollback)
        this.logger()
    },

    asking: function () {
        do {
            this.title = prompt("Как называется твой проект", "   КаЛьКулятор Верстки");
        } while (!isNaN(this.title));
        
        for (let i = 0; i < 2; i++) {
            let name
            let price = 0

            do {
                name = prompt("Какие типы экранов нужно разработать?");
            } while (!isNaN(name));

            do {
                price = prompt("Сколько будет стоить данная работа");
            } while (!this.isNumber(price));

            this.screens.push({id: i, name: name, price: price})
        }

        for (let i = 0; i < 2; i++) {
            let name
            let price = 0

            do {
                name = prompt("Какой дополнительный тип услуг нужен?", "Верстка");
            } while (!isNaN(name));

            do {
                price = prompt("сколько это будет стоить ?");
            } while (!this.isNumber(price));

            this.services[name + "_" + i] = +price
        }

        this.adaptive = confirm("Нужен ли адаптив ?");
    },

    addPrices: function(){
        this.screenPrice = this.screens.reduce((sum, num) => {
            return sum + +num.price
        }, 0)

        for(let key in this.services){
            this.allServicePrices += this.services[key]
        }
    },

    getTitle: function(title) {
        const trimStr = title.trim();
    
        this.title = trimStr.split("")[0].toUpperCase() + trimStr.slice(1).toLowerCase();
    },

    isNumber: function (num) {
       return !isNaN(parseFloat(num) && isFinite(num))
    },

    getFullPrice: function (price, servicePrices) {
        this.fullPrice = price + servicePrices
    },

    getServicePercentPrices: function (fullPrice, rollBack) {
        this.servicePricePercent = fullPrice - (fullPrice / 100) * rollBack;
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
        console.log(this.fullPrice);
        console.log(this.getRollBackMessage(this.fullPrice));
        console.log(this.services);
    }
};

appData.start()