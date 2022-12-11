
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,FlatList } from 'react-native';
import { Provider } from 'react-redux';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import {store} from './store'

import Home from './Home';
import Login from './Login';
import ViewCart from './src/components/ViewCart';

// import { Store } from './store';
export default function App() {

  const Stack = createStackNavigator();
  return (
    <Provider store={store}>
    <NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen name="Home" component={Home} />

    <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="ViewCart" component={ViewCart} />

    </Stack.Navigator>
    </NavigationContainer>
    </Provider>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
