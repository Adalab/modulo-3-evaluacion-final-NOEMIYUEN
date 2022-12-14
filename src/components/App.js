import { useState, useEffect } from 'react';
import getCharacterFromApi from '../services/api';
import ls from '../services/localstorage';

import '../styles/App.scss';
import CharacterList from './CharacterList';
import CharacterDetail from './CharacterDetail';
import Filters from './Filters';
import Header from './Header';
import { Route, Routes, matchPath, useLocation } from 'react-router-dom';
import Footer from './Footer';
import Loading from './Loading';

function App() {
  // VARIABLES ESTADO
  const [characterData, setcharacterData] = useState(
    ls.get('characterData', [])
  );
  const [filterByName, setFilterByName] = useState([]);
  const [userSearch, setUserSearch] = useState('');
  const [userSelect, setUserSelect] = useState('All');
  const [filterByOrigins, setFilterByOrigins] = useState([]);
  const [filterBySpecies, setFilterBySpecies] = useState([]);
  const [isLoading, setisLoading] = useState(true);

  const [checkedLocal, setcheckLocal] = useState(false);

  // USEEFFECT

  useEffect(() => {
    getCharacterFromApi().then((cleanData) => {
      setisLoading(false);
      setcharacterData(cleanData.sort(compareName));
      setFilterByName(cleanData);
      ls.set('characterData', cleanData);
    });
  }, []);

  // FUNCION ES HANDLER

  const handleFilterName = (value) => {
    setFilterByName(value);
  };

  const handleFilterSpecies = (value) => {
    setFilterBySpecies(value);
  };

  const handleFilterOrigin = (value) => {
    if (filterByOrigins.includes(value)) {
      const position = filterByOrigins.indexOf(value);
      filterByOrigins.splice(position, 1);
      setFilterByOrigins([...filterByOrigins]);
    } else {
      setFilterByOrigins([...filterByOrigins, value]);
    }
  };

  const handleReset = () => {
    console.log(characterData);
    setUserSelect('All');
    setUserSearch('');
    setFilterByName([...characterData]);
    setFilterByOrigins([]);
    setFilterBySpecies([]);
    setcheckLocal(false);
  };

  const handleLocalInput = (value) => {
    setcheckLocal(value);
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

  const getOrigin = () => {
    const userOrigin = characterData.map((character) => character.origin);
    const uniqueOriginSet = new Set(userOrigin);
    const uniqueOrigin = [...uniqueOriginSet]; //meter set en un array
    return uniqueOrigin;
  };

  const allFilterData = characterData
    .filter((character) => {
      if (checkedLocal === true) {
        return character.origin.includes(character.location);
      } else {
        return true;
      }
    })
    .filter((character) => {
      return filterByName.includes(character);
    })
    .filter((character) => {
      if (filterBySpecies.length === 0) {
        return true;
      } else {
        return filterBySpecies.includes(character);
      }
    })
    .filter((character) => {
      if (filterByOrigins.length === 0) {
        return true;
      } else {
        return filterByOrigins.includes(character.origin);
      }
    });

  // HTML EN EL RETURN

  return (
    <>
      <Header />

      <main className="main">
        {isLoading ? (
          <Loading />
        ) : (
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
                    origins={getOrigin()}
                    handleFilterOrigin={handleFilterOrigin}
                    filterByOrigins={filterByOrigins}
                    handleFilterSpecies={handleFilterSpecies}
                    userSelect={userSelect}
                    setUserSelect={setUserSelect}
                    handleReset={handleReset}
                    handleLocalInput={handleLocalInput}
                    checkedLocal={checkedLocal}
                    setcheckLocal={setcheckLocal}
                  />
                  <CharacterList characters={allFilterData} />
                  {/* <CharacterList characters={filterByName} /> */}
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
        )}
      </main>
      <Footer />
    </>
  );
}

export default App;
