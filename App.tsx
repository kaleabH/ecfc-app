import { NavigationContainer } from '@react-navigation/native';
import { NativeWindStyleSheet } from "nativewind";
import DrawerNavigator from './navigation/DrawerNavigator';
import StackNavigator from './navigation/StackNavigator';

NativeWindStyleSheet.setOutput({
  default: "native",
});

export default function App() {
  return (
    // <View style={styles.container}>

        <NavigationContainer>
          <StackNavigator/>
        </NavigationContainer>

  );
}

