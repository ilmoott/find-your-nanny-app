import  React, {useState, useContext } from 'react' 
import { Text } from 'react-native';
import {useNavigation} from '@react-navigation/native'
import { SearchBar } from 'react-native-elements';
import { ScrollArea,
         Container, 
         HeadArea, 
         SwapperArea, 
         StageArea, 
         OtherJobs, 
         OtherJobsHead, 
         OtherJobsLeft, 
         OtherJobsRight, 
         SearchArea } from './styles';

import BoxJobs from '../../../components/BoxJobs.js'
import BoxNearItem from '../../../components/BoxAddItem.js'
import SearchBox from '../../../components/SearchBox.js'
import BoxStages from '../../../components/BoxStages.js'
import SearchIcon from '../../../assets/SearchBox.svg'
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
  
  const navigation = useNavigation();

  const [searchField, setSearchField] = useState('');

  const handleClickSeeAll = () => {
         
    navigation.navigate('OtherJobs');
    
  }    

  const handleClickWorkDetails = () => {
         
    navigation.navigate('WorkDetails');
    
  }    
 
    return (

      <ScrollArea>
        <Container> 

          <HeadArea>

              <Text style={{fontSize:28, color:'#37474F', fontWeight:'bold'}}>Search</Text> 

              <SearchArea>

                <SearchBox 
                      IconSvg={SearchIcon}
                      placeholder="Your e-mail"
                      value={searchField}
                      onChangeText={t=>setSearchField(t)} // isso permite alterar o texto no text
                      password={false}
                  />

              </SearchArea>

          </HeadArea> 

          <StageArea>  
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
                      
          </StageArea> 


          <SwapperArea>  
              <Text style={{fontSize:18 ,color:'#5F9CAF', paddingBottom:15}}>Near to you</Text> 

              <Carousel 
              sliderWidth={400}
              itemWidth={290}
              loop={false}
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

          <OtherJobs>   

              <OtherJobsHead>

                <OtherJobsLeft>
                  <Text style={{fontSize:18 ,color:'#5F9CAF', paddingBottom:15, fontWeight:'bold'}}>Other jobs</Text>  
                </OtherJobsLeft>

                <OtherJobsRight onPress={handleClickSeeAll}>
                  <Text style={{fontSize:19 ,color:'#5F9CAF', paddingBottom:15}}>See All</Text>
                </OtherJobsRight>

              </OtherJobsHead>
              

              <Carousel 
              sliderWidth={400}
              itemWidth={290}
              loop={true}
              enableSnap={false}
              // inactiveSlideScale={0.8}
              // inactiveSlideOpacity={0.3}
              activeSlideAlignment={'start'}
              data={this.opportunities.data} 
              // contentContainerCustomStyle={{  alignItems: 'center' }}
              // lockScrollWhileSnapping={true}
              // autoplay={true}
              // autoplayDelay={500}
              // autoplayInterval={3000}
              renderItem={({ item }) => {
                  return ( 
                  <BoxJobs onPress={handleClickWorkDetails}
                           title={item.title} 
                          taga={item.taga}
                          tagb={item.tagb}
                          price={item.price}/> 
                      );
              }}
              />  

                      
          </OtherJobs> 



          </Container>

      </ScrollArea>
      
    );
}