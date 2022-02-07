import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import possibleWins from "../data/wins";

interface IGameContext {
  player: "X" | "O";
  handlePlayer: (value: "X" | "O") => void;
  handleGameAction: (action: IActions) => void;
  actions: IActions[];
}

interface IActions {
  value: "X" | "O";
  button: string;
}

interface GameProviderProps {
  children: React.ReactNode;
}

const GameContext = createContext<IGameContext>({} as IGameContext);

export const GameProvider = ({ children }: GameProviderProps) => {
  const [player, setPlayer] = useState<"X" | "O">("X");
  const [actions, setActions] = useState<IActions[]>([]);
  const [gameTurn, setGameTurn] = useState("player");
  const [winner, setWinner] = useState<"X" | "O" | null>(null);

  const handlePlayer = useCallback((value: "X" | "O") => {
    setPlayer(value);
  }, []);

  const verifyWin = useCallback((actions, value) => {
    const win = possibleWins(actions, value);

    if (win === "win") {
      setWinner(value);
    }
  }, []);

  const handleCPUGameAction = useCallback(() => {
    const cpuPlayer = player === "X" ? "O" : "X";

    if (winner) {
      console.log("Winner");
      return;
    }

    const cpuButton = `btn-${Math.floor(Math.random() * (9 - 1 + 1) + 1)}`;

    console.log("CPU Button:", cpuButton);

    setGameTurn("player");

    const findButton = actions.find((action) => action.button === cpuButton);
    const cpuAction: IActions = {
      value: cpuPlayer,
      button: cpuButton,
    };

    if (findButton) {
      handleCPUGameAction();
      return;
    }

    setActions((prevState) => {
      verifyWin([...prevState, cpuAction], cpuPlayer);

      return [...prevState, cpuAction];
    });
  }, [player, actions, winner, verifyWin]);

  const handleGameAction = useCallback(
    ({ value, button }: IActions) => {
      if (gameTurn === "cpu" || winner) {
        return;
      }

      setActions((prevState) => {
        verifyWin([...prevState, { value, button }], value);

        return [...prevState, { value, button }];
      });

      setGameTurn("cpu");
    },
    [gameTurn, winner, verifyWin]
  );

  useEffect(() => {
    if (gameTurn === "cpu") {
      setTimeout(() => {
        handleCPUGameAction();
      }, 1000);
    }
  }, [gameTurn, handleCPUGameAction]);

  return (
    <GameContext.Provider
      value={{ player, actions, handleGameAction, handlePlayer }}
    >
      {children}
    </GameContext.Provider>
  );
};

export const useGame = () => {
  const context = useContext(GameContext);

  if (!context) {
    throw new Error("useGame must be used within a GameProvider");
  }

  return context;
};
