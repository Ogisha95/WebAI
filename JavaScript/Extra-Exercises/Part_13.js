let weatherForecast = {
  city: "Skopje",
  temperature: 15,
  conditions: "Sunny",
  celsiusIntoFahrenheit: function() {
    let fahrenheit = this.temperature * 9/5 + 32;
    console.log(`The weather in ${this.city} is ${this.conditions} with a temperature of ${fahrenheit}°F.`);
  }
};

weatherForecast.celsiusIntoFahrenheit();
