import React from 'react';
import Form from '../Form/Form';
import './Right.css';

export default function Right() {
  return (
    <div className="right">
      <div className="tryit">
        <p>
          <strong>Try it free for 7 days</strong>
          {' '}
          then $20/mo. thereafer
        </p>
      </div>
      <br />
      <Form />
    </div>
  );
}
