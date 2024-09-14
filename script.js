const apiUrl = "https://api.open-meteo.com/v1/forecast";
const geocodeApiUrl = "https://maps.googleapis.com/maps/api/geocode/json";

// Grumpy messages for each weather condition
const grumpyPhrases = {
    0: [
        "Oh, fantastic, another sunny day. Just what I didn't need.",
        "Sunshine everywhere. How original, like I haven't seen enough of this already.",
        "Clear sky again. Just my luck to have more glaring sunlight.",
        "More sunshine. Because my day wasn’t already blindingly bright enough.",
        "Perfect, clear skies. Just the thing to make me wish for some shade.",
        "Another sunny day. Brilliant. I was hoping for more of this.",
        "Clear and bright. Just what I needed to make my day even more unbearable.",
        "Sunshine without end. Can’t it just be a little less obnoxious?",
        "A day of clear skies, just what I needed to further ruin my mood.",
        "Bright and sunny. Exactly what you’d expect to make my day worse."
    ],
    1: [
        "Oh great, mostly clear skies. Just a bit more sun to annoy me.",
        "Partly clear. Fantastic. As if the weather needs to be just a little bit more annoying.",
        "Mostly clear skies. Wonderful, more sunshine to add to my misery.",
        "Just a few clouds. Perfect for keeping me annoyed without ruining the whole day.",
        "Clear with a few clouds. Because why make the weather straightforward?",
        "Mostly clear but with some clouds. As if it needed to be a little more irritating.",
        "Clear skies with some clouds. Just what I needed to make the day slightly worse.",
        "Partly clear. Great, as if it wasn’t already enough of a bother.",
        "Clear skies and a few clouds. Why can’t it just be one or the other?",
        "A mostly clear day. How original, and just perfect for enhancing my mood."
    ],
    2: [
        "Partly cloudy. Just what I needed to make everything a bit more dreary.",
        "Clouds scattered around. Exactly what makes my day even more tedious.",
        "A mix of sun and clouds. Perfect for a day that's already dragging.",
        "Partly cloudy, as if the weather needed to be just a little less pleasant.",
        "A blend of sunshine and clouds. Ideal for amplifying my dissatisfaction.",
        "Clouds and sun mixed. Because plain weather is too simple, right?",
        "Partly cloudy. Just the right mix of good and bad to ensure nothing changes.",
        "Sun and clouds alternating. Excellent for keeping me on edge.",
        "A sky with scattered clouds. Brilliant for making a boring day even worse.",
        "Partly cloudy skies. Perfect for matching my perpetually bad mood."
    ],
    3: [
        "Overcast. Just what I needed to match my grim outlook.",
        "Completely gray skies. A perfect reflection of how I feel today.",
        "Cloud-covered skies. Because my mood needed more dreariness.",
        "The sky is completely overcast. Just ideal for a day of unending gloom.",
        "Gray and dull. As if it could get any worse without this extra layer of misery.",
        "Overcast skies. Perfect for highlighting my lack of enthusiasm.",
        "A sky full of clouds. Just the right touch to ruin an already bad day.",
        "Everything is covered in gray. Exactly what I wanted for this dismal day.",
        "Completely clouded. A wonderful way to make sure the day stays miserable.",
        "Clouds everywhere. How fitting for a day that’s already completely uninspiring."
    ],
    45: [
        "Thick fog. Because I needed more difficulty seeing my own disappointment.",
        "Dense fog. Perfect for hiding my sorrow and making the day even worse.",
        "Fog so thick you can barely see. Exactly what I needed for a day of gloom.",
        "A world wrapped in fog. Ideal for ensuring nothing gets any better.",
        "Heavy fog. Just what I needed to feel even more isolated from the world.",
        "Fog covering everything. Just right for hiding from the few good things in life.",
        "Thick fog everywhere. Perfect for making sure nothing can brighten the day.",
        "Dense fog. The kind of weather that makes everything seem as dismal as my mood.",
        "Fog so thick you can barely see a thing. Brilliant for hiding all my frustrations.",
        "A foggy day. Excellent for making everything feel even more dreary."
    ],
    48: [
        "Fog with rime. Because why not add some ice to the already miserable day?",
        "Rime fog. Just perfect for making everything colder and more unpleasant.",
        "Frosty fog. Exactly what I needed to make this day even more unbearable.",
        "Fog with rime. Because the weather needs to be extra annoying today.",
        "Ice and fog combined. Ideal for ensuring nothing improves today.",
        "Frosty fog everywhere. Just what I needed to chill both body and soul.",
        "A mix of fog and rime. Because it wasn’t cold enough already.",
        "Rime-covered fog. Just right for adding an extra layer of misery to the day.",
        "Fog with a coating of frost. Perfect for making sure the day stays unpleasant.",
        "Frosty and foggy. Ideal for ensuring my mood remains as cold as the weather."
    ],
    51: [
        "Light drizzle. Just enough to make the day a bit more annoying.",
        "A bit of drizzle. Perfect for making a bad day just a little worse.",
        "Light rain showers. Ideal for maintaining a constant level of irritation.",
        "Slight drizzle. Just enough to dampen your mood without ruining your plans.",
        "Drizzling lightly. Exactly what you need to keep your day from being too pleasant.",
        "A light drizzle. Perfect for ensuring nothing gets any better.",
        "Drizzle with a gentle touch. Just the thing to make sure you stay slightly miserable.",
        "Light rain falling. Ideal for making sure the day remains just a bit more irritating.",
        "A bit of drizzle. Just what’s needed to keep things from being too cheery.",
        "Light rain showers. Excellent for maintaining a constant level of dissatisfaction."
    ],
    53: [
        "Moderate drizzle. Perfect for ensuring the day stays consistently unpleasant.",
        "A steady drizzle. Just the right amount of rain to keep things irritating.",
        "Moderate rain showers. Ideal for making a bad day just a bit worse.",
        "Drizzle with a bit more intensity. Perfect for maintaining a constant level of gloom.",
        "Moderate drizzle. Just enough to keep you from enjoying anything.",
        "Persistent drizzle. Exactly what you need to make everything feel more dreary.",
        "A moderate drizzle. Perfect for ensuring your mood stays as bad as the weather.",
        "Rainy drizzle, not too heavy. Just what’s needed to keep the day from improving.",
        "A consistent drizzle. Ideal for amplifying your existing frustration.",
        "Moderate rain. Just the right level of discomfort to keep things from being bearable."
    ],
    55: [
        "Dense drizzle. Perfect for making sure your day stays thoroughly miserable.",
        "Heavy drizzle. Just what’s needed to turn a bad day into a worse one.",
        "Drizzle with dense intensity. Ideal for maintaining a high level of dissatisfaction.",
        "Persistent and heavy drizzle. Perfect for ensuring nothing gets any better.",
        "A dense drizzle. Just the right amount of rain to keep things irritating.",
        "Heavy drizzle falling. Excellent for making sure the day stays thoroughly unpleasant.",
        "A thick drizzle. Just what you need to make sure nothing improves.",
        "Drizzle with high intensity. Ideal for making everything feel just a bit more annoying.",
        "Dense and heavy drizzle. Perfect for making sure your mood matches the weather.",
        "A day of heavy drizzle. Just what you needed to ensure things stay miserable."
    ],
    61: [
        "Light rain. Perfect for keeping things just a little bit uncomfortable.",
        "Slight rain showers. Just enough to make you wish for better weather.",
        "Light rain falling. Ideal for ensuring your mood stays just as bad as the weather.",
        "A bit of light rain. Perfect for maintaining a constant level of dissatisfaction.",
        "Slight rain showers. Just what you need to keep your day from being too enjoyable.",
        "Light rain. Exactly what’s needed to enhance your existing frustration.",
        "Drizzling lightly. Perfect for ensuring the day stays just a bit more dreary.",
        "Slight rain. Ideal for making everything feel just a little more irritating.",
        "Light rain showers. Just enough to make sure your day stays consistently bad.",
        "A bit of light rain. Perfect for keeping the mood low without complete disaster."
    ],
    63: [
        "Moderate rain. Perfect for making a bad day just a bit worse.",
        "Consistent moderate rain showers. Ideal for maintaining a high level of irritation.",
        "Rain falling steadily. Just what you need to keep things from getting better.",
        "Moderate rain. Perfect for ensuring your mood stays just as bad as the weather.",
        "Moderate rain showers. Ideal for keeping things thoroughly unpleasant.",
        "A steady moderate rain. Just what’s needed to enhance your existing frustration.",
        "Moderate rain. Perfect for making sure nothing improves today.",
        "Consistent moderate rain. Just enough to make everything feel more dismal.",
        "Rain falling moderately. Ideal for ensuring the day stays thoroughly irritating.",
        "Moderate rain showers. Just what you need to make sure your mood matches the weather."
    ],
    65: [
        "Heavy rain. Perfect for ensuring your day stays as miserable as possible.",
        "Intense and heavy rain showers. Just what’s needed to make everything worse.",
        "Rain falling heavily. Ideal for amplifying your existing frustrations.",
        "Heavy rain showers. Perfect for making sure nothing improves today.",
        "A day of torrential rain. Just what’s needed to ensure your mood stays as bad as the weather.",
        "Heavy rain. Ideal for maintaining a constant level of discomfort.",
        "Rain pouring down heavily. Perfect for keeping the day thoroughly unpleasant.",
        "A heavy downpour. Just what’s needed to make sure you stay as miserable as possible.",
        "Heavy rain showers. Ideal for ensuring the day remains a complete disaster.",
        "Torrential rain. Just the right amount of misery to match your mood."
    ],
    66: [
        "Light freezing rain. Just what’s needed to make everything even more unpleasant.",
        "Slight freezing rain. Perfect for keeping your day just a bit more uncomfortable.",
        "Freezing rain, light intensity. Ideal for ensuring your mood matches the weather.",
        "Light freezing rain. Just enough to add a touch of misery to your day.",
        "Slightly freezing rain. Perfect for ensuring your day stays icy and irritating.",
        "Freezing rain with a light touch. Just what you need to keep things from improving.",
        "Light freezing rain. Ideal for making sure your mood stays just as cold as the weather.",
        "Slight freezing rain showers. Perfect for making everything feel just a bit worse.",
        "Freezing rain, light intensity. Just what’s needed to keep the day unpleasant.",
        "A touch of freezing rain. Ideal for ensuring your mood stays chilly and irritable."
    ],
    67: [
        "Heavy freezing rain. Just perfect for making everything feel even worse.",
        "Intense freezing rain. Ideal for keeping your day as miserable as possible.",
        "Freezing rain, heavy intensity. Perfect for ensuring nothing gets any better.",
        "Heavy freezing rain showers. Just what’s needed to add extra misery to your day.",
        "Torrential freezing rain. Ideal for making sure the weather matches your bad mood.",
        "Heavy and freezing rain. Perfect for a day of unending discomfort.",
        "Intense freezing rain. Just what you need to make everything feel even worse.",
        "Heavy freezing rain. Ideal for ensuring your day remains as bad as it can get.",
        "Freezing rain falling heavily. Perfect for amplifying your existing frustrations.",
        "A day of heavy freezing rain. Just right for ensuring nothing improves."
    ],
    71: [
        "Light snow. Just enough to make everything a bit more difficult.",
        "Slight snow showers. Perfect for keeping the day cold and uncomfortable.",
        "Light snowfall. Ideal for ensuring your day stays just a bit worse.",
        "A touch of snow. Just enough to make sure you don’t forget how bad the day is.",
        "Snow falling lightly. Perfect for maintaining a constant level of irritation.",
        "Light snow showers. Ideal for ensuring your mood stays as cold as the weather.",
        "Snow, light intensity. Just what you need to add a bit more discomfort to your day.",
        "A little bit of snow. Perfect for ensuring nothing improves today.",
        "Light snowfall. Ideal for keeping things just a bit more miserable.",
        "Slight snow showers. Just the right amount of weather to make your day worse."
    ],
    73: [
        "Moderate snow. Ideal for making a bad day just a bit worse.",
        "Consistent moderate snowfall. Perfect for ensuring your day stays chilly and unpleasant.",
        "Moderate snow showers. Just what you need to keep everything from getting better.",
        "Snow falling moderately. Ideal for amplifying your existing frustrations.",
        "Moderate snowfall. Just the right level of discomfort to keep things from improving.",
        "Snow showers, moderate intensity. Perfect for ensuring your day stays cold and miserable.",
        "Consistent moderate snow. Ideal for making everything feel just a bit worse.",
        "Moderate snow. Just enough to ensure your mood stays as bad as the weather.",
        "Snowfall with moderate intensity. Perfect for maintaining a high level of dissatisfaction.",
        "Moderate snow showers. Just the right amount of cold to make everything worse."
    ],
    75: [
        "Heavy snow. Perfect for ensuring your day stays as miserable as possible.",
        "Intense snowfall. Ideal for keeping everything from getting any better.",
        "Heavy snow showers. Just what’s needed to make sure nothing improves.",
        "Torrential snow. Perfect for amplifying your existing frustrations.",
        "Heavy snowfall. Ideal for ensuring the day remains a complete disaster.",
        "Snow falling heavily. Just the right amount of misery to match your mood.",
        "Heavy snow showers. Perfect for maintaining a high level of discomfort.",
        "Intense and heavy snow. Ideal for making sure everything stays as bad as it can be.",
        "Heavy snow. Just what’s needed to add an extra layer of misery to your day.",
        "Torrential snow showers. Perfect for ensuring nothing gets any better."
    ],
    77: [
        "Snow grains. Just enough to make everything feel even more uncomfortable.",
        "A touch of snow grains. Perfect for maintaining a high level of irritation.",
        "Snow grains falling. Just what you need to ensure the day stays chilly and unpleasant.",
        "Light snow grains. Ideal for making everything feel a bit more annoying.",
        "A bit of snow grains. Perfect for keeping the day just as miserable as possible.",
        "Snow grains. Ideal for adding a touch of discomfort to your already bad day.",
        "Snow grains. Just the right amount of weather to keep everything irritating.",
        "A day with snow grains. Perfect for ensuring your mood matches the weather.",
        "Snow grains falling lightly. Just what’s needed to keep the day consistently bad.",
        "A little bit of snow grains. Ideal for maintaining a constant level of dissatisfaction."
    ],
    80: [
        "Light rain showers. Perfect for keeping things just a bit more irritating.",
        "Slight rain showers. Ideal for maintaining a constant level of discomfort.",
        "Light rain showers. Just enough to ensure your mood stays as bad as the weather.",
        "A few light rain showers. Perfect for keeping everything just a bit more unpleasant.",
        "Drizzle with light showers. Ideal for making sure the day remains irritating.",
        "Light rain showers. Perfect for amplifying your existing frustrations.",
        "Slight rain showers. Just what you need to keep things from improving.",
        "A day of light rain showers. Ideal for ensuring your mood stays damp and miserable.",
        "Light rain showers. Just the right amount of weather to make everything worse.",
        "A touch of light rain showers. Perfect for maintaining a high level of dissatisfaction."
    ],
    81: [
        "Moderate rain showers. Just what you need to keep things from getting better.",
        "A steady moderate rain shower. Perfect for making your day just a bit worse.",
        "Moderate rain showers. Ideal for ensuring the day stays thoroughly unpleasant.",
        "Consistent moderate rain showers. Just what’s needed to keep your mood low.",
        "Moderate rain falling. Perfect for amplifying your existing frustrations.",
        "Rain showers with moderate intensity. Ideal for maintaining a high level of irritation.",
        "A bit of moderate rain. Just what you need to ensure the day stays miserable.",
        "Moderate rain showers. Perfect for ensuring your mood matches the weather.",
        "Rain falling moderately. Ideal for keeping things just a bit more irritating.",
        "A day of moderate rain showers. Just the right amount of weather to keep everything unpleasant."
    ],
    82: [
        "Violent rain showers. Just perfect for making everything feel worse.",
        "Heavy rain showers. Ideal for ensuring your day stays as miserable as possible.",
        "Intense and violent rain showers. Just what you need to keep the day from improving.",
        "Torrential rain showers. Perfect for amplifying your existing frustrations.",
        "Heavy and violent rain. Ideal for ensuring nothing gets any better.",
        "Intense rain showers. Perfect for keeping your day thoroughly unpleasant.",
        "A day of violent rain showers. Just what’s needed to make sure nothing improves.",
        "Heavy rain falling. Ideal for maintaining a constant level of discomfort.",
        "Violent rain showers. Just the right amount of misery to match your mood.",
        "A torrential downpour. Perfect for ensuring your day remains a complete disaster."
    ],
    85: [
        "Light snow showers. Just enough to make the day a bit more difficult.",
        "Slight snow showers. Ideal for maintaining a high level of irritation.",
        "Light snow showers. Perfect for making everything feel just a bit more annoying.",
        "A bit of light snow. Just what you need to keep your day from being too pleasant.",
        "Snow showers with light intensity. Ideal for ensuring the day stays chilly and uncomfortable.",
        "Slight snow showers. Just what’s needed to make your day a bit more miserable.",
        "A touch of light snow. Perfect for ensuring nothing improves today.",
        "Snow falling lightly. Ideal for keeping the day just a bit more dismal.",
        "Light snow showers. Just right for adding a bit of difficulty to your day.",
        "A day with light snow showers. Perfect for ensuring everything stays chilly."
    ],
    86: [
        "Heavy snow showers. Perfect for making sure your day stays as miserable as possible.",
        "Intense snowfall. Ideal for keeping everything from improving.",
        "Heavy snow showers. Just the right amount of weather to make your day worse.",
        "Torrential snow. Ideal for amplifying your existing frustrations.",
        "Heavy snowfall. Perfect for ensuring nothing gets any better.",
        "Snow falling heavily. Just what’s needed to keep the day thoroughly unpleasant.",
        "Heavy snow showers. Perfect for maintaining a high level of discomfort.",
        "Intense and heavy snow. Just the right amount of misery to match your mood.",
        "Heavy snow showers. Ideal for making sure everything remains as bad as it can be.",
        "A day of heavy snow showers. Perfect for ensuring nothing improves."
    ],
    95: [
        "Thunderstorms. Just perfect for adding some extra drama to a bad day.",
        "Severe thunderstorms. Ideal for ensuring your day remains a complete disaster.",
        "Thunderstorms with intensity. Just what you need to make everything feel worse.",
        "Intense thunderstorms. Perfect for keeping your day thoroughly unpleasant.",
        "Severe storms. Just right for amplifying your existing frustrations.",
        "Thunderstorms raging. Ideal for ensuring nothing gets any better.",
        "Severe thunderstorms. Perfect for making sure your day is as miserable as possible.",
        "Intense thunder and lightning. Just what’s needed to match your bad mood.",
        "Thunderstorms with high intensity. Ideal for making sure your day stays disastrous.",
        "A day of severe thunderstorms. Just right for ensuring your mood matches the weather."
    ],
    96: [
        "Severe thunderstorms with hail. Perfect for ensuring your day is as miserable as possible.",
        "Intense thunderstorms with hail. Just what you need to add extra discomfort to your day.",
        "Thunderstorms with heavy hail. Ideal for making everything feel worse.",
        "Severe storms with hail. Perfect for maintaining a high level of dissatisfaction.",
        "Intense thunderstorms and hail. Just what’s needed to ensure nothing gets any better.",
        "Heavy hail with thunderstorms. Ideal for amplifying your existing frustrations.",
        "Severe hailstorms. Just the right amount of misery to match your mood.",
        "Intense thunderstorms with severe hail. Perfect for ensuring your day remains disastrous.",
        "Thunderstorms with intense hail. Just what you need to make everything worse.",
        "Severe thunderstorms with heavy hail. Perfect for ensuring nothing improves today."
    ],
    99: [
        "Tornadoes. Just perfect for making everything feel even more disastrous.",
        "Severe tornado activity. Ideal for ensuring your day remains as terrible as possible.",
        "Tornadoes and high winds. Just what you need to add extra chaos to your day.",
        "Intense tornado activity. Perfect for amplifying your existing frustrations.",
        "Severe tornadoes. Just the right amount of misery to make everything feel worse.",
        "Tornadoes with high intensity. Ideal for keeping your day thoroughly disastrous.",
        "Severe tornado activity. Just what’s needed to ensure nothing improves.",
        "Intense tornadoes. Perfect for ensuring your mood matches the chaotic weather.",
        "Tornadoes and severe winds. Ideal for maintaining a high level of discomfort.",
        "A day with severe tornadoes. Just right for making everything feel even more catastrophic."
    ]
};

const weatherConditions = {
    0: "Clear sky",
    1: "Mainly clear",
    2: "Partly cloudy",
    3: "Overcast",
    45: "Fog",
    48: "Depositing rime fog",
    51: "Light drizzle",
    53: "Moderate drizzle",
    55: "Dense drizzle",
    56: "Light freezing drizzle",
    57: "Dense freezing drizzle",
    61: "Light rain",
    63: "Moderate rain",
    65: "Heavy rain",
    66: "Light freezing rain",
    67: "Heavy freezing rain",
    71: "Light snow fall",
    73: "Moderate snow fall",
    75: "Heavy snow fall",
    77: "Snow grains",
    80: "Light rain showers",
    81: "Moderate rain showers",
    82: "Violent rain showers",
    85: "Light snow showers",
    86: "Heavy snow showers",
    95: "Thunderstorm",
    96: "Thunderstorm with slight hail",
    99: "Thunderstorm with heavy hail",
    default: "Unknown"
};

// Function to get a random grumpy message based on weather code
function getRandomGrumpyMessage(weatherCode) {
    if (grumpyPhrases[weatherCode]) {
        const messages = grumpyPhrases[weatherCode];
        const randomIndex = Math.floor(Math.random() * messages.length);
        return messages[randomIndex];
    } else {
        return "I don't even care what the weather is. It's probably awful.";
    }
}

// Function to initialize Google Places Autocomplete for city input
function initializeAutocomplete() {
    const input = document.getElementById('city');
    if (input) {
        console.log("Initializing Google Places Autocomplete...");
        const autocomplete = new google.maps.places.Autocomplete(input, {
            types: ['(cities)'],
        });

        // Set up listener for when a place is selected
        autocomplete.addListener('place_changed', function () {
            const place = autocomplete.getPlace();
            console.log("Place changed:", place);
            if (place.geometry) {
                const latitude = place.geometry.location.lat();
                const longitude = place.geometry.location.lng();
                const cityName = place.name;
                // Redirect to weather page with query parameters
                window.location.href = `weather.html?latitude=${latitude}&longitude=${longitude}&city=${encodeURIComponent(cityName)}`;
            } else {
                alert("City not found. Please try again.");
            }
        });
    } else {
        console.error("City input element not found.");
    }
}

// Function to get query parameters from the URL
function getQueryParams() {
    const params = new URLSearchParams(window.location.search);
    return {
        latitude: params.get('latitude'),
        longitude: params.get('longitude'),
        city: params.get('city') || "Unknown City"
    };
}

// Function to get the city name from coordinates using Google Geocoding API
function getCityNameFromCoords(latitude, longitude) {
    const apiKey = "GOOGLEAPIKEY"; // Insert your API key here
    const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${apiKey}&language=en`;

    return fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.results && data.results.length > 0) {
                const addressComponents = data.results[0].address_components;
                const cityComponent = addressComponents.find(component => component.types.includes("locality"));
                return cityComponent ? cityComponent.long_name : "Unknown City";
            } else {
                return "Unknown City";
            }
        })
        .catch(error => {
            console.error("Error fetching city name:", error);
            return "Unknown City";
        });
}

// Function to fetch weather data based on coordinates
function getWeatherByCoords(latitude, longitude) {
    fetch(`${apiUrl}?latitude=${latitude}&longitude=${longitude}&current_weather=true&hourly=weathercode,temperature_2m&daily=weathercode,temperature_2m_max,temperature_2m_min&timezone=Europe%2FRome&forecast_days=16`)
        .then(response => response.json())
        .then(data => {
            const weatherCode = data.current_weather.weathercode;
            const temperature = data.current_weather.temperature;
            const hourlyForecast = data.hourly;
            const dailyForecast = data.daily;
            displayWeatherDetails(weatherCode, temperature, hourlyForecast, dailyForecast);
        })
        .catch(error => {
            console.error("Error fetching weather data:", error);
            document.getElementById("weather-result").textContent = "Error fetching weather data.";
        });
}

// Function to display weather details
function displayWeatherDetails(weatherCode, temperature, hourlyForecast, dailyForecast) {
    const grumpyMessage = getRandomGrumpyMessage(weatherCode);
    const weatherCondition = weatherConditions[weatherCode] || weatherConditions.default;

    // Set main information if the element exists
    if (document.getElementById('city-name')) {
        const params = getQueryParams(); // Retrieve URL parameters
        document.getElementById('city-name').textContent = params.city; // Set city name
        document.getElementById('grumpy-comment').textContent = grumpyMessage;
        document.getElementById('weather-condition').textContent = weatherCondition;
        document.getElementById('temperature').textContent = `Temperature: ${temperature}°C`;

        // Handle hourly forecast
        let hourlyReport = '';
        if (hourlyForecast) {
            const times = hourlyForecast.time;
            const weatherCodes = hourlyForecast.weathercode;
            const temperatures = hourlyForecast.temperature_2m;

            for (let i = 0; i < 24 && i < times.length; i++) {
                const time = new Date(times[i]);
                const hourWeatherCode = weatherCodes[i];
                const hourTemperature = temperatures[i];
                const hour = time.getHours().toString().padStart(2, '0'); // Format hour with leading zero

                hourlyReport += `<p>${hour}: ${weatherConditions[hourWeatherCode] || "Unknown"}, ${hourTemperature}C</p>`;
            }
        }

        document.getElementById('hourly-forecast-title').innerHTML = '<h2>Today</h2>';
        document.getElementById('hourly-forecast-content').innerHTML = hourlyReport;

        // Handle daily forecast
        let dailyReport = '';
        if (dailyForecast && dailyForecast.time) {
            // Limit to the next 14 days if available
            const daysToShow = Math.min(14, dailyForecast.time.length);

            for (let i = 0; i < daysToShow; i++) {
                const time = dailyForecast.time[i];
                const dayWeatherCode = dailyForecast.weathercode[i];
                const maxTemp = dailyForecast.temperature_2m_max[i];
                const minTemp = dailyForecast.temperature_2m_min[i];
                const date = new Date(time).toLocaleDateString(undefined, { day: '2-digit', month: '2-digit' });

                dailyReport += `<p>${date}: ${weatherConditions[dayWeatherCode] || "Unknown"}, ${minTemp}C/${maxTemp}C</p>`;
            }
        }

        document.getElementById('daily-forecast-title').innerHTML = '<h2>Next 14 Days</h2>';
        document.getElementById('daily-forecast-content').innerHTML = dailyReport;
    }
}

// Function to handle "Use My Location" button
function handleGeoButton() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            const { latitude, longitude } = position.coords;
            getCityNameFromCoords(latitude, longitude)
                .then(cityName => {
                    window.location.href = `weather.html?latitude=${latitude}&longitude=${longitude}&city=${encodeURIComponent(cityName)}`;
                });
        }, () => {
            alert("Unable to retrieve your location.");
        });
    } else {
        alert("Geolocation is not supported by your browser.");
    }
}

// Function to handle location form submission
function handleLocationForm() {
    document.getElementById("location-form").addEventListener("submit", function (event) {
        event.preventDefault();
        const city = document.getElementById("city").value;
        if (city) {
            const autocomplete = new google.maps.places.Autocomplete(document.getElementById('city'), {
                types: ['(cities)']
            });

            autocomplete.addListener('place_changed', function () {
                const place = autocomplete.getPlace();
                if (place.geometry) {
                    const latitude = place.geometry.location.lat();
                    const longitude = place.geometry.location.lng();
                    window.location.href = `weather.html?latitude=${latitude}&longitude=${longitude}&city=${encodeURIComponent(place.name)}`;
                } else {
                    alert("City not found. Please try again.");
                }
            });

            autocomplete.setBounds(new google.maps.LatLngBounds(new google.maps.LatLng(-90, -180), new google.maps.LatLng(90, 180)));
        } else {
            alert("Please enter a city.");
        }
    });
}

// Function to handle page load and routing
function handlePageLoad() {
    if (window.location.pathname.endsWith('index.html')) {
        initializeAutocomplete();
        document.getElementById("geo-button").addEventListener("click", handleGeoButton);
        handleLocationForm();
    } else if (window.location.pathname.endsWith('weather.html')) {
        const params = getQueryParams();
        if (params.latitude && params.longitude) {
            getWeatherByCoords(params.latitude, params.longitude);
        } else {
            document.getElementById("weather-result").textContent = "No location provided.";
        }
        handleBackButton(); // Add this line
    }
}

// Function to handle click on "Back" button
function handleBackButton() {
    const backButton = document.getElementById('back-button');
    if (backButton) {
        backButton.addEventListener('click', () => {
            window.location.href = 'index.html';
        });
    }
}

// Initialize when the page loads
window.onload = handlePageLoad;

document.addEventListener("DOMContentLoaded", function() {
    const cookieBanner = document.getElementById('cookie-banner');
    const acceptCookies = document.getElementById('accept-cookies');
    const cookieExpiryDays = 30; // Imposta il numero di giorni

    const cookiesAccepted = localStorage.getItem('cookiesAccepted');
    const acceptanceDate = localStorage.getItem('cookiesAcceptedDate');
    const currentDate = new Date();

    if (!cookiesAccepted || (acceptanceDate && (currentDate - new Date(acceptanceDate)) > cookieExpiryDays * 24 * 60 * 60 * 1000)) {
        // Mostra la barra dei cookie se non è mai stata accettata o sono passati più di 30 giorni
        cookieBanner.style.display = 'block';
    }

    acceptCookies.addEventListener('click', function() {
        localStorage.setItem('cookiesAccepted', 'true');
        localStorage.setItem('cookiesAcceptedDate', currentDate.toISOString()); // Salva la data di accettazione
        cookieBanner.style.display = 'none';
    });
});