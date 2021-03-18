import React from 'react';
import {useNavigation} from '@react-navigation/native'
import { Text } from 'react-native';
import { Container,
         HeaderArea,
         ButtonBackArea,
         TitleArea,
         TextTitle,
         BodyArea
         } from './styles';

import NavPrevIcon from '../../../assets/nav_prev.svg';

import BoxJobs from '../../../components/BoxJobs.js';

opportunities = {
    data: [
    { key: "00", 
      title: "Two children for a weekend",  
      taga: "Babysitter", 
      tagb: "Preschool", 
      price: "$ 20/h" }, 

    { key: "01", 
      title: "Four children for a weekend",  
      taga: "Baby", 
      tagb: "Preschool", 
      price: "$ 39/h" },

      { key: "02", 
        title: "One children for six weekend",  
        taga: "Jung", 
        tagb: "Preschool", 
        price: "$ 10/h" }, 
  
      { key: "03", 
        title: "Four children for a weekend",  
        taga: "Babysitter", 
        tagb: "Preschool", 
        price: "$ 50/h" }, 
  
      
        { key: "04", 
        title: "Four children for a weekend A",  
        taga: "Babysitter", 
        tagb: "Preschool", 
        price: "$ 33/h" }, 
  
      
        { key: "05", 
        title: "Four children for a weekend",  
        taga: "Babysitter", 
        tagb: "Preschool", 
        price: "$ 22/h" }, 
  
      
        { key: "06", 
        title: "Four children for a weekend",  
        taga: "Babysitter", 
        tagb: "Preschool", 
        price: "$ 41/h" }, 
  
      
        { key: "07", 
        title: "Four children for a weekend",  
        taga: "Babysitter", 
        tagb: "Preschool", 
        price: "$ 14/h" }



    ]
};      

export default () => {

    const navigation = useNavigation();

    const handleClickBack = () => {
         
        navigation.navigate('Find');
        
    }     

    const handleClickDetails = () => {
         
        navigation.navigate('WorkDetails');
        
    }         

    return (
        <Container>

            <HeaderArea>

                <ButtonBackArea onPress={handleClickBack}>
                    <NavPrevIcon fill="#3EC5F0"/>  
                </ButtonBackArea>
                
                <TitleArea>
                    <TextTitle>All opportunities</TextTitle>
                </TitleArea>

            </HeaderArea>

            <BodyArea>
 
                 {this.opportunities.data.map((item, index) => {
                    return ( 
                        <BoxJobs key={index} 
                                onPress={handleClickDetails}
                                title={item.title} 
                                taga={item.taga}
                                tagb={item.tagb}
                                price={item.price}/>  
                    );
                    })}

                {/* {this.opportunities.data.map((item, index) =>(                
                            <BoxJobs key={index} 
                            title={item.title} 
                            taga={item.taga}
                            tagb={item.tagb}
                            price={item.price}/>                   
                    ))} */}

            </BodyArea>
 
        </Container>
    );
}