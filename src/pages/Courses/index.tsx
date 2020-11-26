import React, {useState} from 'react';

import Header from '../../components/Header';

import {Container, CategoryText, CoursesNumber} from './style';
import {FlatList} from 'react-native';
import Card from '../../components/Cards';

const Courses: React.FC = () => {
  const [item, SetItem] = useState(3);
  return (
    <>
      <Header />
      <Container>
        <CategoryText>Categorias</CategoryText>
        <CoursesNumber>4 cursos</CoursesNumber>
        <Card />
      </Container>
    </>
  );
};

export default Courses;
