import { NavigationContainer } from '@react-navigation/native';
import { TailwindProvider } from "tailwindcss-react-native";
import StackNavigator from './StackNavigator';

export default function App() {
  return (
    <TailwindProvider>
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </TailwindProvider>
  );
}