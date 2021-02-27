import React, {useState} from 'react';
import {TabRouter, useNavigation} from '@react-navigation/native'  
import Camera from '../../components/Camera'
import styled from 'styled-components/native';

const Container = styled.SafeAreaView` 
    flex: 1; 
`;

export default () => {  
    return (
        <Container> 

            <Camera/> 
         
        </Container>

    );
}