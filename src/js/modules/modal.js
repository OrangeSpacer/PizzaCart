export const modals = (modalBlock,modalCloseBtn,modalActiveClass,modalHiddenClass) => {
    const modal = document.querySelector(modalBlock)
    const closeBtn = document.querySelector(modalCloseBtn)


    function openModal(){
        modal.classList.add(modalActiveClass)
        modal.classList.remove(modalHiddenClass)
    }

    function closeModalButton(){
        closeBtn.addEventListener('click', () => {
            modal.classList.remove(modalActiveClass)
            modal.classList.add(modalHiddenClass)
        })
    }

    function closeModalWindow(){
        modal.addEventListener('click', (e) => {
            let target = e.target
            if(target.classList.contains('modal__wrapper')){
                modal.classList.remove(modalActiveClass)
                modal.classList.add(modalHiddenClass)
            }
        })
    }

    openModal()
    closeModalButton()
    closeModalWindow()
}