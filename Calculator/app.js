
const display = document.querySelector('.result')

const buttons = document.querySelectorAll('.btn');

buttons.forEach(btn => {
    btn.addEventListener('click', (e) => {
        switch(e.target.innerText) {
            case 'AC':
                display.innerText = '';
                break;
            case '←':
                display.innerText = display.innerText.slice(0, -1)
                break;
            case '%':
                display.innerText = eval(display.innerText) / 100;
                break;
            case '=':
                try {
                    display.innerText = eval(display.innerText);
                } catch {
                    display.innerText = 'Error!';
                }
                break;
            default: 
                display.innerText += e.target.innerText
        }
    })
    console.log()
})
