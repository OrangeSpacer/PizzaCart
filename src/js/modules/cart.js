import { amount } from "./amountItems.js"

export const cart = (cartItemBlock,parentItem,buttonAddItem,titleItem,priceItem,descrItem,imgItem,quantityItem) => {
    const cartBlock = document.querySelector(cartItemBlock)
    const btnadd = document.querySelectorAll(buttonAddItem)
    
    let cardItem = {}
    
    function addOnCart() {
        btnadd.forEach((item) => {
            item.addEventListener('click', () => {
                let card = item.closest(parentItem)
                cardItem = {
                    'title': card.querySelector(titleItem).textContent,
                    'price': card.querySelector(priceItem).textContent,
                    'descr': card.querySelector(descrItem).textContent,
                    'img': card.querySelector(imgItem).getAttribute('src'),
                    'quantity': card.querySelector(quantityItem).textContent,
                    'id':card.dataset.id,
                }
                const itemId = cartBlock.querySelector(`[data-id="${cardItem.id}"]`)

                card.querySelector('.product__quantity_number').textContent = 1
                
                if(itemId){
                    let newQuantity = (Number(itemId.querySelector('.product__quantity_number').textContent)+Number(cardItem.quantity))
                    itemId.querySelector('.product__quantity_number').textContent = newQuantity
                    amount()
                }
                
                else{
                    const cartItem = 
                `
                <div class="product__cart_item" data-id="${cardItem.id}">
                    <div class="product__cart_item-left">
                        <img src="${cardItem.img}" class="product__cart_view" alt="prodcut3">
                    </div>
                    <div class="product__cart_item-right">
                        <h2 class="product__cart_title">
                            ${cardItem.title}
                        </h2>
                        <div class="product__cart_price">
                            ${cardItem.price}
                        </div>
                        <div class="product__cart_descr">
                            ${cardItem.descr}
                        </div>
                        <div class="product__quantity">
                            <button class="btn btn__minus"></button>
                            <div class="product__quantity_number">
                                ${cardItem.quantity}
                            </div>
                            <button class="btn btn__plus"></button>
                        </div>
                        <div class="product__trashcan"></div>
                    </div>
                </div>
                `
                cartBlock.insertAdjacentHTML('beforeend',cartItem)
                amount()
                }
            })
        })
    }

    addOnCart()
}