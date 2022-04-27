import { modals } from "./modal.js"

export const formSubmit = () => {
    const submitBtn = document.querySelector('.btn__submit')
    const formPhone = document.querySelector('.product__input')
    const cartItems = document.querySelector('.product__cart_items')
    const amountZero = document.querySelector('span')

    submitBtn.addEventListener('click', () => {
        if (formPhone.value.length == 11){
            formPhone.value = ''
            cartItems.textContent = ''
            console.log(cartItems)
            amountZero.textContent = 0 + '$'
            modals('.modal','.btn__modal-close','modal__active','modal__hidden')
        }
    })
}