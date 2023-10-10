import { useEffect } from "react";
import { useTelegram } from "./hooks/useTelegram";
import "./App.css";
import Header from "./Header/Header";

function App() {
  const { tg, onToggleButton } = useTelegram();
  useEffect(() => {
    tg.ready();
  }, [tg, onToggleButton]);

  return (
    <div className='App'>
      <Header />
      <button onClick={onToggleButton}>toggle</button>
    </div>
  );
}

export default App;
