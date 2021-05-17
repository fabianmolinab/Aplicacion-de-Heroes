import React, { useReducer } from 'react';
import { AppRouter }         from './routers/AppRouter';
import { AuthContext }       from './auth/AuthContext';
import { authReducer }       from './auth/authReducer';

//El objeto inicial pasara el user del local storage sino pasa un objeto con {logged: false}

const init = () => {
  return JSON.parse( localStorage.getItem( 'user' ) ) || {
    logged: false,
  };
};

export const HeroesApp = () => {

  //useReducer para pasarlo por toda la aplicación
  const [user, dispatch] = useReducer( authReducer, {}, init );

  return (
      <AuthContext.Provider value={ { user, dispatch } }>
        <AppRouter/>
      </AuthContext.Provider>
  );
};