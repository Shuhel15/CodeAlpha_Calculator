const display = document.getElementById('display');

const button = document.querySelectorAll('button');


button.forEach((button) => {
    button.addEventListener('click', () => {
        const text = button.textContent

        if (text === 'AC') {
            display.value = '';
        }
        else if (text === '=') {
            try {
                display.value = eval(display.value)
            } catch (error) {
                display.value = 'Error'
            }
        }
        else if (text === 'DEL') {
            display.value = display.value.slice(0, -1)
        }
        else {
            display.value += text
        }
    })
})