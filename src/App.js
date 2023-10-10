import { useEffect } from "react";
import { useTelegram } from "./hooks/useTelegram";
import Form from "./components/Form/Form";
import Header from "./components/Header/Header";
import "./App.css";

function App() {
  const { tg, onToggleButton } = useTelegram();
  useEffect(() => {
    tg.ready();
  }, [tg, onToggleButton]);

  return (
    <div className='App'>
      <Header />
      <Form />
    </div>
  );
}

export default App;
