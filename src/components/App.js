import { useState, useEffect } from 'react';
import getCharacterFromApi from '../services/api';
import ls from '../services/localstorage';

import '../styles/App.scss';
import CharacterList from './CharacterList';
import Header from './Header';

function App() {
  // VARIABLES ESTADO
  const [characterData, setcharacterData] = useState([]);

  // USEEFFECT

  useEffect(() => {
    getCharacterFromApi().then((cleanData) => {
      setcharacterData(cleanData);
    });
  }, []);
  console.log(characterData);

  // FUNCION ES HANDLER

  // FUNCIONES Y VARIABLES QUE AYUDEN A RENDERIZAR HTML

  // HTML EN EL RETURN

  return (
    <>
      <Header />
      <main className="main">
        <CharacterList characters={characterData} />
      </main>
    </>
  );
}

export default App;
