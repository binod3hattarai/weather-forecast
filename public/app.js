// Init weather
const weather = new Weather();

// Init storage
const storage = new Storage();

// Init ui
const ui = new UI();

// Getting El
const inputCityEl = document.getElementById("input-city");
const submitBtnEl = document.getElementById("submit-btn");
const autoDetectBtnEl = document.getElementById("auto-detect-btn");

document.addEventListener("DOMContentLoaded", storage.getData());

// listen for submitBtnEl 'click' event
submitBtnEl.addEventListener("click", function (e) {
  if (inputCityEl.value.trim() === "") {
    // show alert
    ui.showAlert();
  } else {
    weather
      .getWeather(inputCityEl.value.trim())
      .then(weatherData => {
        if (weatherData.success === false) {
          document.getElementById(
            "output"
          ).innerHTML = `<p class="rounded-sm p-1 mx-auto border border-red-400 bg-red-200 text-center text-red-600 text-lg md:w-6/12">City Not Found</p>`;

          // reset the input city field
          inputCityEl.value = "";
        } else {
          ui.paint(weatherData);
          storage.setData(weatherData.location.name);
        }
      })
      .catch(err => console.log("err", err));
  }
});

// listen for autoDetectBtnEl 'click' event
autoDetectBtnEl.addEventListener("click", function (e) {
  weather
    .autoDetect()
    .then(weatherData => {
      ui.paint(weatherData);
    })
    .catch(err => console.log(err));
});
