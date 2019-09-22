import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  margin: 60px 0;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  h1 {
    font-size: 32px;
    color: #fff;
  }

  .actions {
    display: flex;

    a {
      margin-right: 15px;
    }

    a.btn,
    button {
      display: flex;
      height: 42px;
    }
  }
`;
