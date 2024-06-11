Weather App
This is a simple React application that fetches and displays real-time weather information for Mumbai using the OpenWeatherMap API.

Features
Fetches current weather data for Mumbai.
Displays temperature, humidity, wind speed, and weather description.
Handles loading state and displays errors if fetching fails.
Screenshot

Installation
Follow these steps to set up and run the project locally:

Clone the repository:


git clone https://github.com/shikhasingh0101/React/tree/main/weatherapi
Navigate to the project directory:


cd weather-app
Install the dependencies:


npm install
Obtain your API key from OpenWeatherMap.

Create a .env file in the root directory and add your API key:


REACT_APP_WEATHER_API_KEY=your_api_key_here
Start the development server:


npm start
Open your browser and go to http://localhost:3000 to see the app.

Usage
Initial View: When the app loads, it fetches weather data for Mumbai.
Display: The app shows the city name, temperature in Celsius, humidity, wind speed, and weather description.

Code Explanation:
State Management: Uses useState to manage the weather data and error state.
Effect Hook: Uses useEffect to fetch weather data when the component mounts.
API Call: Fetches data from the OpenWeatherMap API and updates the state with the result.
Error Handling: Displays an error message if the API call fails.
Display: Shows the weather information if data is available, otherwise shows a loading message.
Technologies Used
React for building the user interface.
Fetch API for making HTTP requests.
CSS for styling.
Contributing
Contributions are welcome! Please fork the repository and create a pull request with your changes. Ensure your code follows the existing style and conventions.

License
This project is licensed under the MIT License - see the LICENSE file for details.

Acknowledgements
OpenWeatherMap API for providing the weather data.
Create React App for the React environment setup.
