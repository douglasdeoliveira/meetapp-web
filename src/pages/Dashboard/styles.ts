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

  a.btn {
    display: flex;
    align-self: flex-end;
    height: 42px;
  }
`;

export const MeetupsList = styled.ul`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  width: 100%;

  p {
    color: #fff;
    font-size: 18px;
  }
`;

export const MeetupItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 62px;
  background-color: rgba(0, 0, 0, 0.1);
  margin-bottom: 10px;
  border-radius: 4px;
  transition: background 0.2s;

  &:hover {
    background-color: rgba(0, 0, 0, 0.25);
  }

  strong {
    color: #fff;
    margin-left: 30px;
    font-size: 18px;
    line-height: 21px;
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;

    span {
      color: #fff;
      margin-right: 30px;
      font-size: 16px;
      line-height: 19px;
    }

    svg {
      margin-right: 20px;
    }
  }
`;
