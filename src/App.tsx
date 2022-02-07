import React from "react";
import { GameProvider } from "./contexts/GameContext";
import Home from "./pages/Home";

import GlobalStyle from "./styles/global";

function App() {
  return (
    <GameProvider>
      <Home />
      <GlobalStyle />
    </GameProvider>
  );
}

export default App;
