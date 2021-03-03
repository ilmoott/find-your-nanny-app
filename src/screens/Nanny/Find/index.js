import React from 'react';
import { Text } from 'react-native';
import { Container, HeadArea, SwapperArea } from './styles';
import BoxJobs from '../../../components/BoxJobs.js'
import BoxNearItem from '../../../components/BoxAddItem.js'
import BoxStages from '../../../components/BoxStages.js'
import Carousel from 'react-native-snap-carousel';

stages = {
    data: [
    { id: "00", 
      color: "#FF9CBD",
      title: "Wasborn" }, 

    { id: "01", 
      color: "#40CE81",
      title: "Baby" }, 

    { id: "02", 
      color: "#3EC5F0",
      title: "Jung" }, 

    { id: "03", 
      color: "#94BBC7",
      title: "Old" }
    ]
};      


opportunities = {
    data: [
    { id: "00", 
      title: "Two children for a weekend",  
      taga: "Babysitter", 
      tagb: "Preschool", 
      price: "$ 20/h" }, 

    { id: "01", 
      title: "Four children for a weekend",  
      taga: "Baby", 
      tagb: "Preschool", 
      price: "$ 39/h" }, 

    { id: "02", 
      title: "One children for six weekend",  
      taga: "Jung", 
      tagb: "Preschool", 
      price: "$ 10/h" }, 

    { id: "03", 
      title: "Four children for a weekend",  
      taga: "Babysitter", 
      tagb: "Preschool", 
      price: "$ 50/h" }, 



    ]
};      

export default () => {
    return (
        <Container> 

            <HeadArea>
 
                <Text style={{fontSize:28, color:'#37474F', fontWeight:'bold'}}>Search</Text> 
            
            </HeadArea> 

            <SwapperArea>  
                <Text style={{fontSize:18 ,color:'#5F9CAF', paddingBottom:15}}>List by stage</Text> 

                <Carousel 
                sliderWidth={400}
                itemWidth={210}
                loop={true}
                enableSnap={false}
                // inactiveSlideScale={0.8}
                // inactiveSlideOpacity={0.3}
                activeSlideAlignment={'start'}
                data={this.stages.data} 
                // contentContainerCustomStyle={{  alignItems: 'center' }}
                // lockScrollWhileSnapping={true}
                // autoplay={true}
                // autoplayDelay={500}
                // autoplayInterval={3000}
                renderItem={({ item }) => {
                    return ( 
                    <BoxStages title={item.title} color={item.color}/> 
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
                data={this.opportunities.data} 
                // contentContainerCustomStyle={{  alignItems: 'center' }}
                // lockScrollWhileSnapping={true}
                // autoplay={true}
                // autoplayDelay={500}
                // autoplayInterval={3000}
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

            <SwapperArea>   
                <Text style={{fontSize:18 ,color:'#5F9CAF', paddingBottom:15}}>Other jobs</Text>

                <Carousel 
                sliderWidth={400}
                itemWidth={290}
                loop={true}
                enableSnap={false}
                inactiveSlideScale={0.8}
                inactiveSlideOpacity={0.3}
                activeSlideAlignment={'start'}
                data={this.opportunities.data} 
                // contentContainerCustomStyle={{  alignItems: 'center' }}
                // lockScrollWhileSnapping={true}
                // autoplay={true}
                // autoplayDelay={500}
                // autoplayInterval={3000}
                renderItem={({ item }) => {
                    return ( 
                    <BoxJobs title={item.title} 
                            taga={item.taga}
                            tagb={item.tagb}
                            price={item.price}/> 
                        );
                }}
            />  

                        
            </SwapperArea> 



        </Container>
    );
}