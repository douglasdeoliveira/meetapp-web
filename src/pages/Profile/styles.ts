import styled from 'styled-components';

export const Container = styled.div`
  max-width: 900px;
  margin: 50px auto;

  form {
    hr {
      border: 0;
      height: 1px;
      background: rgba(255, 255, 255, 0.2);
      margin: 20px 0;
    }

    button {
      margin: 5px 0 0;
      height: 42px;
      align-self: flex-end;
    }
  }
`;
