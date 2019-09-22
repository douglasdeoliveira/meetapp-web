import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  &:hover {
    opacity: 0.7;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    strong {
      margin-top: 10px;
      color: rgba(255, 255, 255, 0.3);
    }
  }

  label {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    height: 300px;
    width: 100%;
    margin-bottom: 15px;
    background: rgba(0, 0, 0, 0.4);
    border-radius: 4px;

    img {
      width: 100%;
      height: 300px;
      object-fit: cover;
      border-radius: 4px;
    }

    input {
      display: none;
    }
  }
`;
