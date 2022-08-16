import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from './screens/HomeScreen';
import UserScreen from './screens/UserScreen';
import DailyWorkoutScreen from './screens/DailyWorkoutScreen';
import DailyFoodScreen from './screens/DailyFoodScreen';
import DailyMindsetScreen from './screens/DailyMindsetScreen';
import CycleScreen from './screens/CycleScreen';
import KnowledgeLibraryScreen from './screens/KnowledgeLibraryScreen'
import MediaLibraryScreen from './screens/MediaLibraryScreen'

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="User" component={UserScreen} />
        <Stack.Screen name="DailyWorkout" component={DailyWorkoutScreen} />
        <Stack.Screen name="DailyFood" component={DailyFoodScreen} />
        <Stack.Screen name="DailyMindset" component={DailyMindsetScreen} />
        <Stack.Screen name="Cycle" component={CycleScreen} />
        <Stack.Screen name="KnowledgeLibrary" component={KnowledgeLibraryScreen} />
        <Stack.Screen name="MediaLibrary" component={MediaLibraryScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigator