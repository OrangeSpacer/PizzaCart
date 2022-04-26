export const amount = () => {
    const cartItem = document.querySelectorAll('.product__cart_item')
    
    let newAmountItem = document.querySelector('span')
    let totalPrice = 0

    cartItem.forEach((item) => {
        let qunatity = parseInt(item.querySelector('.product__quantity_number').textContent)
        let price = item.querySelector('.product__cart_price')
        let newPrice = qunatity*parseFloat(price.textContent)
        totalPrice+=newPrice
    })
    
    newAmountItem.textContent = totalPrice + '$'
}