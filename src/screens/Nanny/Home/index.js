import React from 'react';
import {useNavigation} from '@react-navigation/native'
import { Text, View } from 'react-native';
import { ScrollArea, 
         Container,
         HeadArea,
         NotificationIconArea,
         SwapperArea 
     } from './styles.js' 
import NavPrevIcon from '../../../assets/nav_prev.svg'
import NavNextIcon from '../../../assets/nav_next.svg'
import NotificationIcon from '../../../assets/bell.svg'
import Swiper from 'react-native-swiper'

import NotificationBox from '../../../components/NotificationBox.js'
import NotificationItem from '../../../components/NotificationItem.js'
import BoxNearItem from '../../../components/BoxAddItem.js'
import SheduleItem from '../../../components/SheduleItem.js'

export default () => {

    const navigation = useNavigation();

    const handleClickFinishRegistration = () => {

        navigation.navigate('Documentation');

    }

    return (
        <ScrollArea>

            <Container>

                <HeadArea>

                    <Text style={{fontSize:28, color:'#5F9CAF'}}>Welcome, </Text>
                    <Text style={{fontSize:28, color:'#5F9CAF', fontWeight:'bold'}}>Mary</Text>

                    <NotificationIconArea>
                        <NotificationIcon width="32" height="32"/>
                    </NotificationIconArea>
                    
                </HeadArea>   


                 <NotificationBox onPress={handleClickFinishRegistration} 
                                         title="Get Started"  
                                         text1="Finalize your registration"  
                                         text2="And advertise your profile right now"  
                                         color='#6F7173'
                                         backgroundColor='#FFBE71'/>  
                 
                 <NotificationItem title="You received an invitation!"  
                                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit"    
                                        number='1'
                                        color='#3EC5F0'/>  

                <NotificationItem title="You have a new job!"  
                                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit"    
                                        number='5'
                                        color='#40CE81'/>                                          

                 <SwapperArea>

                    <Text style={{fontSize:18 ,color:'#5F9CAF', paddingBottom:15}}>Your Shedule</Text>

                    <Swiper
                            style={{height: 130}}
                            showsPagination={false}
                            showsButtons={false}
                            prevButton={<NavPrevIcon width="35" height="35" fill="#000000"/>}
                            nextButton={<NavNextIcon width="35" height="35" fill="#000000"/>}
                        >     

                        <View onStartShouldSetResponder={() => true}>

                            <SheduleItem day="06"  
                                        date="January, 2021"  
                                        jobs="04 Jobs"/> 
                                 

                        </View>

                        <View onStartShouldSetResponder={() => true}>

                            <SheduleItem day="22"  
                                        date="Feb, 2021"  
                                        jobs="02 Jobs"/> 
                                 
                                 

                        </View>

                        <View onStartShouldSetResponder={() => true}>

                             <SheduleItem day="08"  
                                        date="March, 2021"  
                                        jobs="12 Jobs"/> 
                                      

                        </View>  
                    </Swiper> 
 
                    </SwapperArea>

                    <SwapperArea>   
                        <Text style={{fontSize:18 ,color:'#5F9CAF', paddingBottom:15}}>Near to you</Text>

                        <Swiper
                            style={{height: 130}}
                            showsPagination={false}
                            showsButtons={false}
                            prevButton={<NavPrevIcon width="35" height="35" fill="#000000"/>}
                            nextButton={<NavNextIcon width="35" height="35" fill="#000000"/>}
                        >     

                        <View onStartShouldSetResponder={() => true}>

                            <BoxNearItem title="Two children for a weekend"  
                                        body="Lorem ipsum dolor sit amet, consectetur adipiscing elit"  
                                        taga="Babysitter"
                                        tagb="Preschool"
                                        price="$ 20/h"/> 
                                 

                        </View>

                        <View onStartShouldSetResponder={() => true}>

                             <BoxNearItem title="Five children for a Friday"  
                                        body="Lorem ipsum dolor sit amet, consectetur adipiscing elit"  
                                        taga="Babysitter"
                                        tagb="Preschool"
                                        price="$ 20/h"/>  
                                 

                        </View>

                        <View onStartShouldSetResponder={() => true}>

                            <BoxNearItem title="Two children for a weekend"  
                                            body="Lorem ipsum dolor sit amet, consectetur adipiscing elit"  
                                            taga="Baby"
                                            tagb="Preschool"
                                            price="$ 39/h"/>         
                                 

                        </View>

                        <View onStartShouldSetResponder={() => true}>

                            <BoxNearItem title="One children for six weekend"  
                                            body="Lorem ipsum dolor sit amet, consectetur adipiscing elit"  
                                            taga="Jung"
                                            tagb="Preschool"
                                            price="$ 10/h"/>       
                                 

                        </View>                                   

                        </Swiper>                         
                    
                </SwapperArea> 

            </Container>
 
        </ScrollArea>
    );
}