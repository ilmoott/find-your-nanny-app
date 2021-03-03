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
import Swiper from 'react-native-swiper'
import NotificationIcon from '../../../assets/bell.svg'

import NotificationBox from '../../../components/NotificationBox.js'
import NotificationItem from '../../../components/NotificationItem.js'
import BoxNearItem from '../../../components/BoxAddItem.js'
import SheduleItem from '../../../components/SheduleItem.js'

import Carousel from 'react-native-snap-carousel';

export default () => {

    const navigation = useNavigation();

    const handleClickFinishRegistration = () => {

        navigation.navigate('Documentation');

    }

    shedule = {
        data: [
        { id: "00", day: "06", date: "January, 2021", jobs: "04 Jobs" },
        { id: "01", day: "09", date: "Feb, 2021", jobs: "02 Jobs" },
        { id: "02", day: "11", date: "March, 2021", jobs: "12 Jobs" },
        { id: "03", day: "13", date: "November, 2021", jobs: "06 Jobs" },
        ]
    }; 


    opportunities = {
        data: [
        { id: "00", 
          title: "Two children for a weekend", 
          body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit", 
          taga: "Babysitter", 
          tagb: "Preschool", 
          price: "$ 20/h" }, 

        { id: "01", 
          title: "Four children for a weekend", 
          body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit", 
          taga: "Baby", 
          tagb: "Preschool", 
          price: "$ 39/h" }, 

        { id: "02", 
          title: "One children for six weekend", 
          body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit", 
          taga: "Jung", 
          tagb: "Preschool", 
          price: "$ 10/h" }, 

        { id: "03", 
          title: "Four children for a weekend", 
          body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit", 
          taga: "Babysitter", 
          tagb: "Preschool", 
          price: "$ 50/h" }, 



        ]
    };      

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

                     
                    <Carousel 
                        sliderWidth={400}
                        itemWidth={150}
                        loop={false}
                        enableSnap={false}
                        inactiveSlideScale={0.8}
                        inactiveSlideOpacity={0.3}
                        activeSlideAlignment={'start'}
                        contentContainerCustomStyle={{  alignItems: 'center' }}
                        data={this.shedule.data} 
                        // lockScrollWhileSnapping={true}
                        // autoplay={true}
                        // autoplayDelay={500}
                        // autoplayInterval={3000}
                        renderItem={({ item }) => {
                            return (
                            <SheduleItem day={item.day}  
                                        date={item.date}
                                        jobs={item.jobs}/>
                             );
                        }}
                    />  

                    </SwapperArea>

                    <SwapperArea>   
                        <Text style={{fontSize:18 ,color:'#5F9CAF', paddingBottom:15}}>Near to you</Text>

                        <Carousel 
                        sliderWidth={400}
                        itemWidth={290}
                        loop={true}
                        enableSnap={false}
                        inactiveSlideScale={0.8}
                        inactiveSlideOpacity={0.3}
                        activeSlideAlignment={'start'}
                        // contentContainerCustomStyle={{  alignItems: 'center' }}
                        data={this.opportunities.data} 
                        // lockScrollWhileSnapping={true}
                        autoplay={true}
                        autoplayDelay={500}
                        autoplayInterval={3000}
                        renderItem={({ item }) => {
                            return ( 
                            <BoxNearItem title={item.title}
                                         body={item.body}
                                         taga={item.taga}
                                         tagb={item.tagb}
                                         price={item.price}/> 
                             );
                        }}
                    />  

                        
                </SwapperArea> 

            </Container>
 
        </ScrollArea>
    );
}