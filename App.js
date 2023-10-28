import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  HomeScreen,
  LoginScreen,
  RegisterScreen,
  SearchScreen,
  VideohScreen,
  StoreScreen,
  ProfileScreen,
  EditProfile
} from './pages'

const Stack = createNativeStackNavigator();
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();

const MainScreen = ()=>{
  return(
    <Tab.Navigator >
      <Tab.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcon name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen 
        name="Search" 
        component={SearchScreen} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcon name="file-find" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen 
        name="Video" 
        component={VideohScreen} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcon name="clipboard-play" color={color} size={size} />
          ),
        }}/>
      <Tab.Screen 
        name="Store" 
        component={StoreScreen} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcon name="shopping-outline" color={color} size={size} />
          ),
        }}/>
      <Tab.Screen 
        name="Profile" 
        component={ProfileScreen}
        options={{
          headerShown:false,
          tabBarIcon: ({ color, size }) => (
            <MaterialIcon name="account-circle-outline" color={color} size={size} />
          ),
        }}/>
    </Tab.Navigator>
  )
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Main'>
        <Stack.Screen name="Main" component={MainScreen} options={{headerShown:false}} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="EditProfile" component={EditProfile} options={{headerShown:false}} />
        <Stack.Screen name="Register" component={RegisterScreen} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;