const container = document.querySelector('.container');
const error = document.getElementById('error');


function getAge() {
    const dobValue = document.getElementById('dob').value;

    // if dob value is falsy, then simply return
    if(!dobValue) return

    // date of birth
    const dob = new Date(dobValue);

    // current Date
    const currentDate = new Date();

    // difference between current date and dob, it will return milliseconds value.
    const diff = currentDate - dob

    const age = diff / (1000 * 60 * 60 * 24 * 365);

    calcAge(age)
} 

function calcAge(age) {
    const year = Math.floor(age);
    const remainingYear = age - year;

    const monthDiff = remainingYear * 12;
    const month = Math.floor(monthDiff);

    const remainingMonth = monthDiff - month;
    const day = Math.floor(remainingMonth * 30)

    displayAge(year, month, day)
}

const displayAge = (y, m, d) => {
    const years = document.getElementById('years');
    const months = document.getElementById('months');
    const days = document.getElementById('days');

    years.innerText = y;
    months.innerText = m;
    days.innerText = d;

    if(y >= 0) {
        error.style.display = 'none'
    }
    if(y < 0) {
        error.style.display = 'block'
    }
    
}

container.addEventListener('input', getAge)