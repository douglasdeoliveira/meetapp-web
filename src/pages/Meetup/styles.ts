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

export const Banner = styled.img`
  margin-top: 30px;
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 4px;
`;

export const Description = styled.div`
  margin-top: 25px;

  p {
    font-size: 18px;
    line-height: 32px;
    color: #fff;
  }
`;

export const Info = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-top: 30px;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    color: rgba(255, 255, 255, 0.6);

    svg {
      margin-right: 10px;
    }
  }

  div + div {
    margin-left: 30px;
  }
`;
