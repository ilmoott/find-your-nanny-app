import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native'
import DropDownPicker from 'react-native-dropdown-picker';
import Icon from 'react-native-vector-icons/Feather';
import { Text } from 'react-native';
import { Container,
         HeaderArea,
         ButtonBackArea,
         TitleArea,
         TextTitle,
         BodyArea,
         TitleBodyArea, 
         ListPersonalData,
         PersonalArea,
         CityArea,
         FooterArea 
         } from './styles';

import NavPrevIcon from '../../../../assets/nav_prev.svg';
 
import ButtonNext from '../../../../components/ButtonNext'

import TextBox   from '../../../../components/TextBox' 

export default () => {

    const [age, setAgeField] = useState('');
    const [gender, setGenderField] = useState('');
    const [adress, setAdressField] = useState('');
    const [city, setCityField] = useState('');
    const [state, setStateField] = useState('');
    
    const navigation = useNavigation();

    const handleClickBack = () => {
         
        navigation.navigate('Documentation');
        
    } 

    const handleClickNext = () => {
         
        navigation.navigate('Profile2');
        
    }     
     
 
    return (
        <Container>

            <HeaderArea>

                <ButtonBackArea onPress={handleClickBack}>
                    <NavPrevIcon fill="#FFFFFF"/>  
                </ButtonBackArea>
                
                <TitleArea>
                    <TextTitle>Profile</TextTitle>
                </TitleArea>

            </HeaderArea>

            <BodyArea>

                <TitleBodyArea>

                    <Text style={{color:'#5F9CAF', fontSize:24, fontWeight: 'bold'}}>Personal </Text>
                    <Text style={{color:'#5F9CAF', fontSize:24}}>data</Text>

                </TitleBodyArea>

                <ListPersonalData>

                    <PersonalArea>

                        <TextBox    
                            large='90%'  
                            placeholder="Age"
                            value={age}
                            onChangeText={t=>setAgeField(t)} // isso permite alterar o texto no text
                            password={false}
                        />

                        <DropDownPicker
                            items={[
                                {label: 'Female', value: 'female', selected: true},
                                {label: 'Male', value: 'male'},
                                {label: 'Other', value: 'other'},
                            ]}
                            containerStyle={{height: 70, width: '90%', marginRight: 10, paddingBottom: 10, marginTop:10}}
                            itemStyle={{
                                justifyContent: 'flex-start',
                                fontSize:12
                            }}
                        />

                        <TextBox    
                            large='90%' 
                            placeholder="Adress"
                            value={adress}
                            onChangeText={t=>setAdressField(t)} // isso permite alterar o texto no text
                            password={false}
                        />                                        
                        

                    </PersonalArea>

                    <CityArea>

                        <TextBox    
                            large='44%' 
                            placeholder="City"
                            value={city}
                            onChangeText={t=>setCityField(t)} // isso permite alterar o texto no text
                            password={false}
                        />   

                        <TextBox    
                            large='44%' 
                            placeholder="State"
                            value={state}
                            onChangeText={t=>setStateField(t)} // isso permite alterar o texto no text
                            password={false}
                        />                                                           

                    </CityArea>


                 </ListPersonalData>

                
            </BodyArea>

            <FooterArea>
                <ButtonNext onPress={handleClickNext}/>
            </FooterArea>


        </Container>
    );
}