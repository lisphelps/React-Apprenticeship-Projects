import './Box.css';
import React from 'react';
import PropTypes from 'prop-types';

function Box(props) {
  const { name } = props;
  const { text } = props;
  const { bubble } = props;
  const { iconurl } = props;
  const { species } = props;
  const { personality } = props;
  const { saying } = props;

  return (
    <div className={name} id="box" style={{ color: `${text}`, backgroundColor: `${bubble}` }}>
      <div id="user">
        <img id="avatar" alt="usericon" src={iconurl} />
        <br />
        <h3>{name}</h3>
        <p>
          {personality}
          {' '}
          {species}
        </p>
      </div>
      <div id="content">
        <h2>{ saying }</h2>
        <p>
          Tom Nook will loan you increasingly ridiculous sums of money payment due date.
          The catch? You must build up and restore this island to literally anything.
          You will receive random items through shaking trees and shooting gift laden balloons.
        </p>
      </div>
    </div>
  );
}

Box.propTypes = {
  name: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  bubble: PropTypes.string.isRequired,
  iconurl: PropTypes.string.isRequired,
  species: PropTypes.string.isRequired,
  personality: PropTypes.string.isRequired,
  saying: PropTypes.string.isRequired,
};

export default Box;
