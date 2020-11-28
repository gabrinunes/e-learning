import React from 'react';
import {View, Text, Image} from 'react-native';

import {Container, ContainerContent} from './styles';

import logo from '../../assets/e.logo.png';
import Icon from 'react-native-vector-icons/Feather';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';

const LessonHeader: React.FC = () => {
  const {goBack} = useNavigation();
  return (
    <Container>
      <ContainerContent>
        <TouchableOpacity onPress={goBack}>
          <Icon name="arrow-left" size={24} color="#FF6680" />
        </TouchableOpacity>
        <Image source={logo} />
        <TouchableOpacity>
          <Icon name="heart" size={24} color="#FF6680" />
        </TouchableOpacity>
      </ContainerContent>
    </Container>
  );
};

export default LessonHeader;
