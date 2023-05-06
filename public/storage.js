class Storage {
  constructor() {
    this.defaultCity = "Kathmandu";
  }

  getData() {
    const city = localStorage.getItem("city");
    if (!city) {
      localStorage.setItem("city", this.defaultCity);
    }

    weather
      .getWeather(localStorage.getItem("city"))
      .then(weatherData => {
        ui.paint(weatherData);
      })
      .catch(err => console.log(err));
  }

  setData(city) {
    localStorage.setItem("city", city);
  }
}
