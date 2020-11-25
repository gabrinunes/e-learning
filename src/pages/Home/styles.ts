import styled from 'styled-components/native';

import {Dimensions} from 'react-native';

const heightScreen = Dimensions.get('window').height;

const widthScreen = Dimensions.get('window').width;

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items:center
  background-color: #6548a3;
`;

export const ContainerTexts = styled.View`
  height: 65%;
`;

export const ContainerLogo = styled.View`
  flex: 1;
  justify-content: center;
`;

export const Logo = styled.Image`
  width: 163px;
  height: 244px;
  margin-bottom: 55%;
  margin-right: 30%;
`;

export const BehindLogo = styled.Image`
  top: 12%;
  width: 280px;
  height: 380px;
`;

export const TextInfo = styled.Text`
  font-family: 'Rubik-Regular';
  color: #ff6680;
  font-weight: 400;
  font-size: 36px;
  max-width: 235px;
  line-height: 42px;
  margin-top: 8%;
`;

export const TextSub = styled.Text`
  font-family: 'Roboto-Regular';
  font-weight: 400;
  margin-top: 3%;
  max-width: 190px;
  color: #edebf5;
  font-size: 15px;
  line-height: 25px;
`;

export const ButtonLogin = styled.TouchableOpacity`
  width: 303px;
  height: 56px;
  align-items: center;
  justify-content: center;

  /* Pink */
  background: #ff6680;
  border-radius: 100px;
  margin-top: 15px;
`;

export const ButtonLoginText = styled.Text`
  font-family: 'Roboto-Medium';
  font-size: 15px;
  line-height: 17px;
  color: #fff;
`;
