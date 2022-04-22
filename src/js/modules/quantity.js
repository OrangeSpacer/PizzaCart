export const quantity = (itemBlock,qunatityNumber,plusBtn,minusBtn) => {
    const counterQuantity = document.querySelectorAll(itemBlock)

    counterQuantity.forEach((item) => {
        item.addEventListener('click', (e) => {
            let target = e.target
            let count = Number(item.querySelector(qunatityNumber).textContent)
            if(target.classList.contains(minusBtn)){
                if (count > 1){
                    count-=1
                    item.querySelector(qunatityNumber).textContent = count
                }
            }
            if(target.classList.contains(plusBtn)){
                count+=1
                item.querySelector(qunatityNumber).textContent = count
            }
        })
    })
}