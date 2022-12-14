import { useState, useEffect } from 'react';
import getCharacterFromApi from '../services/api';
/* import ls from '../services/localstorage'; */

import '../styles/App.scss';
import CharacterList from './CharacterList';
import CharacterDetail from './CharacterDetail';
import Filters from './Filters';
import Header from './Header';
import { Route, Routes, matchPath, useLocation } from 'react-router-dom';

function App() {
  // VARIABLES ESTADO
  const [characterData, setcharacterData] = useState([]);
  const [filterByName, setFilterByName] = useState([]);
  const [userSearch, setUserSearch] = useState('');

  // USEEFFECT

  useEffect(() => {
    getCharacterFromApi().then((cleanData) => {
      setcharacterData(cleanData.sort(compareName));
      setFilterByName(cleanData);
    });
  }, []);

  // FUNCION ES HANDLER

  const handleFilterName = (value) => {
    setFilterByName(value);
  };

  // FUNCIONES Y VARIABLES QUE AYUDEN A RENDERIZAR HTML

  const { pathname } = useLocation();
  const dataUrl = matchPath('/detail/:characterId', pathname);
  const characterId = dataUrl !== null ? dataUrl.params.characterId : null;
  const characterFound = characterData.find(
    (character) => character.id === characterId
  );

  function compareName(a, b) {
    if (a.name.toLowerCase() < b.name.toLowerCase()) {
      return -1;
    }
    if (a.name.toLowerCase() > b.name.toLowerCase()) {
      return 1;
    }
    return 0;
  }

  // HTML EN EL RETURN

  return (
    <>
      <Header />

      <main className="main">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Filters
                  handleFilterName={handleFilterName}
                  characterData={characterData}
                  setUserSearch={setUserSearch}
                  userSearch={userSearch}
                />
                <CharacterList characters={filterByName} />
              </>
            }
          />
          <Route
            path="/detail/:characterId"
            element={
              <section className="cardSection">
                <CharacterDetail character={characterFound} />
              </section>
            }
          />
        </Routes>
      </main>
    </>
  );
}

export default App;
