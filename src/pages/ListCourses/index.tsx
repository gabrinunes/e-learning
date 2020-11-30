import React from 'react';
import LessonHeader from '../../components/LessonHeader';

import {
  Container,
  LessonName,
  NumberOfLessons,
  LessonPlayIcon,
  LessonCard,
  NameOfLesson,
  LessonInfo,
  LessonStatus,
  LessonStatusText,
} from './styles';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';

const ListCourses: React.FC = () => {
  const DATA = [
    //Testando Lista
    {
      id: 'bd7',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d76472',
      title: 'Third Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d7892',
      title: 'Third Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d723',
      title: 'Third Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d712',
      title: 'Third Item',
    },
  ];
  return (
    <>
      <LessonHeader />
      <Container>
        <LessonName>Matemática</LessonName>
        <NumberOfLessons>16 aulas</NumberOfLessons>
        <FlatList
          data={DATA}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => (
            <TouchableOpacity>
              <View style={{flex: 1, alignItems: 'center', marginBottom: 16}}>
                <LessonCard>
                  {item.id === 'bd7' ? ( //testando comportamento de cores para descobrir se uma aula foi completa ou não
                    <LessonPlayIcon isCompleted>
                      <Icon name="play-circle" size={35} color="#fff" />
                    </LessonPlayIcon>
                  ) : (
                    <LessonPlayIcon>
                      <Icon name="play-circle" size={35} color="#fff" />
                    </LessonPlayIcon>
                  )}
                  <NameOfLesson>Introdução à teoria matemática</NameOfLesson>
                  <View
                    style={{
                      flexDirection: 'row',
                      bottom: 38,
                      justifyContent: 'space-evenly',
                      marginLeft: 60,
                    }}>
                    <LessonInfo>Aula 01</LessonInfo>
                    <Icon
                      name="clock"
                      size={12}
                      color="#c4c4d1"
                      style={{right: 5}}
                    />
                    <LessonInfo style={{right: 20}}>5 min</LessonInfo>
                    {item.id === 'bd7' ? ( //testando comportamento de cores para descobrir se uma aula foi completa ou não
                      <LessonStatus>
                        <LessonStatusText>Completo!</LessonStatusText>
                      </LessonStatus>
                    ) : (
                      <LessonStatus style={{backgroundColor: '#FFF'}} /> //testando comportamento de cores para descobrir se uma aula foi completa ou não
                    )}
                  </View>
                </LessonCard>
              </View>
            </TouchableOpacity>
          )}
        />
      </Container>
    </>
  );
};

export default ListCourses;
