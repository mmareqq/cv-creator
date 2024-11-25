import './styles/tailwind.css';
import './styles/reset.css';
import './styles/global.css';
import { useState } from 'react';
import MainPage from './components/MainPage';
import StartingPage from './components/StartingPage';
import Header from './components/Header';

function App() {
  const [appState, setAppState] = useState('starting');
  return (
    <>
      <Header />
      {appState === 'starting' ? <StartingPage changeState={changeState} /> : <MainPage />}
    </>
  );

  function changeState(state = 'running') {
    setAppState(state);
  }
}

export default App;
