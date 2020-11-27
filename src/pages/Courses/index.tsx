import React, {useState} from 'react';

import Header from '../../components/Header';

import {Container, CategoryText, CoursesNumber, TabStyle} from './style';
import Card from '../../components/Cards';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Feather';

import Home from '../Home';
import App from '../../../App';
import {View, Text} from 'react-native';

const Courses: React.FC = () => {
  const [item, SetItem] = useState(3);
  const Tab = createBottomTabNavigator();
  return (
    <>
      <Header />
      <Container>
        <Tab.Navigator
          tabBarOptions={{
            labelStyle: {
              fontSize: 15,
              fontFamily: 'Roboto-Medium',
              right: 30,
            },
            activeTintColor: '#FF6680',
            inactiveTintColor: '#C4C4D1',
            tabStyle: {
              flexDirection: 'row',
              right: 20,
            },
          }}>
          <Tab.Screen
            name="Home"
            options={{
              tabBarIcon: ({color}) => (
                <Icon
                  name="home"
                  size={22}
                  color={color}
                  style={{
                    position: 'absolute',
                    bottom: 36,
                  }}
                />
              ),
            }}>
            {() => <Card text={false} />}
          </Tab.Screen>
          <Tab.Screen
            name="Salvos"
            options={{
              tabBarIcon: ({color}) => (
                <Icon
                  name="heart"
                  size={22}
                  color={color}
                  style={{
                    position: 'absolute',
                    bottom: 36,
                  }}
                />
              ),
            }}>
            {() => <Card text />}
          </Tab.Screen>
        </Tab.Navigator>
      </Container>
    </>
  );
};

export default Courses;
