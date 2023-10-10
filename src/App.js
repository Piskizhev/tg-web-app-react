import { useEffect } from "react";
import { useTelegram } from "./hooks/useTelegram";
import { Route, Routes } from "react-router-dom";
import Form from "./components/Form/Form";

import "./App.css";
import Header from "./components/Header/Header";

function App() {
  const { tg, onToggleButton } = useTelegram();
  useEffect(() => {
    tg.ready();
  }, [tg, onToggleButton]);

  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route index element={Form} />
        <Route path='form' element={Form} />
      </Routes>
    </div>
  );
}

export default App;
