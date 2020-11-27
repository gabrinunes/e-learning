import React, {useState} from 'react';

import Header from '../../components/Header';

import {Container, CategoryText, CoursesNumber, TabStyle} from './style';
import Card from '../../components/Cards';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Feather';

import Home from '../Home';
import App from '../../../App';

const Courses: React.FC = () => {
  const [item, SetItem] = useState(3);
  const Tab = createBottomTabNavigator();
  return (
    <>
      <Header />
      <Container>
        <TabStyle>
          <Tab.Navigator>
            <Tab.Screen name="Home">{() => <Card text={false} />}</Tab.Screen>
            <Tab.Screen name="Salvos">{() => <Card text />}</Tab.Screen>
          </Tab.Navigator>
        </TabStyle>
      </Container>
    </>
  );
};

export default Courses;
