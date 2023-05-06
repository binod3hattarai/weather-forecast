class Weather {
  constructor() {
    this.accessKey = "de77345e310e0df291b1d97b1ba07085";
  }

  async getWeather(city) {
    document.getElementById("output").innerHTML = `
    <img src="./img/loading-buffering.gif" class="mx-auto mt-16 w-20 h-20" alt="loading" />
  `;
    const response = await fetch(
      `http://api.weatherstack.com/current?access_key=${this.accessKey}&query=${city}`
    );

    const responseData = await response.json();

    return responseData;
  }

  async autoDetect() {
    document.getElementById("output").innerHTML = `
    <img src="./img/loading-buffering.gif" class="mx-auto mt-16" alt="loading" />
  `;
    const response = await fetch(
      `http://api.weatherstack.com/current?access_key=${this.accessKey}&query=fetch:ip`
    );

    const responseData = await response.json();
    return responseData;
  }
}
