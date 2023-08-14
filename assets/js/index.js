const keypad = document.querySelector('.keypad')
const screen = document.querySelector('.screen')

let equation = []

function buttonPress(e) {
    
    if (e.target.classList.contains('operation')) {
        let storedNumber = screen.innerHTML
        let integer = parseInt(storedNumber)
        
        let operation = e.target.textContent
        if (operation == 'x') {
            operation = '*'
        }

        screen.innerHTML += operation

        equation.push(integer)
        equation.push(operation)
        console.log('-----equation-----')
        console.log(equation)

            if (e.target.textContent == '=') {
            console.log('equals')
            equation.pop()
            console.log('-----popped equation-----')
            console.log(equation)
            let equationString = equation.toString()
            let removeCommas = equationString.replace(/,/g, '')
            let result = math.evaluate(removeCommas)
            console.log('-----result-----')
            console.log(result)
            screen.innerHTML = result
            equation = []
            }
        
    } else if (e.target.textContent == 'AC') {
        console.log('clear')
        screen.innerHTML = ""
        equation = []
    } else if (e.target.textContent == '+/-') {
         console.log('negative')
    } else if (e.target.textContent == '%') {
        console.log('percentage')
    } else if (e.target.textContent == 7) {
        console.log(7)
        screen.innerHTML += 7
    } else if (e.target.textContent == 8) {
        console.log(8)
        screen.innerHTML += 8
    } else if (e.target.textContent == 9) {
        console.log(9)
        screen.innerHTML += 9
    } else if (e.target.textContent == 4) {
        console.log(4)
        screen.innerHTML += 4
    } else if (e.target.textContent == 5) {
        console.log(5)
        screen.innerHTML += 5
    } else if (e.target.textContent == 6) {
        console.log(6)
        screen.innerHTML += 6
    } else if (e.target.textContent == 1) {
        console.log(1)
        screen.innerHTML += 1
    } else if (e.target.textContent == 2) {
        console.log(2)
        screen.innerHTML += 2
    } else if (e.target.textContent == 3) {
        console.log(3)
        screen.innerHTML += 3
    } else if (e.target.textContent == 0) {
        console.log(0)
        screen.innerHTML += 0
    } else if (e.target.textContent == '.') {
        console.log('decimal point')
        screen.innerHTML += '.'
    } 
}

keypad.addEventListener('click', buttonPress)