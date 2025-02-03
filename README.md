# Grumpy Weather

## Overview

The Grumpy Weather Application is a web-based tool designed to provide weather information with a humorous twist. This project was developed as part of the CS50x course to showcase web development skills using HTML, CSS, and JavaScript. The application allows users to search for weather information by city or use their current location to get local weather updates. It also provides a grumpy comment based on the current weather conditions.

## Features

- **City Search**: Users can enter a city name to get weather details.
- **Geolocation**: Users can use their current location to get weather information.
- **Hourly Forecast**: Provides an hourly breakdown of weather conditions for the current day.
- **Daily Forecast**: Displays weather forecasts for the next 14 days.
- **Grumpy Comments**: Shows a humorous comment based on the current weather conditions.

## Technologies Used

- **HTML**: For structuring the web pages.
- **CSS**: For styling the application. Includes a custom font and responsive design.
- **JavaScript**: For interactive features, including handling user input and fetching weather data.
- **Google Places API**: For city name auto-completion and geolocation features.
- **Open Meteo API**: For fetching weather data including current, hourly, and daily forecasts.

## File Structure

The project consists of the following files:

1. **`index.html`**: The main page where users can search for a city or use their current location.
2. **`weather.html`**: The page displaying the weather details for the selected city or current location.
3. **`styles.css`**: The main stylesheet for styling the application.
4. **`mobile.css`**: Stylesheet for mobile-specific design adjustments.
5. **`script.js`**: Contains JavaScript code for handling user interactions and API calls.
6. **`HemingVariable.ttf`**: Custom font used in the application.

## HTML Files

### `index.html`

This file serves as the entry point of the application. It includes a search form and a button to use the current location. The form has an input field for entering the city name, and two buttons for submitting the search or using the geolocation feature.

Key elements:
- **Form**: Contains an input field for city name and two buttons for search and geolocation.
- **Google Places Autocomplete**: Enhances the city input field with autocomplete suggestions.

### `weather.html`

This file displays detailed weather information for the selected city or current location. It shows the city name, current weather conditions, temperature, and grumpy comments. It also provides hourly and daily weather forecasts.

Key elements:
- **Weather Information**: Displays current weather conditions and temperature.
- **Hourly Forecast**: Shows a breakdown of weather conditions for the next 24 hours.
- **Daily Forecast**: Provides weather predictions for the next 14 days.
- **Back Button**: Allows users to return to the search page.

## CSS Files

### `styles.css`

This stylesheet contains the main styles for the application. It includes:
- General styles for the body and text.
- Specific styles for the search container, form, and buttons.
- Styling for the weather information and forecasts.

### `mobile.css`

This stylesheet is used for mobile-specific styles, applying only when the screen width is 768px or less and in portrait orientation. It ensures the application is responsive and looks good on mobile devices.

## JavaScript File

### `script.js`

The JavaScript file handles the application's functionality, including:
- **Autocomplete Initialization**: Sets up Google Places Autocomplete for the city input field.
- **Geolocation Handling**: Retrieves the user's current location and redirects to the weather page with the coordinates.
- **Weather Data Fetching**: Retrieves weather data from the Open Meteo API based on the city name or coordinates.
- **Data Display**: Updates the weather information and forecasts on the weather page.
- **Error Handling**: Provides feedback to users in case of errors or missing data.

### Key Functions

- `initializeAutocomplete()`: Sets up Google Places Autocomplete for city search.
- `handleGeoButton()`: Fetches the user's current location and redirects to the weather page.
- `getWeatherByCoords()`: Retrieves weather data based on coordinates and updates the weather details.
- `displayWeatherDetails()`: Displays weather conditions and forecasts on the weather page.
- `getRandomGrumpyMessage()`: Generates a humorous comment based on the weather conditions.

## APIs Used

### Google Places API

The Google Places API is used for city name autocomplete and geolocation features. It provides suggestions as users type in the city name and helps in retrieving the latitude and longitude of the selected city.

### Open Meteo API

The Open Meteo API is used to fetch weather data, including current conditions, hourly forecasts, and daily forecasts. It provides detailed weather information based on the provided coordinates.

## Future Improvements

- **User Authentication**: Add user accounts to save favorite cities or locations.
- **Enhanced Error Handling**: Improve error handling and user feedback for better user experience.
- **Additional Features**: Integrate more weather data, such as humidity, wind speed, and UV index.

## Conclusion

The Grumpy Weather Application is a simple yet functional web tool that combines weather information with a touch of humor. It demonstrates the use of modern web technologies and APIs to create an interactive and engaging user experience. This project highlights skills in front-end development, including HTML, CSS, and JavaScript, as well as working with third-party APIs.
Feel free to explore and modify the code to fit your needs or to add additional features. Happy coding!

## Credits

This project was created by Gabriele Meucci.
