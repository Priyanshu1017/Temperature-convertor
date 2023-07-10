function convertTemperature() {
    var temperatureInput = document.getElementById('temperature');
    var fromInput = document.getElementById('from');
    var toInput = document.getElementById('to');
    var resultElement = document.getElementById('result');

    var temperature = parseFloat(temperatureInput.value);
    var fromUnit = fromInput.value;
    var toUnit = toInput.value;

    if (!isNaN(temperature)) {
        var convertedTemperature;
        var resultText;

        if (fromUnit === 'celsius') {
            if (toUnit === 'fahrenheit') {
                convertedTemperature = (temperature * 9 / 5) + 32;
                resultText = temperature + "°C = " + convertedTemperature.toFixed(2) + "°F";
            } else if (toUnit === 'kelvin') {
                convertedTemperature = temperature + 273.15;
                resultText = temperature + "°C = " + convertedTemperature.toFixed(2) + "K";
            }
        } else if (fromUnit === 'fahrenheit') {
            if (toUnit === 'celsius') {
                convertedTemperature = (temperature - 32) * 5 / 9;
                resultText = temperature + "°F = " + convertedTemperature.toFixed(2) + "°C";
            } else if (toUnit === 'kelvin') {
                convertedTemperature = (temperature + 459.67) * 5 / 9;
                resultText = temperature + "°F = " + convertedTemperature.toFixed(2) + "K";
            }
        } else if (fromUnit === 'kelvin') {
            if (toUnit === 'celsius') {
                convertedTemperature = temperature - 273.15;
                resultText = temperature + "K = " + convertedTemperature.toFixed(2) + "°C";
            } else if (toUnit === 'fahrenheit') {
                convertedTemperature = (temperature * 9 / 5) - 459.67;
                resultText = temperature + "K = " + convertedTemperature.toFixed(2) + "°F";
            }
        }

        temperatureInput.value = convertedTemperature.toFixed(2);
        resultElement.textContent = resultText;
    }
    else {
        resultElement.textContent = "Please enter a valid temperature.";
    }
}