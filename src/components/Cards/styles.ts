import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 20px;
  bottom: 24px;
`;

export const Card = styled.View`
  width: 45%;
  height: 172px;
  background: #ffffff;
  border-radius: 16px;
  margin: 3px 16px 10px 1px;
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
