import React from 'react';
import { secondsToTime } from '../utils/seconds-to-time';

interface props {
    mainTime: number;
}

export function Timer(props: props){
    return ( 
        <div className='timer'>{secondsToTime(props.mainTime)}</div>
        );
}
 

