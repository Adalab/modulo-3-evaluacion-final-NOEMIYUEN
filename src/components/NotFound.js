import PropTypes from 'prop-types';
import portal from '../images/portalRick.png';
function NotFound({ classHide }) {
  return (
    <section className={classHide}>
      <article className="sectionNotFound__card">
        <h1 className="sectionNotFound__card--title">Wubba Lubba Dub Dub!!</h1>
        <h2 className="sectionNotFound__card--text">
          Character not found, are you sure you're looking in the right
          dimension?
        </h2>
        <img
          className="sectionNotFound__card--img"
          src={portal}
          alt="portal to another dimension"
          title="portal to another dimension"
        />
      </article>
    </section>
  );
}

NotFound.prototype = {
  classHide: PropTypes.string,
};

export default NotFound;
