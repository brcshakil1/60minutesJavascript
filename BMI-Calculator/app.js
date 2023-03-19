const bmiResult = document.querySelector('.BMI-result');
const bmiType = document.querySelector('.type');

const calculateBMI = () => {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value) / 100;

    const bmi = (weight / Math.pow(height, 2)).toFixed(1);

    bmiResult.textContent = bmi;
    if(isNaN(bmi)) {
        bmiType.textContent = '';
        bmiResult.textContent = '';
    }
    if(bmi < 18.5) {
        bmiType.textContent = 'Body weight: Underweight. You should eat more and healthy food';
        bmiType.style.color = '#006cc5';
        bmiResult.style.color = '#006cc5';

    }
    else if(bmi < 25.0001) {
        bmiType.textContent = 'Body weight: Normal. Congratulation!';
        bmiType.style.color = '#00be00';
        bmiResult.style.color = '#00be00';
    }
    else if(bmi < 30.0001) {
        bmiType.textContent = 'Body weight: OverWeight. You should eat little.';
        bmiType.style.color = '#913727';
        bmiResult.style.color = '#913727';
    }
    else if(bmi < 35.0001) {
        bmiType.textContent = 'Body weight: Obesity I. You are in risk. You have to lost your weight.';
        bmiType.style.color = '#c40e0e';
        bmiResult.style.color = '#c40e0e';
    }

    else if(bmi < 40.0001) {
        bmiType.textContent = 'Body weight: Obesity II. You are in very risk. You have to lost your weight. Must!';
        bmiType.style.color = '#ff0000';
        bmiResult.style.color = '#ff0000';
    }
}