import React from 'react';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import HomeScreen from '../screens/HomeScreen';
import DataScreen from '../screens/DataScreen';
import SettingsScreen from '../screens/SettingsScreen';

const HomeStack = createStackNavigator({
    Home: HomeScreen,
})

HomeStack.navigationOptions = {
    tabBarLabel: 'Home',    
}

const DataStack = createStackNavigator({
    Data: DataScreen,
})

DataStack.navigationOptions = {
    tabBarLabel: 'Data',
}

const SettingsStack = createStackNavigator({
    Settings: SettingsScreen,
})

SettingsStack.navigationOptions({
    tabBarLabel: 'Settings',
})

export default createBottomTabNavigator({
    HomeStack,
    DataStack,
    SettingsStack,
})