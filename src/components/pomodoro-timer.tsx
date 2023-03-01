import React, { useEffect } from 'react';
import { useInterval } from '../hooks/user-interval';
import { Timer } from './Timer';
import { Button } from './button';
const bellStart = require('./../sounds/src_sounds_bell-start.mp3');
const bellFinish = require('./../sounds/src_sounds_bell-finish.mp3');
const audioStartWorking = new Audio(bellStart);
const audioStopWorking = new Audio(bellFinish);
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
    const [resting, setResting] = React.useState(false);

    useEffect(() => {
        if (working) document.body.classList.add('working');
        if (resting) document.body.classList.remove('working');
    }, [working]);

    const configureWork = () => {
        setTimeCounting(true);
        setWorking(true);
        setResting(false);
        setMainTime(props.pomodoroTime);
        audioStartWorking.play();
    }

    const configureRest = (long: boolean) => {
        setTimeCounting(true);
        setWorking(false);
        setResting(true);
        if (long){
            setMainTime(props.longRestTime);
        } else {
            setMainTime(props.shortRestTime);
        }
        audioStopWorking.play();
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
            <Button text="Rest" onClick={() => configureRest(false)}></Button>
            <Button text={timeCounting ? 'Pause' : 'Play'}
            className={!working && !resting ? 'hidden' : ''}
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