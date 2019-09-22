import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  margin: 60px 0;

  form {
    width: 100%;

    input {
      width: 100%;
    }

    textarea {
      height: 200px;
    }

    > button {
      margin: 5px 0 0;
      height: 42px;
      align-self: flex-end;
    }
  }
`;
