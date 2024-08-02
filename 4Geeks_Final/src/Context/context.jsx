import React, { createContext, useState, useEffect } from 'react';

const MyContext = createContext();

export const MyProvider = ({ children }) => {






    
    /* Add variable names within appContext */
    let appContext = {}

    return (
        <MyContext.Provider value={appContext}>
          {children}
        </MyContext.Provider>
      );
};

export default MyContext