import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Home from '../screens/Nanny/Home'
import Find from '../screens/Nanny/Find'
import OtherJobs from '../screens/Nanny/OtherJobs'
import Job from '../screens/Nanny/Job'
import WorkDetails from '../screens/Nanny/WorkDetails'
import Shedule from '../screens/Nanny/Job'
import Wallet from '../screens/Nanny/Wallet'
import Profile from '../screens/Nanny/Profile'

import CustomTabBar from '../components/CustomTabBarNanny'
 


const Tab = createBottomTabNavigator();


export default () => (
    <Tab.Navigator tabBar={props=><CustomTabBar {...props}/>}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="OtherJobs" component={OtherJobs} />
        <Tab.Screen name="Job" component={Job} />
        <Tab.Screen name="WorkDetails" component={WorkDetails} />
        <Tab.Screen name="Shedule" component={Shedule} />
        <Tab.Screen name="Find" component={Find} />
        <Tab.Screen name="Wallet" component={Wallet} />
        <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
);