import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Beranda from '../pages/Beranda';
import Splash from '../pages/Splash';
import Order from '../pages/Order';
import Akun from '../pages/Akun';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Beranda" component={Beranda} />
      <Tab.Screen name="Order" component={Order} />
      <Tab.Screen name="Akun" component={Akun} />
    </Tab.Navigator>
  )
}

const Router = () => {
  return (
    <Stack.Navigator initialRouteName="MainApp">
        <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }}/>
        <Stack.Screen name="MainApp" component={MainApp} options={{ headerShown: false }}/>
    </Stack.Navigator>
  )
}

export default Router

const styles = StyleSheet.create({})