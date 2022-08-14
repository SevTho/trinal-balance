import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from './screens/HomeScreen';
import UserScreen from './screens/UserScreen';
import DailyWorkoutScreen from './screens/DailyWorkoutScreen';
import DailyFoodScreen from './screens/DailyFoodScreen';
import DailyMindsetScreen from './screens/DailyMindsetScreen';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="User" component={UserScreen} />
        <Stack.Screen name="DailyWorkout" component={DailyWorkoutScreen} />
        <Stack.Screen name="DailyFood" component={DailyFoodScreen} />
        <Stack.Screen name="DailyMindset" component={DailyMindsetScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigator