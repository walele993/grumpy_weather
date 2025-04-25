const apiUrl = "https://api.open-meteo.com/v1/forecast";
const geocodeApiUrl = "https://maps.googleapis.com/maps/api/geocode/json";

// Grumpy messages for each weather condition
const grumpyPhrases = {
  0: [
    "Clear sky. Oh great, the sky is clear. Big f***ing deal.",
    "Clear sky. Perfect day for doing nothing and realizing your life is pointless.",
    "Clear sky. So clear you can see how much of a waste of space you are.",
    "Clear sky. Who cares? Clear skies won’t fix your miserable existence.",
    "Clear sky. Yeah, clear sky. Too bad everything else is still crap.",
    "Clear sky. Another beautiful day to waste away and pretend everything’s fine.",
    "Clear sky. Oh, the sky’s clear. Like that changes anything about this hellhole.",
    "Clear sky. It’s clear, just like how clear it is that nothing matters."
  ],
  1: [
    "Mainly clear. Great, now the sky's mostly clear. Who gives a sh**?",
    "Mainly clear. Mostly clear skies and mostly pointless life. Congratulations.",
    "Mainly clear. Yeah, the sky’s mostly clear, and so is the futility of everything.",
    "Mainly clear. Clear enough to show you that nothing will ever improve.",
    "Mainly clear. Just another day where everything seems fine on the surface, but it’s not.",
    "Mainly clear. Mostly clear, but you’re still stuck in the same shitshow.",
    "Mainly clear. Clear skies. Still doesn’t change the fact that the world’s a dumpster fire.",
    "Mainly clear. The sky’s mostly clear, but the rest of your life is still a disaster."
  ],
  2: [
    "Partly cloudy. Oh, now we’ve got clouds to remind us how messed up things are.",
    "Partly cloudy. Some clouds, just like the few fleeting moments of hope in your life.",
    "Partly cloudy. Partly cloudy skies to match your partly miserable existence.",
    "Partly cloudy. Clouds coming in. Like they know how bad everything’s getting.",
    "Partly cloudy. Yeah, some clouds. Just enough to mess up whatever was left of your day.",
    "Partly cloudy. It’s cloudy enough to ruin your mood but not enough to make it stop raining.",
    "Partly cloudy. The clouds are here, like the chaos that never seems to end.",
    "Partly cloudy. The weather’s as confused as your shitty life decisions."
  ],
  3: [
    "Overcast. Perfect, it’s just gray and lifeless. Just like everything else.",
    "Overcast. A sky full of nothing. It’s almost like the world is mocking you.",
    "Overcast. Just overcast, like your endless overthinking and useless anxiety.",
    "Overcast. A sky as miserable as your existence. Enjoy the bleakness.",
    "Overcast. More clouds. They’re here to remind you that everything is going to hell.",
    "Overcast. Overcast, just like your outlook on life. No hope, just gray.",
    "Overcast. Gray skies. The weather’s just as tired of your bullshit as you are.",
    "Overcast. The sky is gray, and so is everything that’s going on around you."
  ],
  45: [
    "Fog. Just great. Now it's foggy. Because everything was too clear before.",
    "Fog. Can’t see a f***ing thing, just like your future. Enjoy.",
    "Fog. Perfect. Now we can’t see anything, just like the direction your life is going.",
    "Fog. The fog’s here to add another layer of misery to your already pointless day.",
    "Fog. It’s foggy, like everything’s being hidden from you. Too bad that’s how life feels.",
    "Fog. Great, now it’s foggy. As if life needed more confusion and despair.",
    "Fog. Foggy as hell. Can’t see through it. Can’t see through your damn life either.",
    "Fog. It's foggy. Just like how everything feels uncertain and meaningless."
  ],
  48: [
    "Depositing rime fog. Oh great, now it's freezing and foggy. Just f***ing perfect.",
    "Depositing rime fog. Freezing fog. Because things weren't already cold enough.",
    "Depositing rime fog. More fog and now it’s freezing. Like your hopes and dreams.",
    "Depositing rime fog. It's freezing and foggy. Just more crap to ruin your day.",
    "Depositing rime fog. Freezing fog, just like your cold, dead heart.",
    "Depositing rime fog. Fog’s here, and it’s freezing. No amount of warmth can save you.",
    "Depositing rime fog. Cold, foggy, and pointless. Just like everything else in life.",
    "Depositing rime fog. Freezing fog. Making sure everything stays stuck in the dark."
  ],
  51: [
    "Light drizzle. Oh, great. It’s drizzling. That’s enough to make today worse.",
    "Light drizzle. Just a light drizzle, and yet it still ruins everything.",
    "Light drizzle. Drizzling, like the universe is laughing at how much you suck.",
    "Light drizzle. A light drizzle. It’s barely enough to make you wet but still enough to ruin the mood.",
    "Light drizzle. Light rain, like the faint flicker of hope that never really shows up.",
    "Light drizzle. Drizzling now, just enough to remind you that nothing is easy.",
    "Light drizzle. Barely raining, but it's still making everything more miserable.",
    "Light drizzle. Just enough rain to make things uncomfortable, but not enough to fix anything."
  ],
  53: [
    "Moderate drizzle. Oh great, it’s drizzling more. Can’t wait to get even more wet.",
    "Moderate drizzle. Now it’s really drizzling. Just a bit more to ruin your day.",
    "Moderate drizzle. More drizzle. Who knew such a small thing could make life suck even more?",
    "Moderate drizzle. Drizzling heavily now, just enough to make your day more annoying.",
    "Moderate drizzle. More drizzle. Still doesn’t do anything to make things better.",
    "Moderate drizzle. The drizzle’s stronger. Like the f***ing universe wants you to suffer.",
    "Moderate drizzle. More rain, still not enough to fix the trainwreck that is your life.",
    "Moderate drizzle. It’s drizzling, and things are still not getting any better."
  ],
  55: [
    "Dense drizzle. Fantastic. Now it’s a heavy drizzle. Just f***ing lovely.",
    "Dense drizzle. Heavy drizzle. It’s ruining your day more than you could imagine.",
    "Dense drizzle. Oh, now it’s really coming down. What’s next? The end of the world?",
    "Dense drizzle. Just heavy drizzle, no big deal. Except it still makes everything worse.",
    "Dense drizzle. More drizzle. More misery. Just perfect.",
    "Dense drizzle. The drizzle’s intense now. Just another thing to make your life worse.",
    "Dense drizzle. It’s coming down hard now. Still won’t change the mess that is your life.",
    "Dense drizzle. More drizzle. The weather’s as relentless as your shitty situation."
  ],
  56: [
    "Light freezing drizzle. Oh great, now it's freezing and drizzling. Just perfect.",
    "Light freezing drizzle. Freezing drizzle. Just enough to make everything colder and worse.",
    "Light freezing drizzle. Freezing drizzle, like your frozen hopes and broken dreams.",
    "Light freezing drizzle. Freezing drizzle, just the universe laughing in your face.",
    "Light freezing drizzle. Light freezing rain. Still can’t get any worse, right?",
    "Light freezing drizzle. It’s cold and drizzling. Like life doesn’t want to leave you alone.",
    "Light freezing drizzle. It’s freezing and drizzling, just another f***ing inconvenience.",
    "Light freezing drizzle. Freezing drizzle. Making sure you stay miserable and wet."
  ],
  57: [
    "Dense freezing drizzle. Oh, fantastic. Now it’s freezing and drizzling heavily.",
    "Dense freezing drizzle. Freezing drizzle. It’s like the world’s just rubbing salt in the wound.",
    "Dense freezing drizzle. Heavy freezing drizzle, making sure you stay cold and miserable.",
    "Dense freezing drizzle. Freezing drizzle, ruining your day like everything else.",
    "Dense freezing drizzle. It’s cold, it’s drizzling. F***ing perfect.",
    "Dense freezing drizzle. Freezing drizzle. The world’s just adding more pain to your pile.",
    "Dense freezing drizzle. Heavy drizzle and freezing cold. It’s like the universe wants you to suffer.",
    "Dense freezing drizzle. Freezing drizzle, making sure you stay drenched and utterly f***ed."
  ],
  61: [
    "Light rain. Great, now it's raining lightly. Just what you needed.",
    "Light rain. Drizzling. Just enough to make sure you stay f***ing miserable.",
    "Light rain. Light rain, just enough to mess with your mood but not fix anything.",
    "Light rain. It’s raining lightly. Just enough to remind you how pointless things are.",
    "Light rain. Barely raining. But enough to ruin everything, as usual.",
    "Light rain. Light rain, as if you weren’t already feeling down enough.",
    "Light rain. It’s drizzling. Just enough to make sure your day stays uncomfortable.",
    "Light rain. Rainy enough to ruin your mood but not enough to make any real difference."
  ],
  63: [
    "Moderate rain. Oh, great. Now it’s raining harder. Just f***ing perfect.",
    "Moderate rain. It’s raining. As if today wasn’t bad enough.",
    "Moderate rain. It’s raining, just enough to make sure you’re f***ed and wet.",
    "Moderate rain. Harder rain. Just another reason to hate the world.",
    "Moderate rain. It’s coming down harder, still not enough to fix your life.",
    "Moderate rain. It’s raining more, and now it’s just even more depressing.",
    "Moderate rain. The rain’s coming down, just enough to make everything suck harder.",
    "Moderate rain. It’s raining, but it still won’t do shit to fix anything."
  ],
  65: [
    "Heavy rain. Of course, it’s pouring. As if life wasn’t bad enough.",
    "Heavy rain. Now it's pouring. Is this a metaphor for your emotional state?",
    "Heavy rain. Heavy rain. Just another shitty part of your shitty day.",
    "Heavy rain. It’s raining like the world’s falling apart. Which it probably is.",
    "Heavy rain. Yeah, it’s pouring. So what? The world’s always been a disaster.",
    "Heavy rain. It’s pouring. Just enough to make everything feel more hopeless.",
    "Heavy rain. Pouring rain. Just what you need to make sure you stay miserable.",
    "Heavy rain. The rain’s pouring, and so is your life. Nonstop."
  ],
  66: [
    "Light freezing rain. Freezing rain. Just perfect.",
    "Light freezing rain. Freezing rain, because why not add more f***ing misery?",
    "Light freezing rain. It’s freezing and raining. Like your life wasn’t cold enough already.",
    "Light freezing rain. Freezing rain, making sure nothing gets better.",
    "Light freezing rain. More freezing rain. Just enough to freeze your ass off.",
    "Light freezing rain. Freezing rain, because clearly, life hasn’t given you enough.",
    "Light freezing rain. Freezing rain, making your miserable day that much worse.",
    "Light freezing rain. Freezing rain, enough to make sure you feel even colder inside."
  ],
  67: [
    "Heavy freezing rain. It’s freezing and pouring rain. Just f***ing great.",
    "Heavy freezing rain. Freezing rain, pouring down hard. Like life’s giving you a reminder.",
    "Heavy freezing rain. Freezing rain, pouring like your hopes crashing down.",
    "Heavy freezing rain. It’s freezing, it’s raining. So much for having a good day.",
    "Heavy freezing rain. Pouring rain, freezing cold. Because life doesn’t know how to stop kicking you.",
    "Heavy freezing rain. It’s coming down hard and cold, just like your heart.",
    "Heavy freezing rain. Freezing rain, pouring down with no end in sight.",
    "Heavy freezing rain. It’s freezing and pouring. Perfect weather to feel hopeless."
  ],
  71: [
    "Light snow fall. Oh great, now it’s snowing lightly. Can’t wait to freeze my ass off.",
    "Light snow fall. Snowing lightly. Is this supposed to make me feel better?",
    "Light snow fall. Light snow. Just what I needed to make sure everything gets worse.",
    "Light snow fall. It’s snowing lightly. Whoop-de-f***ing-doo.",
    "Light snow fall. It’s snowing, but it won’t change anything, just like your life.",
    "Light snow fall. Light snow. Enough to cover your disappointment, but not enough to fix anything.",
    "Light snow fall. It’s snowing lightly. As if that makes your life any better.",
    "Light snow fall. Snowing lightly. Just more cold to make sure you stay miserable."
  ],
  73: [
    "Moderate snow fall. Now it's snowing more. Just f***ing great.",
    "Moderate snow fall. More snow. Like your life wasn’t already cold enough.",
    "Moderate snow fall. Snowing more now. Just to remind you that nothing’s going right.",
    "Moderate snow fall. Snowing more. Just perfect for making everything worse.",
    "Moderate snow fall. Snowing more, just enough to make your miserable day worse.",
    "Moderate snow fall. Snowing moderately. Just another f***ing reminder of how much you suck.",
    "Moderate snow fall. The snow's falling harder now, and so is your hope.",
    "Moderate snow fall. It’s snowing harder now, making everything colder and more pointless."
  ],
  75: [
    "Heavy snow fall. Oh great, now it’s snowing heavily. Because why the hell not?",
    "Heavy snow fall. Heavier snow. Just like your pile of f***ing problems.",
    "Heavy snow fall. It’s snowing more. It’s like the universe can’t stop piling on the misery.",
    "Heavy snow fall. Snowing heavily. Because the universe loves kicking you while you're down.",
    "Heavy snow fall. Snow falling heavily. What’s next? An avalanche of pain?",
    "Heavy snow fall. Snowing heavily, just to make sure you stay cold and miserable.",
    "Heavy snow fall. Heavy snow. Because things aren’t already hard enough for you.",
    "Heavy snow fall. Snowing heavily. It’s like the world’s snowballing your misery."
  ],
  77: [
    "Snow grains. Great, now we’ve got snow grains. Just another useless weather condition.",
    "Snow grains. What a perfect, tiny reminder that life is insignificant.",
    "Snow grains. A little snow, just enough to make you uncomfortable, but not enough to change anything.",
    "Snow grains. A few snow grains. It’s like they’re mocking you for thinking anything will improve.",
    "Snow grains. Yeah, it’s snowing a little. It’s still not going to fix your f***ing life.",
    "Snow grains. A bit of snow, just to add to your cold, pointless day.",
    "Snow grains. Just enough snow to make you hate everything, but not enough to care.",
    "Snow grains. Tiny bits of snow. It’s like the universe doesn’t even care enough to throw more at you."
  ],
  80: [
    "Light rain showers. Oh, great. Now it’s raining in showers. As if this day couldn’t get worse.",
    "Light rain showers. It’s raining lightly, just to remind you that life’s f***ing miserable.",
    "Light rain showers. Rain showers. Perfect. Just enough to make sure you feel crappy.",
    "Light rain showers. It’s raining in showers, just enough to ruin everything.",
    "Light rain showers. Showering rain, just like your emotional breakdown in progress.",
    "Light rain showers. More showers, just like the never-ending f***ing disappointments in your life.",
    "Light rain showers. Yeah, it’s raining in showers. Couldn’t get any worse.",
    "Light rain showers. Just rain showers, adding to your cold, rainy day of despair."
  ],
  81: [
    "Moderate rain showers. Great, now it’s pouring. Just what you needed to make your day worse.",
    "Moderate rain showers. Showers. Moderate enough to soak you, but not enough to give you relief.",
    "Moderate rain showers. Showers, moderate in intensity. Still doesn’t change how much your life sucks.",
    "Moderate rain showers. Heavy showers, as if you weren’t already soaking in disappointment.",
    "Moderate rain showers. It’s raining harder now. Doesn’t really help, does it?",
    "Moderate rain showers. It’s coming down harder. Just another rainstorm in the middle of your hellish day.",
    "Moderate rain showers. More rain. More disappointment. What a surprise.",
    "Moderate rain showers. The rain’s coming down harder, but it still can’t drown out the despair."
  ],
  82: [
    "Violent rain showers. Violent rain showers. Oh, now it's really coming down.",
    "Violent rain showers. Rainstorm's hard, like life’s kicked you in the teeth one more time.",
    "Violent rain showers. Violent rain, just to make you feel even worse than you already do.",
    "Violent rain showers. It’s pouring violently now, just like the pain you feel inside.",
    "Violent rain showers. Heavy, violent rain. As if today wasn’t already shitty enough.",
    "Violent rain showers. Pouring violently. Couldn’t get any more chaotic, could it?",
    "Violent rain showers. It's like the weather wants to outdo your internal chaos.",
    "Violent rain showers. Violent, chaotic rain, just to remind you that life’s a relentless f***ing storm."
  ],
  85: [
    "Light snow showers. Light snow showers, just enough to make everything colder.",
    "Light snow showers. Snow’s coming down lightly. Still doesn’t make your life any better.",
    "Light snow showers. Snow showers, just enough to remind you that you’re stuck in a frozen hell.",
    "Light snow showers. A light snowfall. Couldn’t have given you something worse?",
    "Light snow showers. Snowing lightly. Doesn’t matter. Everything's still a disaster.",
    "Light snow showers. Just enough snow to make sure you stay cold and disappointed.",
    "Light snow showers. Snowing lightly. Not that it’ll matter. Your life’s still frozen.",
    "Light snow showers. It’s snowing lightly. Just another cold reminder of your empty life."
  ],
  86: [
    "Heavy snow showers. Snowing heavily, just to make sure everything’s even more of a mess.",
    "Heavy snow showers. Snow showers are heavy now, just another f***ing nuisance in your life.",
    "Heavy snow showers. Oh great, now it’s snowing heavily. Just to pile on your misery.",
    "Heavy snow showers. Heavy snow. Like life wasn’t already cold enough.",
    "Heavy snow showers. Snowing heavily now. Just enough to freeze you to your f***ing soul.",
    "Heavy snow showers. Snowing heavily, like your life’s stuck in a perpetual freeze.",
    "Heavy snow showers. The snow’s piling up. Just like your disappointments.",
    "Heavy snow showers. Heavy snow. Everything’s piling up, just like your despair."
  ],
  95: [
    "Thunderstorm. Oh great, now it's a thunderstorm. Because this day needed more chaos.",
    "Thunderstorm. Thunderstorm’s here, just to make your horrible day even worse.",
    "Thunderstorm. It’s thunderstorming. As if your life wasn’t loud and painful enough.",
    "Thunderstorm. Thunderstorm. Because clearly, the world’s trying to blow up right in front of you.",
    "Thunderstorm. Oh great, now we’ve got thunder. Just what we needed.",
    "Thunderstorm. Thunderstorm. Just like your life—loud, chaotic, and a total disaster.",
    "Thunderstorm. A thunderstorm. Just to keep the misery and noise going.",
    "Thunderstorm. Thunderstorm. Because clearly, there’s no stopping this storm of f***ing failure."
  ],
  96: [
    "Thunderstorm with slight hail. A thunderstorm with hail. Now the weather’s just mocking you.",
    "Thunderstorm with slight hail. Thunder, lightning, and some f***ing hail.",
    "Thunderstorm with slight hail. Just to make sure your day’s complete with thunder and ice.",
    "Thunderstorm with slight hail. The storm's got a little hail now. Just to make sure you're really miserable.",
    "Thunderstorm with slight hail. Like the world can’t resist making it even worse.",
    "Thunderstorm with slight hail. Thunderstorm’s bad enough. Now it’s hailing too.",
    "Thunderstorm with slight hail. A bit of hail on top of the thunder. That’s just perfect.",
    "Thunderstorm with slight hail. Some hail, some thunder. Just the world’s way of making sure you suffer."
  ],
  99: [
    "Thunderstorm with heavy hail. A heavy hailstorm. Because clearly, the universe doesn’t care about you.",
    "Thunderstorm with heavy hail. It’s hailing now, as if the world wants to remind you how much it hates you.",
    "Thunderstorm with heavy hail. Hail’s coming down hard now. Just what you needed to make your day worse.",
    "Thunderstorm with heavy hail. Heavy hail. As if life wasn’t throwing enough crap at you.",
    "Thunderstorm with heavy hail. Thunderstorm with heavy hail. Perfect. More f***ing misery.",
    "Thunderstorm with heavy hail. The storm’s getting worse. It’s like the world wants to ruin everything.",
    "Thunderstorm with heavy hail. It’s hailing heavily, and no one’s stopping it. Just like your pain.",
    "Thunderstorm with heavy hail. Heavy hail, pouring down. Because clearly, things can always get worse."
  ],
  default: [
    "Unknown. The weather's so messed up even the forecast doesn’t know what’s going on. Join the club.",
    "Unknown. The weather’s a mystery, just like what’s next in your shitty life.",
    "Unknown. Who the hell knows what this is? It’s like your existence—pointless and confusing.",
    "Unknown. The weather's confused. Like you, just floating in a world of nonsense.",
    "Unknown. No one knows what the f*** is going on. Just like you.",
    "Unknown. It’s unknown, like the meaning of life. A total goddamn mystery.",
    "Unknown. Weather’s unknown. Just like everything else in this miserable world.",
    "Unknown. The weather doesn’t even know what it’s doing. Sound familiar?"
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
    const apiKey = "AIzaSyChdcfWbHvZVcGwU7cyuL-5sbPZiTAdlTU"; // Insert your API key here
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
