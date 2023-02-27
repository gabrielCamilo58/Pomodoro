import React from 'react';
import { PomodoroTimerComponent } from './components/pomodoro-timer';

function App() {
  return (
    <div className="container">
      <PomodoroTimerComponent pomodoroTime={1500} 
      shortRestTime={300}
      longRestTime={900}
      cycles={4}
      />
    </div>
  );
}

export default App;
