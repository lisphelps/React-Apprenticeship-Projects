/* eslint-disable no-console */
import './Box.css';
import React from 'react';
import PropTypes from 'prop-types';

function Box(props) {
  const { name } = props;
  // const { id } = props;
  const { text } = props;
  const { bubble } = props;
  const { iconurl } = props;
  const { species } = props;
  const { personality } = props;
  const { saying } = props;

  console.log(name);

  return (
    <div className="critters" style={{ color: { text }, backgroundColor: { bubble } }}>
      <div id="user">
        <img id="avatar" alt="usericon" src={iconurl} />
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
          Myself and the other residents will be ridiculously happy with whatever you choose to do.
          Sound like a fever dream too good to be true? It is not! Prepare yourself to lose hours.
        </p>
      </div>
    </div>
  );
}

Box.propTypes = {
//  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  bubble: PropTypes.string.isRequired,
  iconurl: PropTypes.string.isRequired,
  species: PropTypes.string.isRequired,
  personality: PropTypes.string.isRequired,
  saying: PropTypes.string.isRequired,
};

export default Box;
