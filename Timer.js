import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// interface TimerProps {
//     remainingTime: number,
//     active: boolean
// }

const renderTime = (secs) => {
    return (secs > 60 && `${secs/60} : `) + secs % 60;
}

const Timer = (props) => {
    return <Text>{renderTime(props.remainingTime)}</Text>
}

export default Timer;