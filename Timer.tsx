import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import sleep from './utils/sleep';
import vibrate from './utils/vibrate';

interface TimerProps {
    workTime: number,
    breakTime: number,
    active: boolean,
}

const renderTime = (secs: number): string => {
    var minutes = Math.floor(secs/60),  // 15        
    seconds = secs % 60;            // 21.856
    if(minutes > 0){
        let seconds_str = seconds === 0 ? "00" : `${(Math.floor(seconds * 100)/100)}`

        return `${minutes} : ${seconds_str}`;
    }
    return `${seconds}`
}

const Timer = (props: TimerProps) => {
    const [remainingTime, setRemainingTime] = useState(0);

    const countDown = async () => {
        let time = props.workTime;
        while(time > 0){
            if(!props.active)
                return
            setRemainingTime(time--);
            await sleep(1000);
        }
        time = props.breakTime;
        while(time > 0){
            if(!props.active)
                return
            setRemainingTime(time--);
            await sleep(1000);
        }     
        vibrate();
      }

    useEffect(() => {
        if(props.active){
            countDown();
            console.log("i'm active")
        } else {
            console.log("deactivated!")
        }
    }, [props.active])

    return (
    <Text style={styles.timeDisplay}>
        {renderTime(remainingTime)}
    </Text>
    )
}

const styles = StyleSheet.create({
    timeDisplay: {
      fontSize: 100
    },
  });
  

export default Timer;