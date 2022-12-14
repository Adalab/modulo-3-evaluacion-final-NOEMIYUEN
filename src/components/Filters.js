import FilterByName from './FilterByName';
import PropTypes from 'prop-types';
import FilterByOrigin from './FilterByOrigin';

function Filters({
  handleFilterName,
  characterData,
  setUserSearch,
  userSearch,
  setHiddenClass,
  origins,
  handleFilterOrigin,
  filterByOrigins,
}) {
  const handleSummit = (ev) => {
    ev.preventDefault();
  };

  return (
    <section className="formSection">
      <form action="" className="formSection__form" onSubmit={handleSummit}>
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
};

export default Filters;
