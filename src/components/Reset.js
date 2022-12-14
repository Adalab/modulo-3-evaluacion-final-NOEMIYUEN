import PropTypes from 'prop-types';
import resetRick from '../images/resetRick.png';

function Reset(props) {
  return (
    <button className="reset" type="reset" onClick={props.handleReset}>
      <p>Reset</p>
      <img
        className="header__img"
        src={resetRick}
        alt="Rick with portal-gun"
        title="Reset"
      />
      {/* <i className="fa-regular fa-trash-can"></i>  */}
    </button>
  );
}
export default Reset;

Reset.propTypes = {
  handleReset: PropTypes.func.isRequired,
};
