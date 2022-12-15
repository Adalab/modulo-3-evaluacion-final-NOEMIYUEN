function FilterLocation({ handleLocalInput, checkedLocal, setcheckLocal }) {
  const handleCheckLocation = (ev) => {
    const checked = ev.target.checked;
    if (ev.target.checked) {
      handleLocalInput(checked);
    } else {
      handleLocalInput(false);
    }
  };

  return (
    <ul>
      <li key="123abv">
        <input
          className="formSection__form--originInput"
          type="checkbox"
          onChange={handleCheckLocation}
          value={checkedLocal}
        />
        <label className="formSection__form--labelInput">
          {' '}
          Origin/location{' '}
        </label>
      </li>
    </ul>
  );
}
export default FilterLocation;
