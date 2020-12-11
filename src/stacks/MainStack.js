import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Preload from '../screens/Preload'
import SignIn from '../screens/SignIn'
import SignUp from '../screens/SignUp' 
import ChooseProfile from '../screens/ChooseProfile' 
import TermsUse from '../screens/TermsUse' 
import MainTabNanny from '../stacks/MainTabNanny' 
import Checklist from '../screens/Nanny/Checklist' 

const Stack = createStackNavigator();

export default () => (
    <Stack.Navigator
        initialRouteName="Preload" // aqui ele estabelece qual a primeira tela a ser carregada
        screenOptions={{
            headerShown: false // isso faz que com o cabeçalho das telas não apareçam
        }}>
        <Stack.Screen name="Preload" component={Preload} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} /> 
        <Stack.Screen name="ChooseProfile" component={ChooseProfile} /> 
        <Stack.Screen name="TermsUse" component={TermsUse} /> 
        <Stack.Screen name="MainTabNanny" component={MainTabNanny} />
        <Stack.Screen name="Checklist" component={Checklist} />
    </Stack.Navigator>
);