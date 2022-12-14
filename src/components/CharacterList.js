import PropTypes from 'prop-types';
import CharacterCard from './CharacterCard';
import NotFound from './NotFound';

function CharacterList({ characters, classHide, setHiddenClass }) {
  const characterElement = characters.map((character) => {
    return <CharacterCard character={character} />;
  });
  if (characters.length === 0) {
    setHiddenClass('sectionNotFound');
  } else {
    setHiddenClass('hide');
  }

  return (
    <>
      <section className="characterSection">
        <ul className="list">{characterElement}</ul>
      </section>
      <NotFound classHide={classHide} />
    </>
  );
}

CharacterList.prototype = {
  characters: PropTypes.array.isRequired,
  classHide: PropTypes.string,
  setHiddenClass: PropTypes.func,
};

export default CharacterList;
