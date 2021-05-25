/* eslint-disable react/prop-types */
import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const AuthContext = createContext({});

export const AuthContextProvider = (props) => {
  const { children } = props;
  const [isValidated, setValidated] = useState(false);

  return (
    <AuthContext.Provider value={{ isValidated, setValidated }}>
      {children}
    </AuthContext.Provider>
  );
};

AuthContext.propTypes = {
  children: PropTypes.node,
};
