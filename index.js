// get elements
const display = document.getElementById('display')
const buttons = document.querySelectorAll('.buttons button')

//add event listeners

buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.textContent === '=') {
            calculate();
        } else if (button.textContent === 'C') {
            clearDisplay()
        } else {
            appendToDisplay(button.textContent)
        }
    })
})

//Functions

function appendToDisplay(value) {
    display.value += value
}

function clearDisplay() {
    display.value = ""
}

function calculate() {
    try {
        const result = eval(display.value);
        display.value = result;
    } catch (error) {
        display.value = "Error"
    }
}