import React from 'react';

import {
  Container,
  Card,
  CourseName,
  NumbersOfLessons,
  CategoryText,
  CoursesNumber,
} from './styles';
import {Image, Text, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import iconCard from '../../assets/English.png';

interface SidebarProps {
  text?: boolean;
}

const Cards: React.FC<SidebarProps> = ({text}) => {
  const DATA = [
    //Testando Lista
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
  ];
  return (
    <Container>
      {!text ? (
        <>
          <CategoryText>Categorias</CategoryText>
          <CoursesNumber>4 cursos</CoursesNumber>
        </>
      ) : (
        <CategoryText>Cursos Salvos</CategoryText>
      )}
      {text ? (
        <FlatList
          data={DATA}
          numColumns={2}
          renderItem={({item}) => (
            <Card>
              <Image source={iconCard} />
              <CourseName>{item.title}</CourseName>
              <NumbersOfLessons>16 aulas</NumbersOfLessons>

              <Icon
                name="trash"
                size={20}
                color="#C4C4D1"
                style={{position: 'absolute', top: 15, right: 20}}
              />
            </Card>
          )}
        />
      ) : (
        <FlatList
          data={DATA}
          numColumns={2}
          renderItem={({item}) => (
            <Card>
              <Image source={iconCard} />
              <CourseName>{item.title}</CourseName>
              <NumbersOfLessons>16 aulas</NumbersOfLessons>
            </Card>
          )}
        />
      )}
    </Container>
  );
};

export default Cards;
