import './gesture-handler';
import { ActivityIndicator, StyleSheet, Text } from 'react-native';
import RegistrationScreen from './Screens/RegistrationScreen';
import LoginScreen from './Screens/LoginScreen';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
import { useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavigator from './navigation/BottomTabNavigator';
import CommentsScreen from './Screens/CommentsScreen';

SplashScreen.preventAutoHideAsync();
const MainStack = createStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
    'Roboto-Bold': require('./assets/fonts/Roboto-Bold.ttf'),
    'Roboto-Light': require('./assets/fonts/Roboto-Light.ttf'),
    'Roboto-Medium': require('./assets/fonts/Roboto-Medium.ttf'),
  });

  useEffect(() => {
    SplashScreen.preventAutoHideAsync();
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  return (
    <NavigationContainer>
      <MainStack.Navigator initialRouteName="BottomTabNavigator">
        <MainStack.Screen
          name="RegistrationScreen"
          component={RegistrationScreen}
          options={{ headerShown: false, title: 'Registration' }}
        />
        <MainStack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{ headerShown: false, title: 'Login' }}
        />

        <MainStack.Screen
          name="BottomTabNavigator"
          component={BottomTabNavigator}
          options={{ headerShown: false }}
        />

        <MainStack.Screen
          name="CommentsScreen"
          component={CommentsScreen}
          options={{ headerShown: true, title: 'Коментарі' }}
        />
      </MainStack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    width: '100%',
    backgroundColor: '#fff',
  },
});

{
  /* <MainStack.Screen
          name="BottomTabNavigator"
          component={BottomTabNavigator}
          options={({ navigation }) => ({
            headerShown: true,
            title: 'Публікації',
            headerStyle: {
              backgroundColor: '#FFFFFF',
            },
            headerTitleStyle: {
              color: '#212121',
              fontFamily: 'Roboto-Medium',
              fontSize: 17,
              fontWeight: '500',
              lineHeight: 22,
              letterSpacing: -0.408,
            },
            headerRight: () => (
              <Feather
                name="log-out"
                size={24}
                color="#BDBDBD"
                style={{ marginRight: 10 }}
                onPress={() => {
                  navigation.navigate('LoginScreen');
                }}
              />
            ),
          })}
        /> */
}
