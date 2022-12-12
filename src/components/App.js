import { useState, useEffect } from 'react';
import getCharacterFromApi from '../services/api';
/* import ls from '../services/localstorage'; */

import '../styles/App.scss';
import CharacterList from './CharacterList';
import Filters from './Filters';
import Header from './Header';

function App() {
  // VARIABLES ESTADO
  const [characterData, setcharacterData] = useState([]);
  const [filterByName, setFilterByName] = useState([]);

  // USEEFFECT

  useEffect(() => {
    getCharacterFromApi().then((cleanData) => {
      setcharacterData(cleanData);
    });
  }, []);

  // FUNCION ES HANDLER

  const handleSummit = (ev) => {
    ev.preventDefault();
  };

  const handleFilterName = (value) => {
    setFilterByName(value);
  };

  // FUNCIONES Y VARIABLES QUE AYUDEN A RENDERIZAR HTML

  // HTML EN EL RETURN

  return (
    <>
      <Header />
      <main className="main">
        <section className="formSection">
          <form action="" className="formSection__form" onSubmit={handleSummit}>
            <Filters
              handleFilterName={handleFilterName}
              characterData={characterData}
            />
          </form>
        </section>
        <section className="characterSection">
          <CharacterList characters={filterByName} />
        </section>
      </main>
    </>
  );
}

export default App;
