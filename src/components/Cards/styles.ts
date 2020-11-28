import styled from 'styled-components/native';

import {Dimensions} from 'react-native';

const widthCard = Dimensions.get('window').width;

export const Container = styled.View`
  padding: 18px;
  bottom: 24px;
`;

export const Card = styled.View`
  width: ${widthCard * 0.42};
  height: 172px;
  background: #ffffff;
  border-radius: 16px;
  margin: 7px;
  align-items: center;
  justify-content: center;
`;

export const CourseName = styled.Text`
  font-family: 'Rubik-Regular';
  font-size: 15px;
  line-height: 20px;
  color: #6c6c80;
  margin-top: 4px;
`;

export const NumbersOfLessons = styled.Text`
  font-family: 'Roboto-Regular';
  font-size: 10px;
  line-height: 11px;
  color: #c4c4d1;
  margin-top: 4px;
`;

export const CategoryText = styled.Text`
  font-family: 'Rubik-Regular';
  font-size: 20px;
  line-height: 23px;
  padding: 24px;
  right: 5%;
`;

export const CoursesNumber = styled.Text`
  position: absolute;
  font-family: 'Roboto-Regular';
  font-size: 15px;
  line-height: 17px;
  color: #a0a0b2;
  align-self: flex-end;
  margin-top: 44px;
  right: 8%;
`;
