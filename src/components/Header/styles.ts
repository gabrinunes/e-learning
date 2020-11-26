import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  height: 30%;
`;

export const Content = styled.View`
  flex: 1;
`;

export const IconLogo = styled.Image`
  margin-left: 24;
  margin-top: 8%;
`;

export const SearchBox = styled.View`
  flex-direction:row
  width: 334px;
  height: 56px;

  /* Shapes / Principal */
  background: #ffffff;
  border-radius: 100px;
`;

export const SearchBoxText = styled.TextInput`
  font-family: 'Roboto-Regular';
  font-size: 15px;
  color: #c4c4d1;
  padding: 10px;
  margin-right: 30px;
`;

export const ContainerSearchBox = styled.View`
  flex: 1;
  align-items: center;
  margin-top: 10%;
`;
