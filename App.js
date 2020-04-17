import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Timer from './Timer';
import sleep from './utils/sleep';
import vibrate from './utils/vibrate';

const App = () => {
  const [remainingTime, setRemainingTime] = React.useState(0);
  const [isActiveTimer, setActiveTimer] = React.useState(false)
  
  const startTimer = () => {
    setActiveTimer(true)
    countDown(25*60);
    countDown(5*60);
    setActiveTimer(false)
  }

  const countDown = async (time) => {
    while(time > 0 && isActiveTimer){
      setRemainingTime(time--);
      await sleep(1000);
    }
    if(isActiveTimer)
      vibrate();
    setActiveTimer(false)
  }

  return (
    <View style={styles.container}>
      <Timer remainingTime={remainingTime} active={isActiveTimer}/>
      <Button onPress={() => startTimer} title="Start Timer" />
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
