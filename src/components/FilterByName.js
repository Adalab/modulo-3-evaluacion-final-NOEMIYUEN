import PropTypes from 'prop-types';

function FilterByName({ handleFilterName, characterData }) {
  const handleInputName = (ev) => {
    const userSearch = ev.target.value.toLowerCase();
    const filterSearch = characterData.filter((character) => {
      if (userSearch === '') {
        return true;
      } else {
        return character.name.toLowerCase().includes(userSearch);
      }
    });
    return handleFilterName(filterSearch);
  };

  return (
    <>
      <input
        type="text"
        className="formSection__form--nameInput"
        id="search"
        placeholder="Busca tu personaje"
        onChange={handleInputName}
      />
    </>
  );
}

FilterByName.prototype = {
  handleFilterName: PropTypes.func,
  characterData: PropTypes.array,
};

export default FilterByName;
