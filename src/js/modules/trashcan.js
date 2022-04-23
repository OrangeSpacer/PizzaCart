export const  trashcan = (trashButton) => {
    const cartBlock = document.querySelector('.product__cart_items')

    cartBlock.addEventListener('click', (e) => {
        let target = e.target

        if(target.classList.contains(trashButton)){
            let parentNumber = (target.closest('.product__cart_item').dataset.id)
            let parent = cartBlock.querySelector(`[data-id="${parentNumber}"]`)
            parent.remove()
        }
    })
    
}