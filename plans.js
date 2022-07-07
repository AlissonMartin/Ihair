// Initial Data

// Events 

document.querySelectorAll('.select__button').forEach((item)=>{
    item.addEventListener('click', ()=>{
        document.querySelector('.select__button.selected').classList.remove('selected')
        item.classList.add('selected')
        if (document.querySelector('.select__button--first').classList.contains('selected')) {
            voce = true
        } else {
            voce = false
        }
        planCheck()
    })
})

// Functions

function showWindow(e) {
    dataKey = e.target.getAttribute('data-key')
    if (dataKey == 0 || dataKey == null) {
        document.querySelector('.select__button.selected').classList.remove('selected')
        document.querySelector('.select__button--first').classList.add('selected')
        voce = true
    } else {
        document.querySelector('.select__button.selected').classList.remove('selected')
        document.querySelector('.select__button--second').classList.add('selected')
        voce = false
    }
    planCheck()
    document.querySelector('.plan__windowarea').style.opacity = '0'
    document.querySelector('.plan__windowarea').style.display = 'flex'
    setTimeout(()=>{
        document.querySelector('.plan__windowarea').style.opacity = '1'
    },300)

}

function planCheck() {
    if (voce) {
        document.querySelector('.title--plan__desc').innerHTML = 'Plano Você'
        document.querySelector('.subtitle--plan__desc').innerHTML = 'O plano indivídual e mensal para você!'
        document.querySelector('.money--window').innerHTML = '99,90'
    } else {
        document.querySelector('.title--plan__desc').innerHTML = 'Plano Família'
        document.querySelector('.subtitle--plan__desc').innerHTML = 'O plano perfeito para sua família!'
        document.querySelector('.money--window').innerHTML = '199,90'
    }
}

function closeWindow() {
    document.querySelector('.plan__windowarea').style.opacity = '0'
    setTimeout(() => {
        document.querySelector('.plan__windowarea').style.display = 'none'
    }, 300)
}