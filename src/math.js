const calculateTip = (total, tipPercent=0.25) => total + (total * tipPercent)

const farenheitToCelcius = (temp) => {
    return (temp-32) / 1.8
}

const celciusToFarenheit = (temp) => {
    return (temp * 1.8) + 32
}

module.exports = {
    calculateTip,
    farenheitToCelcius,
    celciusToFarenheit
}