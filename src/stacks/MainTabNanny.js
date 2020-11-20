import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Home from '../screens/Nanny/Home'
import Find from '../screens/Nanny/Find'
import Shedule from '../screens/Nanny/Shedule'
import Wallet from '../screens/Nanny/Wallet'
import Profile from '../screens/Nanny/Profile'

import CustomTabBar from '../components/CustomTabBarNanny'
 


const Tab = createBottomTabNavigator();


export default () => (
    <Tab.Navigator tabBar={props=><CustomTabBar {...props}/>}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Shedule" component={Shedule} />
        <Tab.Screen name="Find" component={Find} />
        <Tab.Screen name="Wallet" component={Wallet} />
        <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
);