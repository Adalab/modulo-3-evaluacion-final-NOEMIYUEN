import PropTypes from 'prop-types';
import CharacterCard from './CharacterCard';

function CharacterList({ characters }) {
  const characterElement = characters.map((character) => {
    return <CharacterCard character={character} />;
  });

  return (
    <section className="characterSection">
      <ul className="list">{characterElement}</ul>
    </section>
  );
}

CharacterList.prototype = {
  characters: PropTypes.array.isRequired,
};

export default CharacterList;
