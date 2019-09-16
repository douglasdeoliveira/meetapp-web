import styled from 'styled-components';

export const Container = styled.div<{ teste: boolean }>`
  h1 {
    color: ${props => (props.teste ? 'black' : 'red')};
  }
`;
