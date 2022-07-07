// Intial Data

let validator = {
    handleSubmit:(event)=>{
        event.preventDefault()

        let send = true

        validator.clearErrors()

        let inputs = form.querySelectorAll('.content')
        for (let i=0;i < inputs.length; i++) {
            let input = inputs[i]
            console.log(input)
            let check = validator.checkInput(input)
            if (check !== true) {
                send = false
                validator.showError(input, check)
            }
        }

        if (send) {
            form.submit()
        }
    },
    checkInput:(input)=> {
        let rules = input.getAttribute('data-rules');
        if (rules !== null) {
            rules = rules.split('|')
            for (let k in rules) {
                switch(rules[k]) {
                    case 'required':
                        if (input.value == '') {
                            return 'O campo não pode ser vazio'
                        }
                }
            }
        }
        return true
    },
    showError:(input, error) => {
        input.style.borderColor = 'red'
        let errorElement = document.createElement('div')
        errorElement.innerHTML = error
        errorElement.classList.add('form__error')

        input.parentElement.insertBefore(errorElement, input)
    },
    clearErrors:()=> {
        let inputs = form.querySelectorAll('.content')
        for (let i = 0; i < inputs.length; i++) {
            inputs[i].style.borderColor = ''
        }

        errorElements = document.querySelectorAll('.form__error')
        for (i=0;i < errorElements.length; i++) {
            errorElements[i].remove()
        }
    }
}

let form = document.querySelector('.validator')

// Events

form.addEventListener('submit', validator.handleSubmit)

