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
  color: #ff6680;
  font-size: 36px;
  max-width: 225px;
  margin-top: 8%;
`;

export const TextSub = styled.Text`
  margin-top: 3%;
  max-width: 225px;
  color: #edebf5;
  font-size: 15px;
`;

export const ButtonLogin = styled.TouchableOpacity`
  width: 303px;
  height: 56px;
  align-items: center;
  justify-content: center;

  /* Pink */
  background: #ff6680;
  border-radius: 100px;
  margin-top: 25px;
`;

export const ButtonLoginText = styled.Text``;
