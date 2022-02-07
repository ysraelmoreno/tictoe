import { MouseEvent, useCallback } from "react";
import { useGame } from "../../contexts/GameContext";
import {
  Container,
  Wrapper,
  GameContainer,
  ButtonContainer,
  Button,
} from "./styles";

function Home() {
  const { actions, handleGameAction, player } = useGame();

  const handleGameClick = useCallback(
    (ev: MouseEvent<HTMLButtonElement>) => {
      handleGameAction({ value: player, button: ev.currentTarget.id });
    },
    [handleGameAction, player]
  );

  return (
    <Container>
      <Wrapper>
        <h1>
          tic<strong>.TOE</strong>
        </h1>
      </Wrapper>
      <GameContainer>
        <ButtonContainer>
          <Button onClick={handleGameClick} id="btn-1">
            {actions?.find((action) => action.button === "btn-1")?.value}
          </Button>
          <Button onClick={handleGameClick} id="btn-2">
            {actions?.find((action) => action.button === "btn-2")?.value}
          </Button>
          <Button onClick={handleGameClick} id="btn-3">
            {actions?.find((action) => action.button === "btn-3")?.value}
          </Button>
        </ButtonContainer>
        <ButtonContainer>
          <Button onClick={handleGameClick} id="btn-4">
            {actions?.find((action) => action.button === "btn-4")?.value}
          </Button>
          <Button onClick={handleGameClick} id="btn-5">
            {actions?.find((action) => action.button === "btn-5")?.value}
          </Button>
          <Button onClick={handleGameClick} id="btn-6">
            {actions?.find((action) => action.button === "btn-6")?.value}
          </Button>
        </ButtonContainer>
        <ButtonContainer>
          <Button onClick={handleGameClick} id="btn-7">
            {actions?.find((action) => action.button === "btn-7")?.value}
          </Button>
          <Button onClick={handleGameClick} id="btn-8">
            {actions?.find((action) => action.button === "btn-8")?.value}
          </Button>
          <Button onClick={handleGameClick} id="btn-9">
            {actions?.find((action) => action.button === "btn-9")?.value}
          </Button>
        </ButtonContainer>
      </GameContainer>
    </Container>
  );
}

export default Home;
