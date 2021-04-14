import React, {useState} from 'react';
import styled from 'styled-components/native'; 
import { ShadowPropTypesIOS, Text } from 'react-native';
import TextBox from "./TextBox";
import GenericButton from "./GenericButton";
import {Modalize} from 'react-native-modalize'
import {useNavigation} from "@react-navigation/native";

const Container = styled.View`
    padding-top: 50px;
    padding-left: 20px;
    padding-right: 20px;
  
`;

const ViewSpace = styled.View`
    margin-bottom: 10px;
`;

const TexitTitle = styled.Text`
    color: #455A64;
    font-size: 25px;
    font-weight:bold;
    padding-bottom: 30px;
`;

export default () => {

    const [passField, setPassField] = useState('');
    const [newPassField, setNewPassField] = useState('');
    const [confirmNewPass, setConfirmNewPass] = useState('');

    const navigation = useNavigation();

    const handleClick = () => {

        navigation.navigate('Profile');

    }

    return ( 

    <Container>

        <TexitTitle>Change Password</TexitTitle>

        <ViewSpace>
            <TextBox
                placeholder="Current Password"
                value={passField}
                onChangeText={t=>setPassField(t)}
                password={true}
            />
        </ViewSpace>

        <ViewSpace>
            <TextBox
                placeholder="New Password"
                value={newPassField}
                onChangeText={t=>setNewPassField(t)}
                password={true}
            />
        </ViewSpace>

        <ViewSpace>
            <TextBox
                placeholder="Confirm New Password"
                value={confirmNewPass}
                onChangeText={t=>setConfirmNewPass(t)}
                password={true}
            />
        </ViewSpace>

        <GenericButton onPress={handleClick}
                       text="Save new password"
                       color='#FFFFFF'
                       backgroundColor='#3EC5F0'
                       borderColor='#3EC5F0'/>
    </Container>

    )
}