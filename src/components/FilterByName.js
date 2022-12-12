import PropTypes from 'prop-types';

function FilterByName({ handleFilterName, characterData }) {
  const handleInputName = (ev) => {
    const userSearch = ev.target.value.toLowerCase();

    console.log(userSearch);
    console.log(characterData);
    const filterSearch = characterData.filter((character) =>
      character.name.toLowerCase().includes(userSearch)
    );
    console.log(filterSearch);
    return handleFilterName(filterSearch);

    /*   const filterSearch = characterData.filter((eachCharacter) =>
      eachCharacter.name.toLowerCase().incluides(userSearch)
    );
    console.log(filterSearch);
    handleFilterName(filterSearch); */
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
