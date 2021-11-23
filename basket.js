"use strict";
let basketArray = [];
const cart = document.querySelector('.cartIconWrap');
cart.addEventListener('click', function(event) {
    //привязка события div-элемента корзины
    let basket = document.querySelector('.basket');
    basket.classList.toggle('hidden');
});

const item = document.querySelector('.featuredItems');
item.addEventListener('click', event => {
    //получаем информацию о выбранном товаре
    const itemElement = event.target.closest('.featuredItem');
    const itemId = +itemElement.getAttribute('data-id');
    const itemName = itemElement.querySelector('.featuredName').textContent.replace(/\s{2,}/g,' ');
    const itemPrice = +itemElement.querySelector('.featuredPrice').textContent.replace(/\s{2,}/g,' ').substring(2);
    //
    AddToBasket(itemId, itemName, itemPrice);//добавляем товар в корзину
    UpdateTotalValue(GetBasketPrice());//обновляем итоговую сумму
    UpdateCartIconWrap(GetBasketCount());//обновляем кол-во товаров в корзине (~иконка)   
});

class Basket {
    constructor(id, name, price, count) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.count = count;
    }
} 

/**
 * Добавить товар на страницу
 * @param {object} record Запись в корзине
 */
function AddItemToPage(record) {
    let basketRowElement = document.querySelector('.basketRow.basketHeader');
    let basketRowData = basketRowElement.cloneNode(true);
    //
    if (record != null) {
        basketRowData.innerHTML = `
            <div>${record.name}</div>
            <div>${record.count}</div>
            <div>${record.price}</div>
            <div>${record.count * record.price}</div>
        `;
        basketRowElement.insertAdjacentElement('afterend', basketRowData);
    }
    return;
}

/**
 * Добавить товар в корзину
 * @param {number} id Идентификатор товара
 * @param {string} name Название товара
 * @param {number} price Цена товара
 */
function AddToBasket(id, name, price) {    
    let find = false;
    for (let i = 0; i < basketArray.length; i++) {
        let temp = basketArray[i];
        if(temp != null) {
            if (temp.hasOwnProperty('id')) {
                //существует                
                if (temp.id == id) {
                    //совпадает
                    find = true;
                    temp.count++;
                    UpdateItemOnPage(temp);
                    break;
                }                
            }    
        }
    }

    if (!find) {
        const newItem = new Basket(id, name, price, 1);
        AddItemToPage(newItem);
        basketArray.push(newItem);
    }
    return;
}

/**
 * Получить кол-во товаров в корзине
 * @returns {number}
 */
function GetBasketCount() {
    let count = 0;
    for (let i = 0; i < basketArray.length; i++) {
        let temp = basketArray[i];
        if(temp != null) {
            if (temp.hasOwnProperty('count')) {
                //существует                
                count += temp.count;          
            }    
        }
    }
    return count;
}

/**
 * Получить стоимость товаров в корзине
 * @returns {number}
 */
function GetBasketPrice() {
    let total = 0;
    for(let i = 0; i < basketArray.length; i++) {
        total += basketArray[i].price * basketArray[i].count;
    }
    return total;
}

/**
 * Обновить счетчик товаров в корзине (на странице)
 * @param {number} count Кол-во товаров в корзине
 */
function UpdateCartIconWrap(count) {
    let cartIconElement = document.querySelector('.cartIconWrap');
    cartIconElement.innerHTML = `
        <img class="cartIcon" src="images/cart.png" alt="">
        <span>${count}</span>    
    `;
    return;
}

/**
 * Обновить запись в корзине (на странице)
 * @param {object} record Запись в корзине
 */
function UpdateItemOnPage(record) {
    let basketRowAll = document.querySelectorAll('.basketRow');
    basketRowAll.forEach(basketRow => {
        for (let i = 0; i < basketRow.children.length; i++) {
            if (basketRow.children[i].innerText.replace(/^\s\s*/, '').replace(/\s\s*$/, '') == 
                record.name.replace(/^\s\s*/, '').replace(/\s\s*$/, '')) {
               //элемент найден -> обновляем                
               //
                basketRow.innerHTML = `
                    <div>${record.name}</div>
                    <div>${record.count}</div>
                    <div>${record.price}</div>
                    <div>${record.count * record.price}</div>
                `;
            }
        }
    });
    return;
}

/**
 * Обновить итоговую стоимость на странице
 * @param {number} total Итоговая стоимость товаров в корзине
 */
function UpdateTotalValue(total) {
    let basketTotalElement = document.querySelector('.basketTotalValue');
    basketTotalElement.innerHTML = `${total}`;
    return;
}