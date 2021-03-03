import React, { useContext } from 'react';
import { Text } from 'react-native'

import styled from 'styled-components/native';

import { UserContext } from '../contexts/UserContext';

import HomeIcon from '../assets/tab_home.svg';
import FindIcon from '../assets/tab_find.svg';
import SheduleIcon from '../assets/tab_shedule.svg';
import WalletIcon from '../assets/tab_wallet.svg';
import ProfileIcon from '../assets/tab_profile.svg';


const TabArea = styled.View`
    height: 60px;
    background-color: #ffffff;
    flex-direction: row;
`;
const TabItem = styled.TouchableOpacity`
    flex: 1;
    justify-content: center;
    align-items: center;
    margin-bottom: 15px;
`;
const TabItemCenter = styled.TouchableOpacity`
    width: 70px;
    height: 70px;
    background-color: #3EC5F0;
    justify-content: center;
    align-items: center; 
    border-radius: 35px; 
    margin-top: -20px;
`;
const AvatarIcon = styled.Image`
    width: 24px;
    height: 24px;
    border-radius: 12px;
`;

export default ({ state, navigation }) => {
    const { state:user } = useContext(UserContext);

    const goTo = (screenName) => {
        navigation.navigate(screenName);
    }

    return (
        <TabArea>
            <TabItem onPress={()=>goTo('Home')}>
                <HomeIcon style={{opacity: state.index===0? 1 : 0.8}} width="26" height="26" fill="#FFFFFF" stroke="#000000"/>
                {/* <Text style={{fontSize:12}}>Home</Text>  */}
            </TabItem>
            <TabItem onPress={()=>goTo('Shedule')}>
                <SheduleIcon style={{opacity: state.index===1? 1 : 0.8}} width="26" height="26" fill="#FFFFFF" />
                {/* <Text style={{fontSize:12}}>Shedule</Text>  */}
            </TabItem>
            <TabItemCenter onPress={()=>goTo('Find')}>
                <FindIcon width="28" height="28"/>
                {/* <Text style={{color:"#ffffff"}}>Find</Text>  */}
            </TabItemCenter>
            <TabItem onPress={()=>goTo('Wallet')}>
                <WalletIcon style={{opacity: state.index===3? 1 : 0.8}} width="26" height="26" />
                {/* <Text style={{fontSize:12}}>Wallet</Text>  */}
            </TabItem>            
            <TabItem onPress={()=>goTo('Profile')}>
                <ProfileIcon style={{opacity: state.index===4? 1 : 0.8}} width="26" height="26" fill="#FFFFFF" />   
                {/* <Text style={{fontSize:12}}>Profile</Text>  */}
            </TabItem>
        </TabArea>
    );
}