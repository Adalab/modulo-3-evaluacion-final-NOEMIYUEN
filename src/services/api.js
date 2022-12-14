function getCharacterFromApi() {
  return fetch(
    'https://rickandmortyapi.com/api/character'

    //Api alternativa en caso de saturar las peticiones
    /* 'https://raw.githubusercontent.com/Adalab/rick-y-morty/master/data/rick-y-morty.json' */
  )
    .then((response) => response.json())
    .then((data) => {
      const cleanData = data.results.map((character) => {
        return {
          id: character.id.toString(),
          name: character.name,
          status: character.status,
          species: character.species,
          origin: character.origin.name,
          image: character.image,
          episodes: character.episode.length.toString(),
        };
      });
      return cleanData;
    });
}

export default getCharacterFromApi;
