const modal = document.querySelector('.modal')
const btnClose = document.querySelectorAll('.btn-close')
const buildSold = document.querySelectorAll('.sold')


const showModal = ()=> {
    modal.classList.add('show')
}

const closeModal = ()=> {
    modal.classList.remove('show')
}

buildSold.forEach(buildItem => {
    buildItem.addEventListener('click', showModal)
})

btnClose.forEach(btn => {
    btn.addEventListener('click', closeModal)
})