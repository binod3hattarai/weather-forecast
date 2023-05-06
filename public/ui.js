class UI {
  constructor() {
    this.outputEl = document.getElementById("output");
  }
  paint(weather) {
    const output = `
      <div class="text-lg text-center">
        <p class="font-bold py-5 border-b border-gray-200 text-xl">
          ${weather.location.name}, ${weather.location.country}
        </p>

        <p class="font-bold py-5 border-b border-gray-200">
          ${weather.current.weather_descriptions[0]}
        </p>

        <p class="font-bold py-5 border-b border-gray-200">
          ${weather.current.temperature}&#8451;
        </p>

        <p class="font-bold py-5 border-b border-gray-200">
          <img class="rounded-full mx-auto" src="${
            weather.current.weather_icons[0]
          }" alt="weather icon"/>
        </p>
        
        <ul>
          <li class="font-bold py-5 border-b border-gray-200">
            <span class="text-gray-800">
              Wind Speed:
            </span>
            <span class="text-green-600">
              ${weather.current.wind_speed} kilometers/hour
            </span>
          </li>

          <li class="font-bold py-5 border-b border-gray-200">
            <span class="text-gray-800">
              Wind Degree: 
            </span>
            <span class="text-green-600">
              ${weather.current.wind_degree}
            </span>
          </li>

          <li class="font-bold py-5 border-b border-gray-200">
            <span class="text-gray-800">
              Wind Direction: 
            </span>
            <span class="text-green-600">
              ${weather.current.wind_dir}
            </span>
          </li>

          <li class="font-bold py-5 border-b border-gray-200">
            <span class="text-gray-800">
              Pressure: 
            </span>
            <span class="text-green-600">
              ${weather.current.pressure}MB (millibar)
            </span>
          </li>

          <li class="font-bold py-5 border-b border-gray-200">
            <span class="text-gray-800">
              Precipitation: 
            </span>
            <span class="text-green-600">
              ${weather.current.precip}MM (millimeters)
            </span>
          </li>

          <li class="font-bold py-5 border-b border-gray-200">
            <span class="text-gray-800">
              Humidity: 
            </span>
            <span class="text-green-600">
              ${weather.current.humidity}&#37;
            </span>
          </li>

          <li class="font-bold py-5 border-b border-gray-200">
            <span class="text-gray-800">
              Cloud Cover: 
            </span>
            <span class="text-green-600">
              ${weather.current.cloudcover}&#37;
            </span>
          </li>

          <li class="font-bold py-5 border-b border-gray-200">
            <span class="text-gray-800">
              Feels Like: 
            </span>
            <span class="text-green-600">
              ${weather.current.feelslike}&#8451;
            </span>
          </li>

          <li class="font-bold py-5 border-b border-gray-200">
            <span class="text-gray-800">
              UV Index: 
            </span>
            <span class="text-green-600">
              ${weather.current.uv_index}
            </span>
          </li>

          <li class="font-bold py-5 border-b border-gray-200">
            <span class="text-gray-800">
              Visibility: 
            </span>
            <span class="text-green-600">
              ${weather.current.visibility} kilometers
            </span>
          </li>

          <li class="font-bold py-5 border-b border-gray-200">
            <span class="text-gray-800">
              Is Day? 
            </span>
            <span class="text-green-600">
              ${weather.current.is_day.toUpperCase()}
            </span>
          </li>

          <li class="font-bold py-5 border-b border-gray-200">
            <span class="text-gray-800">
              Date &#38; Time: 
            </span>
            <span class="text-green-600">
              ${weather.location.localtime}
            </span>
          </li>
        </ul>
      </div>
    `;
    // render to the page
    this.outputEl.innerHTML = output;

    // testing
    // console.log(weather);

    // reset the input city field
    inputCityEl.value = "";
  }

  showAlert() {
    // set attribute and add tailwindcss classes
    inputCityEl.setAttribute("placeholder", "Please enter the city");
    inputCityEl.classList.add("placeholder-red-500", "border-red-500");

    // listen for focus event
    inputCityEl.addEventListener("focus", function () {
      inputCityEl.classList.remove("placeholder-red-500", "border-red-500");
      inputCityEl.setAttribute("placeholder", "City");
    });
    this.outputEl.innerHTML = "";
  }
}
