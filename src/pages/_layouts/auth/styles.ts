import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background: linear-gradient(180deg, #22202c, #402845);
`;

export const Content = styled.div`
  width: 100%;
  max-width: 315px;
  text-align: center;

  form {
    button {
      margin: 5px 0 0;
      height: 44px;
    }
  }
`;
