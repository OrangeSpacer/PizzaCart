import { amount } from "./amountItems.js"

export const quantity = (itemBlock,qunatityNumber,plusBtn,minusBtn) => {
    function newfunction(){
        window.document.addEventListener('click', (e) => {
            e.preventDefault()
            let target=e.target
            let counterQunatity = target.closest(itemBlock)
            
            if (target.classList.contains(plusBtn)){
                let count = Number(counterQunatity.querySelector(qunatityNumber).textContent)
                count+=1
                counterQunatity.querySelector(qunatityNumber).textContent = count
                amount()
            }
            if (target.classList.contains(minusBtn)){
                let count = Number(counterQunatity.querySelector(qunatityNumber).textContent)
                if (count > 1){
                    count-=1
                    counterQunatity.querySelector(qunatityNumber).textContent = count
                    amount()
                }
            }
        })
    }
    newfunction()
}