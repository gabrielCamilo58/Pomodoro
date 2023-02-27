import React, { useEffect } from 'react';
import { useInterval } from '../hooks/user-interval';
import { Timer } from './Timer';
import { Button } from './button';
interface props{
    pomodoroTime: number;
    shortRestTime: number;
    longRestTime: number;
    cycles: number;
}

export function PomodoroTimerComponent(props: props){
    const [mainTime, setMainTime] = React.useState(props.pomodoroTime);
    const [timeCounting, setTimeCounting] = React.useState(false);
    const [working, setWorking] = React.useState(false);

    useEffect(() => {
        if (working) document.body.classList.add('working');
    }, [working]);

    const configureWork = () => {
        setTimeCounting(true);
        setWorking(true);
    }

    useInterval(() => {
        setMainTime(mainTime - 1);
    }, timeCounting ? 1000 : null)
    return(
        <div className="pomodoro">
            <h2>You are: working</h2>
            <Timer mainTime={mainTime}></Timer>
            <div className="controls">
            <Button text="Work" onClick={() => configureWork()}></Button>
            <Button text="teste" ></Button>
            <Button text={timeCounting ? 'Pause' : 'Play'}
            onClick={() => setTimeCounting(!timeCounting)} ></Button>
            </div>

            <div className="details">
                <p>Testando: final details</p>
                <p>Testando: final details</p>
                <p>Testando: final details</p>
                <p>Testando: final details</p>
                <p>Testando: final details</p>
            </div>
        </div>
    )
}