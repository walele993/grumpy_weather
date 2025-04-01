# 🌦️ Grumpy Weather

*Get weather updates with a side of grumpy humor!*

---

## 🚀 Introduction

**Grumpy Weather** is a **web-based tool** that combines weather data with sarcastic, grumpy comments. Developed as part of the **CS50x** course, this project uses **HTML**, **CSS**, and **JavaScript** to provide weather information for any city or location. It retrieves real-time weather data and delivers a grumpy response based on current conditions. Whether you're dealing with rain or sunshine, this app has an attitude!

### Key Features:
- 🌍 **City Search**: Enter a city name to get its weather details.
- 🌐 **Geolocation**: Get the weather for your current location.
- 📆 **Hourly Forecast**: Check out hourly weather predictions for the day.
- 📅 **Daily Forecast**: Get a 14-day weather outlook.
- 😤 **Grumpy Comments**: Get a sarcastic, humorous comment based on the weather conditions.

---

## 🛋️ Installation

### Prerequisites
- **Web Browser** (Chrome, Firefox, Safari, etc.)

### Installation Steps
1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/grumpy-weather.git
   cd grumpy-weather
   ```

2. **Run the app:**
   Open `index.html` in your browser, and you're all set!

---

## 💻 Usage

1. **Search for a city**: Enter a city name in the search bar and hit the "Search" button.
2. **Use geolocation**: Click on the "Use my location" button to get weather updates for your current location.
3. **View weather details**: Once the city is chosen, the page will display the weather details, hourly forecast, and daily forecast.
4. **Get your grumpy comment**: After fetching the weather, a sarcastic comment will be displayed, based on the current conditions.

---

## 🧠 How It Works

**Grumpy Weather** retrieves real-time weather data from the **Open Meteo API** and combines it with **Google Places API** for city name autocomplete and geolocation. The app fetches:
- **Current weather**: Temperature, humidity, and weather conditions.
- **Hourly forecast**: Weather breakdown for the next 24 hours.
- **Daily forecast**: Weather prediction for the next 14 days.

The app uses a random selection of grumpy comments to match each weather condition.

---

## 📝 Key Functions

### 🕹️ User Interaction
- **`initializeAutocomplete()`**: Sets up city search with Google Places Autocomplete.
- **`handleGeoButton()`**: Retrieves your current location and fetches weather details.
- **`getWeatherByCoords()`**: Gets weather data based on coordinates from geolocation.
- **`displayWeatherDetails()`**: Updates the page with weather information and forecast.
- **`getRandomGrumpyMessage()`**: Randomly selects a grumpy comment based on weather conditions.

---

## 🎨 Data & Design

The app uses **Open Meteo API** to fetch real-time weather data, while **Google Places API** helps with the city search and geolocation. The front-end is built with **HTML**, **CSS**, and **JavaScript** to provide a clean and responsive design.

---

## 💪 Future Enhancements

- 🤖 **AI Grumpy Comments**: Add a machine learning model to generate more personalized grumpy messages based on weather conditions.
- 🗺️ **Map View**: Show weather information on a map for a better user experience.
- 🌐 **Mobile App**: Create a native mobile app for more portable weather updates.
- 🌞 **Customizable Themes**: Allow users to customize the app’s theme based on personal preference (e.g., dark mode).

---

## 🏅 Contribution

1. **Fork** the repository
2. **Clone** your fork:
   ```bash
   git clone https://github.com/your-username/grumpy-weather.git
   ```
3. Create a **feature branch**:
   ```bash
   git checkout -b feature-improvement
   ```
4. **Push** changes & submit a **pull request**

---

## 🏁 Credits

This project was created by **Gabriele Meucci**. 🏁  
Weather data is provided by **Open Meteo API**.  
City search and geolocation powered by **Google Places API**.

---

*Ready to check the weather and enjoy a grumpy comment? Let's go!* 🌧️😤
