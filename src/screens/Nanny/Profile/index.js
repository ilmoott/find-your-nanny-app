import React from 'react';
import { Text } from 'react-native';
import {useNavigation} from '@react-navigation/native'
import { Container, AreaSignOut, ButtonSignOut } from './styles';


export default () => {


const navigation = useNavigation();

const handleLogout = () => {

    navigation.reset({
        routes:[{name:'SignIn'}] 
    })

}

    return (
        <Container>
            <Text>Profile</Text>
            <AreaSignOut onPress={handleLogout}>
                <ButtonSignOut>
                    <Text style={{color:"#ffffff", fontWeight:'bold', fontSize:20}}>Logout</Text>
                </ButtonSignOut>
            </AreaSignOut>
        </Container>
    );
}