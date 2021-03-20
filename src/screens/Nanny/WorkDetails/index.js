import React, {useState, useContext} from 'react';
import {useNavigation} from '@react-navigation/native'
import { Text, Image, Modal } from 'react-native';
import { Container,
         HeaderArea,
         ButtonBackArea,
         TitleArea,
         TextTitle,
         BodyArea,
         WorkTitleArea,
         WorkTextTitle,
         WorkTextSubtitle,
         UserArea,
         DetailsArea,
         DescriptionArea,
         FooterArea,
         PriceAndDateArea,
         PriceArea,
         TagsArea,
         ModalScreen
         } from './styles';

import NavPrevIcon from '../../../assets/nav_prev.svg';
import SheduleIcon from '../../../assets/tab_shedule.svg';
import UserAvatar from '../../../components/User.js';
import MessageConfirm from '../../../components/MessageConfirm.js';

import Tags from '../../../components/Tags.js';
import GenericButton from '../../../components/GenericButton.js';
import BoxUser from '../../../components/BoxUser.js';
 

export default () => {

    const navigation = useNavigation();
 
    const [isModalVisible, setModalVisible] = useState(false); 


    // Create toggleModalVisibility function that will 
    // Open and close modal upon button clicks. 
    const toggleModalVisibility = () => { 
        setModalVisible(!isModalVisible); 
    }; 
  

    const handleClickBack = () => {
         
        navigation.navigate('Find');
        
    }  
    
    if ( isModalVisible ){

        modal = <Modal animationType="slide" 
                    transparent visible={isModalVisible}  
                    presentationStyle="overFullScreen" 
                    onDismiss={toggleModalVisibility}> 
 
            
                    <MessageConfirm
                        onPressConfirm={toggleModalVisibility}
                        onPressCancel={toggleModalVisibility}
                        title="Attention!"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin commodo vitae nisi, tincidunt."
                    />

                
            
                </Modal> 
    }else{
        modal = <Text/>
    }

    return (
        <Container>

            <HeaderArea>

                <ButtonBackArea onPress={handleClickBack}>
                    <NavPrevIcon fill="#3EC5F0"/>  
                </ButtonBackArea>
                
                <TitleArea>
                    <TextTitle>Work Details</TextTitle>
                </TitleArea>

            </HeaderArea>

            <BodyArea>

                <WorkTitleArea>

                    <WorkTextTitle>Two children for a weekend</WorkTextTitle>

                    <WorkTextSubtitle>
                        Lorem ipsum dolor sit amet, 
                        consectetur adipiscing elit. 
                        Ut suspendisse auctor viverra et placerat. 
                        Ullamcorper mauris nulla eget risus, laoreet molestie.
                    </WorkTextSubtitle>
 
                </WorkTitleArea>

                <UserArea>
                     
                    <UserAvatar/> 
                    
                    <BoxUser type="Parent"
                            name="Anna Smith"/>
                    
                </UserArea>


                {modal}

                <DetailsArea>

                    <PriceAndDateArea>
                        <PriceArea>
                            <Text  style={{color:'#F1C38D',fontSize:22, fontWeight:'bold'}}>$ 20/h</Text>
                        </PriceArea>
                        <SheduleIcon width="20" height="20" fill="#FFFFFF" />
                        <Text  style={{color:'#78909C',fontSize:16}}> 12 and 13 Nov</Text>
                    </PriceAndDateArea>

                    
                    <TagsArea>
                        <Tags text="Babysitter"
                              color="#40CE81" />
                        <Tags text="Preschool"
                              color="#3EC5F0"/>
                    </TagsArea>


                </DetailsArea>

                <DescriptionArea>

                <WorkTextTitle>Description</WorkTextTitle>

                <WorkTextSubtitle>
                    Lorem ipsum dolor sit amet, 
                    consectetur adipiscing elit. 
                    Ut suspendisse auctor viverra et placerat. 
                    Ullamcorper mauris nulla eget risus, laoreet molestie.
                    consectetur adipiscing elit. 
                    Ut suspendisse auctor viverra et placerat. 
                    Ullamcorper mauris nulla eget risus, laoreet molestie.
                </WorkTextSubtitle>       
                    
                </DescriptionArea>

                {modal}
                
            </BodyArea>


            <FooterArea>

                <GenericButton onPress={toggleModalVisibility} 
                                text="I want this job" 
                                color='#FFFFFF'
                                backgroundColor='#40CE81'
                                borderColor='#FFFFFF'/>  

            </FooterArea>


 
        </Container>
    );
}