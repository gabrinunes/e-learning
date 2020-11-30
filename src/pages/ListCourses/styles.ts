import styled, {css} from 'styled-components/native';

interface LessonContainerProps {
  isCompleted?: boolean;
}

export const Container = styled.View`
  flex: 1;
  flex-direction: column;
  background: #f0edf5;
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
`;

export const LessonName = styled.Text`
  font-family: 'Rubik-Regular';
  font-style: normal;
  font-weight: normal;
  font-size: 30px;
  line-height: 36px;

  /* identical to box height */

  /* Texto / Título */
  color: #3d3d4c;
  margin: 23px;
`;

export const NumberOfLessons = styled.Text`
  position: absolute;
  right: 5%;
  top: 6%;
  font-family: 'Roboto-Regular';
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 18px;

  /* identical to box height */
  text-align: right;

  /* Texto / Detalhes */
  color: #a0a0b2;
`;

export const LessonCard = styled.View`
  width: 290px;
  height: 100px;
  background: #ffffff;
  border-radius: 16px;
`;

export const LessonPlayIcon = styled.View<LessonContainerProps>`
  width: 68px;
  height: 68px;
  ${(props) =>
    props.isCompleted
      ? css`
          background: #61c5bd;
        `
      : css`
          background: #ff6680;
        `}
  border-radius: 16px;
  right: 8%;
  top: 15%;
  justify-content: center;
  align-items: center;
`;

export const NameOfLesson = styled.Text`
  font-family: 'Rubik-Regular';
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 20px;

  color: #6c6c80;

  align-self: center;
  bottom: 52%;
  max-width: 135px;
`;

export const LessonInfo = styled.Text`
  font-family: 'Roboto-Regular';
  font-style: normal;
  font-weight: normal;
  font-size: 10px;
  line-height: 12px;

  /* identical to box height */

  /* Texto / Inputs */
  color: #c4c4d1;
`;

export const LessonStatus = styled.View`
  align-items: center;
  justify-content: center;
  width: 63px;
  height: 16px;
  background: #61c5bd;
  border-radius: 12px;
`;

export const LessonStatusText = styled.Text`
  font-family: 'Roboto-Medium';
  font-weight: 500;
  font-size: 10px;
  line-height: 10px;

  /* identical to box height, or 100% */

  /* Shapes / Principal */
  color: #ffffff;
`;
