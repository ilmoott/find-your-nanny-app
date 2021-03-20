import React, { useState } from 'react';
import { Text, View } from 'react-native';
import {Calendar, calendarTheme, Agenda } from 'react-native-calendars'; 
import { Avatar, Card } from 'react-native-paper';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Container, Title } from './styles';


const timeToString = (time) => {
    const date = new Date(time);
    return date.toISOString().split('T')[0];
  }

export default () => {

    const [items, setItems] = useState({})

    const loadItems = (day) => {
        setTimeout(() => {
          for (let i = -15; i < 85; i++) {
            const time = day.timestamp + i * 24 * 60 * 60 * 1000;
            const strTime = timeToString(time);
            if (!items[strTime]) {
              items[strTime] = [];
              const numItems = Math.floor(Math.random() * 3 + 1);
              for (let j = 0; j < numItems; j++) {
                items[strTime].push({
                  name: 'Item for ' + strTime + ' #' + j,
                  height: Math.max(50, Math.floor(Math.random() * 150))
                });
              }
            }
          }
          const newItems = {};
          Object.keys(items).forEach(key => {
            newItems[key] = items[key];
          });
          setItems(newItems)
        }, 1000);
      }  

    const renderItem = ( item ) => {

        return(

            <TouchableOpacity>
                <Card>
                    <Card.Content>
                        <View
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                alignItems: 'center'
                            }}
                            >
                            <Text>{item.name}</Text>    
                            <Avatar.Text label="J" />
                        </View>    
                    </Card.Content>
                </Card>
            </TouchableOpacity>
        )

    }


    return (
        <Container>
            <Title>Your Shedule</Title>
                <Agenda 
                    items={items}
                    loadItemsForMonth={loadItems}
                    selected={'2017-05-16'} 
                    renderItem={renderItem}                    
                    // markingType={'period'}
                    // markedDates={{
                    //    '2017-05-08': {textColor: '#43515c'},
                    //    '2017-05-09': {textColor: '#43515c'},
                    //    '2017-05-14': {startingDay: true, endingDay: true, color: 'blue'},
                    //    '2017-05-21': {startingDay: true, color: 'blue'},
                    //    '2017-05-22': {endingDay: true, color: 'gray'},
                    //    '2017-05-24': {startingDay: true, color: 'gray'},
                    //    '2017-05-25': {color: 'gray'},
                    //    '2017-05-26': {endingDay: true, color: 'gray'}}}
                    // monthFormat={'yyyy'}
                    // theme={{calendarBackground: 'red', agendaKnobColor: 'green'}}
                    //renderDay={(day, item) => (<Text>{day ? day.day: 'item'}</Text>)}
                    // hideExtraDays={false}
                />
        </Container>
    );
}