import React from 'react';
import PropTypes from 'prop-types';
import Form from '../Form/Form';
import './Right.css';

export default function Right({ setTest }) {
  return (
    <div className="right">
      <div className="tryit">
        <p>
          <strong>Try it free for 7 days</strong>
          <span> then $20/mo. thereafer</span>
        </p>
      </div>
      <br />
      <Form setTest={setTest} />
    </div>
  );
}

Right.propTypes = {
  setTest: PropTypes.func.isRequired,
};
