import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Preload from '../screens/Preload'
import Initial from '../screens/Initial'
import SignIn from '../screens/SignIn'
import SignUp from '../screens/SignUp' 
import ChooseProfile from '../screens/ChooseProfile' 
import TermsUse from '../screens/TermsUse' 
import MainTabNanny from '../stacks/MainTabNanny' 
import Documentation from '../screens/Nanny/Checklist/Documentation' 
import Profile1 from '../screens/Nanny/Checklist/Profile1' 
import Profile2 from '../screens/Nanny/Checklist/Profile2' 
import Finalize from '../screens/Nanny/Checklist/Finalize' 
import CameraScreen from '../screens/CameraScreen' 
// import Finish from '../screens/Nanny/Checklist/Finish' 

const Stack = createStackNavigator();

export default () => (
    <Stack.Navigator
        initialRouteName="Preload" // aqui ele estabelece qual a primeira tela a ser carregada
        screenOptions={{
            headerShown: false // isso faz que com o cabeçalho das telas não apareçam
        }}>
        <Stack.Screen name="Preload" component={Preload} />
        <Stack.Screen name="Initial" component={Initial} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} /> 
        <Stack.Screen name="ChooseProfile" component={ChooseProfile} /> 
        <Stack.Screen name="TermsUse" component={TermsUse} /> 
        <Stack.Screen name="MainTabNanny" component={MainTabNanny} />
        <Stack.Screen name="Documentation" component={Documentation} />
        <Stack.Screen name="Profile1" component={Profile1} />
        <Stack.Screen name="Profile2" component={Profile2} />
        <Stack.Screen name="Finalize" component={Finalize} />
        <Stack.Screen name="CameraScreen" component={CameraScreen} />
        {/* <Stack.Screen name="Finish" component={Finish} /> */}
    </Stack.Navigator>
);