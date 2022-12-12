import FilterByName from './FilterByName';
import PropTypes from 'prop-types';

function Filters({ handleFilterName, characterData }) {
  return (
    <>
      <FilterByName
        handleFilterName={handleFilterName}
        characterData={characterData}
      />
    </>
  );
}

Filters.prototype = {
  handleFilterName: PropTypes.func,
  characterData: PropTypes.array,
};

export default Filters;
