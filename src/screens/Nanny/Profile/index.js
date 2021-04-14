import React, {useState} from 'react';
import { Text } from 'react-native';
import {useNavigation} from '@react-navigation/native'
import { Container, 
         ScrollArea, 
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
import BasicScreen from './BasicScreen' 
import DisponibilityScreen from './DisponibilityScreen' 
import OtherScreen from './OtherScreen' 


export default () => {


const navigation = useNavigation();
let activeScreen = 'Basic'

borderColor = '#3EC5F0'
fontColor = '#FFFFFF'
backgroundColor = '#3EC5F0' 

borderDisableColor = '#B0BEC5'
fontDisableColor = '#B0BEC5'
backgroundDisableColor = '#FFFFFF'

const [tabActive, setTabActive] = useState(<BasicScreen/>);
const [tabNameActive, setTabNameActive] = useState('Basic');

const handleLogout = () => {

    navigation.reset({
        routes:[{name:'SignIn'}] 
    })

}

const handleClickEditInfo = () => {

    navigation.navigate('EditInfo');

}

    const handleTab = (param) => {
    
    if ( param === 'Basic' ){
    
        modal = <BasicScreen/>
    }
    
    if ( param === 'Disponibility' ){
    
        modal = <DisponibilityScreen/>
    }
    
    if ( param === 'Others' ){
    
        modal = <OtherScreen/>
    }
    

    setTabActive(modal)       
    setTabNameActive(param)       
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
                                       onPress={handleClickEditInfo}
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
                                color={tabNameActive==="Basic"? fontColor : fontDisableColor}
                                backgroundColor={tabNameActive==="Basic"? backgroundColor : backgroundDisableColor}
                                borderColor={tabNameActive==="Basic"? borderColor : borderDisableColor}
                                width='33%'
                                onPress={ () => handleTab("Basic")}/>  

                <GenericButton text="Disponibility"  
                                color={tabNameActive==="Disponibility"? fontColor : fontDisableColor}
                                backgroundColor={tabNameActive==="Disponibility"? backgroundColor : backgroundDisableColor}
                                borderColor={tabNameActive==="Disponibility"? borderColor : borderDisableColor}
                                width='35%'
                                onPress={() => handleTab("Disponibility")}/>  

                <GenericButton text="Others"  
                                color={tabNameActive==="Others"? fontColor : fontDisableColor}
                                backgroundColor={tabNameActive==="Others"? backgroundColor : backgroundDisableColor}
                                borderColor={tabNameActive==="Others"? borderColor : borderDisableColor}
                                width='33%'
                                onPress={() => handleTab("Others")}/>                                                                   

            </ButtonTabArea>

            <SubScreenArea>

                {tabActive}

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