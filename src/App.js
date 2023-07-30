import { useEffect } from 'react';
import './App.css';
import Header from './components/Header/Header'
import { UseTelegram } from './hooks/useTelegram';



function App() {
  const {onToggleButton, tg} = UseTelegram();

  useEffect( () => {
    tg.ready();


  }, [])


  return (
    <div className="App">
      <Header/>
      <button onClick={onToggleButton}> toggle </button>
      work
    </div>
  );
}

export default App;
