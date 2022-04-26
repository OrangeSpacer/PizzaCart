import { cart } from "./modules/cart.js";
import { formSubmit } from "./modules/formsubmit.js";
import { quantity } from "./modules/quantity.js";
import { trashcan } from "./modules/trashcan.js";

window.onload = () => {
    cart('.product__cart_items','.product__item','.btn__add','.product__title','.product__price','.product__descr','.product__view','.product__quantity_number')
    quantity('.product__quantity','.product__quantity_number','btn__plus','btn__minus')
    trashcan('product__trashcan')
    formSubmit()
}