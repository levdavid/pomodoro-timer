import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Timer from './Timer';
import sleep from './utils/sleep';
import vibrate from './utils/vibrate';

const App = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [workTime, setWorktime] = useState(0);
  const [breakTime, setBreaktime] = useState(0);
  
  const startTimer = () => {
    setWorktime(25*60);
    setBreaktime(5*60);
    setIsRunning(true)
  }

  const resetTimer = () => {
    // startTimer();
  }

  return (
    <View style={styles.container}>
      <Timer workTime={workTime} breakTime={breakTime} active={isRunning}/>
      {!isRunning && <Button onPress={() => {startTimer()}} title="Start Timer" />}
      {isRunning && 
      <>
        <Button onPress={() => setIsRunning(false)} title="Pause" />
        <Button onPress={() => resetTimer()} title="Reset" />
      </>
      }
    </View>
  );
}

export default App; 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
