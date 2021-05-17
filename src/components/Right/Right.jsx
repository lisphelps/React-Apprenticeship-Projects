import React from 'react';
import PropTypes from 'prop-types';
import Form from '../Form/Form';
import './Right.css';

export default function Right({ setValidated }) {
  return (
    <div className="right">
      <div className="tryit">
        <p>
          <strong>Try it free for 7 days</strong>
          <span> then $20/mo. thereafer</span>
        </p>
      </div>
      <br />
      <Form setValidated={setValidated} />
    </div>
  );
}

Right.propTypes = {
  setValidated: PropTypes.func.isRequired,
};
