import FilterByName from './FilterByName';
import PropTypes from 'prop-types';
import FilterByOrigin from './FilterByOrigin';
import FilterBySpecies from './FilterBySpecies';

function Filters({
  handleFilterName,
  characterData,
  setUserSearch,
  userSearch,
  setHiddenClass,
  origins,
  handleFilterOrigin,
  filterByOrigins,
  handleFilterSpecies,
  userSelect,
  setUserSelect,
}) {
  const handleSummit = (ev) => {
    ev.preventDefault();
  };

  return (
    <section className="formSection">
      <form action="" className="formSection__form" onSubmit={handleSummit}>
        <div className="wrapBox">
          <FilterByName
            handleFilterName={handleFilterName}
            characterData={characterData}
            setUserSearch={setUserSearch}
            userSearch={userSearch}
            setHiddenClass={setHiddenClass}
          />
          <FilterByOrigin
            origins={origins}
            handleFilterOrigin={handleFilterOrigin}
            filterByOrigins={filterByOrigins}
          />
        </div>
        <FilterBySpecies
          characterData={characterData}
          handleFilterSpecies={handleFilterSpecies}
          userSelect={userSelect}
          setUserSelect={setUserSelect}
        />
      </form>
    </section>
  );
}

Filters.prototype = {
  handleFilterName: PropTypes.func,
  characterData: PropTypes.array,
  setUserSearch: PropTypes.func,
  userSearch: PropTypes.string,
  setHiddenClass: PropTypes.func,
  handleFilterOrigin: PropTypes.func,
  origins: PropTypes.func,
  filterByOrigins: PropTypes.array,
  handleFilterSpecies: PropTypes.func,
  userSelect: PropTypes.array,
  setUserSelec: PropTypes.func,
};

export default Filters;
