const API_KEY = "e01cc70b2705967a8741e0244db7e32f"

function onGeoOk(position) {
	const lat = position.coords.latitude;
	const lon = position.coords.longitude;
	const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
	fetch(url)
		.then((response) => response.json())
		.then((data) => {
			const weatherContainer = document.querySelector(
				"#weather span:first-child"
			);
			const cityContainer = document.querySelector(
				"#weather span:last-child"
			);
			cityContainer.innerText = data.name;
			weatherContainer.innerText = `${data.weather[0].main} / ${data.main.temp}`;
		});
}
function onGeoError(error) {
	console.log(error);
	alert("can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);