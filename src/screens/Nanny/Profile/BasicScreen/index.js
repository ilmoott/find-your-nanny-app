import React, {useState} from 'react';
import { Text } from 'react-native';
import {useNavigation} from '@react-navigation/native'
import { ScrollArea,
         Container,   
         TextTitle,
         SwapperArea,
         MiniTitle } from './styles';
import Carousel from 'react-native-snap-carousel';

import BoxCertification from '../../../../components/BoxCertification.js' 
import BoxInterested from '../../../../components/TagInterested.js' 

import FirstAidIcon from '../../../../assets/hospital_icon.svg' 
import DocumentIcon from '../../../../assets/document_icon.svg' 
import PlusIcon from '../../../../assets/Plus.svg' 
import CloseIcon from '../../../../assets/close_icon.svg' 

export default () => {

    const navigation = useNavigation();

    documents = {
        data: [
        { id: "00",  
          text: "Add" }, 
        
        { id: "01",  
          text: "First Aid" }, 
    
        { id: "02",  
        text: "Driver License" }, 
        
        { id: "03",  
        text: "Lorem Aid" }, 
        
        { id: "04",  
            text: "First ipsum" }, 
        ]
    };   

    interested = {
        data: [
        { id: "00",  
          text: "Add" }, 
        
        { id: "01",  
          text: "Music" }, 
    
        { id: "02",  
        text: "Running" },  
        ]
    };   

return (

    <ScrollArea> 

        <MiniTitle>Biography</MiniTitle>

        <TextTitle>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                    nisi ut aliquip ex ea commodo consequat</TextTitle>

        <MiniTitle>Certification</MiniTitle> 

        <SwapperArea>

            <Carousel 
                sliderWidth={400}
                itemWidth={106}
                loop={true}
                enableSnap={false}
                // inactiveSlideScale={0.8}
                // inactiveSlideOpacity={0.3}
                activeSlideAlignment={'start'}
                data={this.documents.data} 
                // contentContainerCustomStyle={{  alignItems: 'center' }}
                // lockScrollWhileSnapping={true}
                // autoplay={true}
                // autoplayDelay={500}
                // autoplayInterval={3000}
                
                renderItem={({ item }) => {

                        icon = <FirstAidIcon width="55" height="55"/>
                        backgroundColor = '#8EE1BE'
                        textColor = '#FFFFFF'

                        if (item.text != "First Aid"){
                            icon = <DocumentIcon width="55" height="55"/>
                        } 

                        if (item.text == "Add"){
                            icon = <PlusIcon width="55" height="55"/>
                            backgroundColor = '#FFFFFF'
                            textColor = '#B0BEC5'
                        }
                    return (   
                        <BoxCertification text={item.text}
                                        icon={icon}
                                        backgroundColor={backgroundColor}  
                                        textColor={textColor}/> 
                        );
                }}
            />  

        </SwapperArea>


        <MiniTitle>Interested</MiniTitle> 

        <SwapperArea>

            <Carousel 
                sliderWidth={400}
                itemWidth={113}
                loop={true}
                enableSnap={false}
                // inactiveSlideScale={0.8}
                // inactiveSlideOpacity={0.3}
                activeSlideAlignment={'start'}
                data={this.interested.data} 
                // contentContainerCustomStyle={{  alignItems: 'center' }}
                // lockScrollWhileSnapping={true}
                // autoplay={true}
                // autoplayDelay={500}
                // autoplayInterval={3000}
                
                renderItem={({ item }) => {

                        icon = <CloseIcon width="25" height="25"/>
                        backgroundColor = '#5F9CAF'
                        textColor = '#FFFFFF'

                        if (item.text == "Add"){
                            icon = <PlusIcon width="25" height="25"/>
                            backgroundColor = '#FFFFFF'
                            textColor = '#B0BEC5'
                        }
                    return (   
                        <BoxInterested text={item.text}
                                        icon={icon}
                                        backgroundColor={backgroundColor}  
                                        textColor={textColor}/> 
                        );
                }}
            />  
        </SwapperArea> 

    </ScrollArea>
   
);
}