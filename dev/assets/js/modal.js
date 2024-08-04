const modal = document.querySelector('.modal');
const triger = document.querySelectorAll('[data-triger-modal]');
const modalBody = document.querySelector('.modal-body');
const buildSold = document.querySelectorAll('.sold');

const modalArr = [{
       id: 0,
       triger: 'sold',
       title: 'Нажаль всі квартири продані..(',
       description: 'Вільні квартири знаходяться в будинках,які не продані. Оберіть будь ласка іншу будівлю.',
       imgUrl: 'assets/img/modal-rejected.png'
    },
    {
        id: 1,
        triger: 'registrationSuccess',
        title: 'реєстрація',
        description: 'Ви успішно зареєструвалися',
        imgUrl: 'assets/img/modal-accepted.png',
        markap: `   <form>
                      <h2 class="modal-title">Реєстрація</h2>
                      <div class="input-row">
                         <label for="login">Введіть Ваш логін:</label>
                         <input type="text" id="login">
                         <label for="password">Введіть Ваш пароль:</label>
                         <input type="text" id="password">
                       </div>
                       <div class="btn-row">
                               <button class="btn" data-triger-close="modal">close</button>
                               <button class="btn">ok</button> 
                               <button class="btn-close" data-triger-close="modal">x</button>
                        </div>   
                  </form>`
    },
    {
        id: 2,
        triger: 'loginSuccess',
        title: 'Успішна реєстрація',
        description: 'Ви успішно зареєструвалися',
        imgUrl: 'assets/img/modal-accepted.png',
    },
];

const closeModal = () => {
    modal.classList.remove('show')
}

modal.addEventListener('click', (event)=> {
    event.target.classList.remove('show')
})

const randerModalContent = (modalContent) => {
    if (modalContent.markap) {
        modalBody.innerHTML = modalContent.markap
    } else {
    modalBody.innerHTML = `<h2 class="modal-title">${modalContent.title}</h2>
                           <p class="modal-description">${modalContent.description}</p>
                           <img src="${modalContent.imgUrl}" class="modal-img" alt="${modalContent.triger}">
                           
                           <div class="btn-row">
                               <button class="btn" data-triger-close="modal">close</button>
                               <button class="btn">ok</button> 
                               <button class="btn-close" data-triger-close="modal">x</button>
                           </div>`
    }
    const trigerClose = document.querySelectorAll('[data-triger-close="modal"]')
    trigerClose.forEach(btn => {
        btn.addEventListener('click', closeModal)
    })
}

const showModal = (modalType) => {
    const modalData = modalArr.find(item=> item.triger === modalType)
    console.log(modalData);
    randerModalContent(modalData)
    modal.classList.add('show')
    
}

const trigerModal = triger.forEach(item => {
    item.addEventListener('click', () => {
        const modalType = item.getAttribute('data-triger-modal')
        showModal(modalType)
    })
})






