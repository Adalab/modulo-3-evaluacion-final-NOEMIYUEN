import CharacterCard from './CharacterCard';

function CharacterList({ characters }) {
  const characterElement = characters.map((character) => {
    return <CharacterCard character={character} />;
  });

  return <ul className="list"> {characterElement}</ul>;
}

export default CharacterList;
