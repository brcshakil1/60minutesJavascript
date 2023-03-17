const hourHand = document.querySelector('.hour');
const minuteHand = document.querySelector('.minute');
const secondHand = document.querySelector('.second');

const getHour = () => {
    const today = new Date();
    const hours = today.getHours();
    const minutes = today.getMinutes();
    const seconds = today.getSeconds();

    let hrHandRotation = 30*hours + minutes/2 + seconds/120;
    let minHandRotation = 6*minutes + seconds/10;
    let secHandRotation = 6*seconds;

    hourHand.style.transform = `translate(-50%) rotate(${hrHandRotation}deg)`;
    minuteHand.style.transform = `translate(-50%) rotate(${minHandRotation}deg)`;
    secondHand.style.transform = `translate(-50%) rotate(${secHandRotation}deg)`;
}

getHour();

setInterval(getHour, 1000)