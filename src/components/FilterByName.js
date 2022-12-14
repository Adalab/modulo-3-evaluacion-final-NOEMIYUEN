import PropTypes from 'prop-types';

function FilterByName({
  handleFilterName,
  characterData,
  setUserSearch,
  userSearch,
}) {
  const handleInputName = (ev) => {
    setUserSearch(ev.target.value.toLowerCase());

    const filterSearch = characterData.filter((character) => {
      if (ev.target.value.toLowerCase() === '') {
        return true;
      } else {
        return character.name
          .toLowerCase()
          .includes(ev.target.value.toLowerCase());
      }
    });

    handleFilterName(filterSearch);
    return userSearch;
  };

  return (
    <>
      <input
        type="text"
        className="formSection__form--nameInput"
        id="search"
        placeholder="Search your favourite character"
        onChange={handleInputName}
        value={userSearch}
      />
    </>
  );
}

FilterByName.prototype = {
  handleFilterName: PropTypes.func,
  characterData: PropTypes.array,
  setUserSearch: PropTypes.func,
  userSearch: PropTypes.string,
};

export default FilterByName;
