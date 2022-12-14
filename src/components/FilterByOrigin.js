import PropTypes from 'prop-types';

function FilterByOrigin({ origins, handleFilterOrigin, filterByOrigins }) {
  const handleOriginInput = (ev) => {
    handleFilterOrigin(ev.target.value);
  };

  const renderOrigins = () => {
    return origins.map((origin, index) => {
      return (
        <li key={index}>
          <input
            className="formSection__form--originInput"
            type="checkbox"
            onChange={handleOriginInput}
            value={origin}
            checked={filterByOrigins.includes(origin)}
          />
          <label className="formSection__form--labelInput"> {origin}</label>
        </li>
      );
    });
  };

  return <ul className="list">{renderOrigins()}</ul>;
}

FilterByOrigin.prototype = {
  origins: PropTypes.func,
  handleFilterOrigin: PropTypes.func,
  filterByOrigins: PropTypes.array,
};

export default FilterByOrigin;
