const weatherList = ["Clouds", "Clear", "Rain", "Mist"];
// 날씨 함수
const FuncWeather = (countryName, lat, lon) => {
  const API_key = "5bb21517a62ec8ea076e4e76cb0629b2";
  const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_key}&units=metric`;
  const getWeather = fetch(URL);

  getWeather
    .then((v) => v.json())
    .then(({ weather }) => {
      const info = document.querySelector(".info");
      info.innerHTML = "";
      info.innerText = `${countryName} is ${weather[0].main} !`;

      const main = document.querySelector("main");
      weatherList.forEach((v) => main.classList.remove(v));
      main.classList.add(weather[0].main);
    });
};

// 나라
const country = [
  { countryName: "Korea", lat: 37.566535, lon: 126.9779692 },
  { countryName: "Vietnam", lat: 21.0090571, lon: 105.8607507 },
  { countryName: "Thailand", lat: 13.7474567, lon: 100.5540311 },
  { countryName: "Taiwan", lat: 25.0671234, lon: 121.611452 },
];
country.forEach(({ countryName, lat, lon }) => {
  const btns = document.querySelector(".btns");
  const countryBtn = document.createElement("button");
  countryBtn.innerText = countryName.toUpperCase();
  btns.appendChild(countryBtn);

  countryBtn.addEventListener("click", () =>
    FuncWeather(countryName, lat, lon)
  );
});
