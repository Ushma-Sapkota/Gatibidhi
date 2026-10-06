import { Image } from 'expo-image';
import { Button, StyleSheet, View } from 'react-native';
import { HelloWave } from '@/components/hello-wave';
import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import usePomodoro from '@/hooks/usePomodoro';
import { ThemeProvider } from 'expo-router';
import { formatMMSS } from '@/utils/format';
import {useMemo, useState } from "react";
import { LinearGradient } from 'expo-linear-gradient';

export default function Root() {
  return (
    <ThemeProvider>
      <AppInner />
    </ThemeProvider>
  )
}

  function AppInner(){
    const {theme, toggle} = useTheme();
    const [durationSec, setDurationSec] =useState(25*60)
    const {secondsLeft, running, progress, start, pause, reset } = usePomodoro{(
      durationSec,
      onFinish: ()=>{}
    )}

    const time =useMemo(() => formatMMSS(secondsLeft),[secondsLeft])

    return (
      <ParallaxScrollView>
      <LinearGradient
      colors={ThemeProvider.bgGradient}
      start={{ x:0.2, y:0.1 }}
      style={[]}>
      
      </LinearGradient>
    
      <ThemedView style={styles.titleContainer}>
      <ThemedText type="title">Welcome!</ThemedText>
      <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Pomodoro</ThemedText>
      </ThemedView>
      <View style={styles.buttonContainer}>
      <Button title="Start" onPress={()=>console.log("Start Pomodoro")} ></Button>
      <Button title="Pause" onPress={()=> alert("Pause Pomodoro")} ></Button>
      <Button title="Restart" onPress={()=> alert("Restart Pomodoro")} ></Button>
      </View>
      </ParallaxScrollView>
    );
  }

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  buttonContainer:{
    
  },
});
