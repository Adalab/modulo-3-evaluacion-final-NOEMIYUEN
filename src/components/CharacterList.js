import PropTypes from 'prop-types';
import CharacterCard from './CharacterCard';
import NotFound from './NotFound';

function CharacterList({ characters }) {
  const characterElement = characters.map((character) => {
    return <CharacterCard character={character} />;
  });

  return (
    <>
      <section className="characterSection">
        <ul className="list">{characterElement}</ul>
      </section>
      <NotFound characters={characters} />
    </>
  );
}

CharacterList.prototype = {
  characters: PropTypes.array.isRequired,
};

export default CharacterList;
