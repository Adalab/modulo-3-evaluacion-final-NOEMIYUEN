import FilterByName from './FilterByName';
import PropTypes from 'prop-types';

function Filters({
  handleFilterName,
  characterData,
  setUserSearch,
  userSearch,
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
};

export default Filters;
