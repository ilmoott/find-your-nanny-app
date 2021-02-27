import React from 'react';
import styled from 'styled-components/native';
import AlertIcon from '../assets/alert_circle.svg'  
import { ShadowPropTypesIOS, Text } from 'react-native';

const NotificationsArea = styled.View`
    flex: 1;
    padding-top: 10px;
`;

const NotificationBox = styled.TouchableOpacity` 
    padding: 15px;
    border-radius: 10px;
    align-items: center;
    justify-content: center;
    flex-direction: row; 
    margin-top: 10px;
    margin-bottom: 10px;
    height: 100px;
`;
const NotificationBoxMessage = styled.View`
    padding-right:20px;
`;

export default (props) => {
    return ( 

        <NotificationsArea>

            <Text style={{fontSize:18 ,color:props.color}}>{props.title}</Text>

            <NotificationBox onPress={props.onPress} style={{backgroundColor:props.backgroundColor}}>

                <NotificationBoxMessage>
                    <Text style={{fontSize:20 ,color:'#ffffff'}}>{props.text1}</Text>
                    <Text style={{fontSize:14 ,color:'#ffffff'}}>{props.text2}</Text>
                </NotificationBoxMessage>

                <AlertIcon/>

            </NotificationBox>

        </NotificationsArea>     


    )
}