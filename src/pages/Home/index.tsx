import React from 'react';

import {
  Container,
  Logo,
  ContainerLogo,
  BehindLogo,
  TextInfo,
  ContainerTexts,
  TextSub,
  ButtonLogin,
  ButtonLoginText,
} from './styles';

import logo from '../../assets/e.learninge-logo.png';

import logoScreen from '../../assets/logo.png';
import {Image, Text} from 'react-native';

const Home: React.FC = () => {
  return (
    <Container>
      <BehindLogo source={logo} />
      <ContainerLogo>
        <Logo source={logoScreen} />
      </ContainerLogo>
      <ContainerTexts>
        <TextInfo>Aprenda da melhor forma</TextInfo>
        <TextSub>
          Entre na plataforma e acesse cursos de diversas áreas de conhecimento.
        </TextSub>
        <ButtonLogin>
          <ButtonLoginText>Começar os estudos</ButtonLoginText>
        </ButtonLogin>
      </ContainerTexts>
    </Container>
  );
};

export default Home;
