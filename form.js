// Intial Data

let validator = {
    handleSubmit:(event)=>{
        event.preventDefault()

        let send = true

        let inputs = form.querySelectorAll('.content')
        for (let i in inputs) {
            let input = inputs[i]
            console.log(input)
        }
        send = false

        if (send) {
            form.submit()
        }
    }
}

let form = document.querySelector('.validator')

// Events

form.addEventListener('submit', validator.handleSubmit)

