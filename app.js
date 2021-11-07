const btn = document.querySelector('button');
const resultSpan = document.querySelector('.result-span');
const statusSpan = document.querySelector('.status-span');

const calculateBMI = () => {
    const heightInput = document.querySelector('#height-input');
    const weightInput = document.querySelector('#weight-input');

    if (weightInput.value == "" || heightInput.value == "") {
        alert("No data entered!");
    } else {
        let result = weightInput.value / ((heightInput.value / 100) ^ 2);
        return result.toFixed(1);
    }
}

const showBMI = () => {
    resultSpan.textContent = calculateBMI();
    statusSpan.textContent = calculateWeightStatus();
}

const calculateWeightStatus = () => {
    const BMI = calculateBMI();
    let status

    if (BMI < 18.5) status = "Underweight";
    else if (BMI >= 18.5 && BMI < 24.9) status = "Normal weight";
    else if (BMI >= 24.9 && BMI < 29.9) status = "Overweight";
    else if (BMI >= 29.9 && BMI < 34.9) status = "Obesity class I";
    else if (BMI >= 34.9 && BMI < 39.9) status = "Obesity class II";
    else status = "Obesity class III";

    return status;
}

btn.addEventListener('click', showBMI);