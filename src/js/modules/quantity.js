export const quantity = (itemBlock,qunatityNumber,plusBtn,minusBtn) => {
    const counterQuantity = document.querySelectorAll(itemBlock)

    counterQuantity.forEach((item) => {
        item.addEventListener('click', (e) => {
            let target = e.target
            if(target.classList.contains(minusBtn)){
                let count = Number(item.querySelector(qunatityNumber).textContent)
                if (count > 1){
                    count-=1
                    item.querySelector(qunatityNumber).textContent = count
                }
            }
            if(target.classList.contains(plusBtn)){
                let count = Number(item.querySelector(qunatityNumber).textContent)
                count+=1
                item.querySelector(qunatityNumber).textContent = count
            }
        })
    })
}