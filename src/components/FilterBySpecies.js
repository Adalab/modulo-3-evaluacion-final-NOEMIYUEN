import PropTypes from 'prop-types';

function FilterBySpecies({
  characterData,
  handleFilterSpecies,
  userSelect,
  setUserSelect,
}) {
  const handleSelectSpecies = (ev) => {
    setUserSelect(ev.target.value);
    const selectedSpecies = characterData.filter((character) => {
      if (ev.target.value === 'All') {
        return true;
      } else {
        return character.species
          .toLowerCase()
          .includes(ev.target.value.toLowerCase());
      }
    });
    handleFilterSpecies(selectedSpecies);
    console.log(userSelect);
    return userSelect;
  };

  return (
    <div className="speciesBox">
      <label htmlFor="species" className="speciesBox__label">
        {' '}
        Choose Species{' '}
      </label>
      <select
        className="speciesBox__select"
        type="select"
        name="species"
        onChange={handleSelectSpecies}
        value={userSelect}
      >
        <option value="All">All</option>
        <option value="Alien">Alien</option>
        <option value="Human">Human</option>
      </select>
    </div>
  );
}

FilterBySpecies.prototype = {
  characterData: PropTypes.array,
  handleFilterSpecies: PropTypes.func,
  userSelect: PropTypes.array,
  setUserSelec: PropTypes.func,
};

export default FilterBySpecies;
