import React from 'react';

import {
  Container,
  Content,
  IconLogo,
  ContainerSearchBox,
  SearchBox,
  SearchBoxText,
} from './styles';

import logo from '../../assets/e.logo.png';
import Icon from 'react-native-vector-icons/Feather';

const Header: React.FC = () => {
  return (
    <Container>
      <Content>
        <IconLogo source={logo} />
        <Icon
          name="power"
          size={25}
          color="#FF6680"
          style={{
            position: 'absolute',
            alignSelf: 'flex-end',
            right: 25,
            top: 34,
          }}
        />
        <ContainerSearchBox>
          <SearchBox>
            <Icon
              name="search"
              size={18}
              color="#C4C4D1"
              style={{margin: 18, marginRight: 2}}
            />
            <SearchBoxText placeholder="digite alguma coisa" />
          </SearchBox>
        </ContainerSearchBox>
      </Content>
    </Container>
  );
};

export default Header;
