function getInputById(inputId) {
    const inputValue = document.getElementById(inputId);
    const inputValueAmount = parseInt(inputValue.value);
    inputValue.value = '';
    return inputValueAmount;
};

function getElementById(elementId) {
    const elementValue = document.getElementById(elementId);
    const elementValueAmount = parseInt(elementValue.innerText);
    return elementValueAmount;
};

function setElementById(elementId, newValue) {
    const textElement = document.getElementById(elementId);
    textElement.innerText = newValue;
};