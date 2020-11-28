import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from '../pages/Home';
import Courses from '../pages/Courses';
import ListCourses from '../pages/ListCourses';
import {NavigationContainer} from '@react-navigation/native';

const App = createStackNavigator();
const Tab = createBottomTabNavigator();

const AppRoutes: React.FC = () => (
  <>
    <NavigationContainer>
      <App.Navigator
        screenOptions={{
          headerShown: false,
          cardStyle: {backgroundColor: '#6548A3'},
        }}>
        <App.Screen name="Home" component={Home} />
        <App.Screen name="Courses" component={Courses} />
        <App.Screen name="ListCourses" component={ListCourses} />
      </App.Navigator>
    </NavigationContainer>
  </>
);

export default AppRoutes;
