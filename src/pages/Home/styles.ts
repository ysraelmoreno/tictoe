import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100vh;
`;

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1240px;
  margin: 0 auto;
  width: 100%;
  padding: 40px 0;

  h1 {
    color: white;
    font-size: 36px;

    strong {
      color: #c8a13e;
    }
  }
`;

export const GameContainer = styled.div`
  max-width: 300px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;

  & + div {
    margin-top: 20px;
  }
`;

export const Button = styled.button`
  width: 100px;
  height: 80px;
  border: none;
  background-color: #152e45;
  border-radius: 10px;
  color: #fff;
  font-size: 38px;
  font-weight: bold;
  & + button {
    margin-left: 30px;
  }
`;
