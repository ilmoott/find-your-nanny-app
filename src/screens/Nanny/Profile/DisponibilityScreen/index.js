import React, {useState} from 'react';
import { Text } from 'react-native';
import {useNavigation} from '@react-navigation/native'
import { Container, 
         AreaSignOut, 
         ButtonSignOut,
         HeaderArea,
         ProfileArea,
         ButtonTabArea,
         SubScreenArea,
         TextTitle,
         MiniTitle,
         NameUser, 
         ProfilePhotoArea,
         ProfileNameArea,
         ProfileButtonArea } from './styles';
import GenericButton from '../../../components/GenericButton.js'
import User from '../../../components/User.js'


export default () => {


const navigation = useNavigation();

borderColor = '#3EC5F0'
fontColor = '#FFFFFF'
backgroundColor = '#3EC5F0' 

borderDisableColor = '#B0BEC5'
fontDisableColor = '#B0BEC5'
backgroundDisableColor = '#FFFFFF'

const [tabActive, setTabActive] = useState('Basic');

const handleLogout = () => {

    navigation.reset({
        routes:[{name:'SignIn'}] 
    })

}

const handleTab = (param) => {

    setTabActive(param)
    
     
}

    return (
        <Container>

            <HeaderArea>

                <TextTitle>Your Profile</TextTitle>

            </HeaderArea>

            <ProfileArea>

                <ProfilePhotoArea>
                    <User/>
                </ProfilePhotoArea>

                <ProfileNameArea>

                    <NameUser>Emma Soares</NameUser>

                    <ProfileButtonArea>

                        <GenericButton text="Edit Infos" 
                                            color='#3EC5F0'
                                            backgroundColor='#FFFFFF'
                                            borderColor='#3EC5F0'
                                            width='40%'
                                            marginRight='10'/>  

                        <GenericButton text="Logout" 
                                    onPress={handleLogout} 
                                    color='#3EC5F0'
                                    backgroundColor='#FFFFFF'
                                    borderColor='#3EC5F0'
                                    width='40%'/>  


                    </ProfileButtonArea>

                </ProfileNameArea>

            </ProfileArea>

            <ButtonTabArea>

                <GenericButton text="Basic"  
                                color={tabActive==="Basic"? fontColor : fontDisableColor}
                                backgroundColor={tabActive==="Basic"? backgroundColor : backgroundDisableColor}
                                borderColor={tabActive==="Basic"? borderColor : borderDisableColor}
                                width='33%'
                                onPress={ () => handleTab("Basic")}/>  

                <GenericButton text="Disponibility"  
                                color={tabActive==="Disponibility"? fontColor : fontDisableColor}
                                backgroundColor={tabActive==="Disponibility"? backgroundColor : backgroundDisableColor}
                                borderColor={tabActive==="Disponibility"? borderColor : borderDisableColor}
                                width='35%'
                                onPress={() => handleTab("Disponibility")}/>  

                <GenericButton text="Others"  
                                color={tabActive==="Others"? fontColor : fontDisableColor}
                                backgroundColor={tabActive==="Others"? backgroundColor : backgroundDisableColor}
                                borderColor={tabActive==="Others"? borderColor : borderDisableColor}
                                width='33%'
                                onPress={() => handleTab("Others")}/>                                                                   

            </ButtonTabArea>

            <SubScreenArea>

            </SubScreenArea>

            {/* <Text>Profile</Text>
            <AreaSignOut onPress={handleLogout}>
                <ButtonSignOut>
                    <Text style={{color:"#ffffff", fontWeight:'bold', fontSize:20}}>Logout</Text>
                </ButtonSignOut>
            </AreaSignOut> */}
        </Container>
    );
}