Foodies - React Native Restaurant Finder App
This project is a React Native App built using Expo. It uses Firebase Authentication for user authentication and the Google Maps API to locate restaurants near the user's current location.

Features
Firebase Authentication: Secure user signup, login, and logout.
Google Maps Integration: Displays nearby restaurants based on the user's location.
Expo Location Services: Utilizes the phone's GPS to determine the user's position.
Getting Started
Prerequisites
NodeJs(LTS) installed on your system.
Expo Go installed on a physical device
Firebase account for authentication setup.
Google Maps API Key for location services.
VS Code or any other preferred code editor or IDE installed.
Installation
cd Foodies
Install Dependencies:
npm install
Add your Google Maps API Key:
Open the HomeScreen.js file. Replace '' with your Google API key:

  const GOOGLE_API_KEY = '<your-google-maps-api-key>';
Configure Firebase:
Open the firebase.config.js file. Add your Firebase configuration:

const firebaseConfig = {
apiKey: "<your-api-key>",
authDomain: "<your-auth-domain>",
projectId: "<your-project-id>",
storageBucket: "<your-storage-bucket>",
messagingSenderId: "<your-messaging-sender-id>",
appId: "<your-app-id>"
};
Start the Expo server:
npx expo start

Dependencies
Expo
React Native
Firebase
React Native Maps
Firebase Authentication
