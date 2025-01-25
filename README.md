# Pomodoro Clock

## Description

The **Pomodoro Clock** is a React-based application designed to help users manage their time using the Pomodoro technique. This clock alternates between work sessions and break periods, allowing users to focus on tasks effectively while ensuring adequate rest. The app includes adjustable session and break durations, a countdown timer, and an audio notification when a session or break ends.

## Features

- **Customizable Session and Break Durations:** Adjust session lengths (default: 25 minutes) and break lengths (default: 5 minutes).
- **Timer Countdown:** Displays the remaining time in minutes and seconds for the current session or break.
- **Play/Pause Functionality:** Start or pause the timer with a single click.
- **Reset Button:** Quickly reset the timer and lengths to default values.
- **Audio Alerts:** Plays a sound notification at the end of a session or break.
- **Responsive Design:** Built with Bootstrap for a clean and mobile-friendly user experience.

## Technologies Used

- **React** for building the user interface.
- **Bootstrap** for responsive styling.
- **JavaScript** for timer logic and user interaction.

## How It Works

1. Users can set the desired session and break lengths using the increment and decrement buttons.
2. Press the play/pause button to start or pause the timer.
3. When the session time ends, the app automatically switches to the break time (and vice versa).
4. An audio notification alerts users when the timer switches between sessions and breaks.
5. Press the reset button to return to default values and stop any running timer.

## Demo

You can view the deployed app on GitHub Pages [here](INSERT_GITHUB_PAGES_LINK).

---

## Installation and Usage

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/pomodoro-clock.git
   ```
2. Navigate to the project directory:
   ```bash
   cd pomodoro-clock
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Run the app:
   ```bash
   npm start
   ```
5. Open your browser and go to `http://localhost:3000`.

---

## Project Structure

```
src/
├── components/
│   ├── Display.jsx     // Component for the timer display
│   ├── TimeLength.jsx  // Component for session and break controls
├── App.css             // Custom styling
├── App.jsx             // Main app component
└── index.js            // Entry point
```

---

## Contributing

Feel free to submit issues or pull requests. Contributions are always welcome!

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

