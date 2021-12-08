import React, { useContext } from 'react';
import { AuthContext }       from '../../auth/AuthContext';

export const LoginScreen = ( { history } ) => {

  //Llamamos a la funcion dispach con el context
  const { dispatch } = useContext( AuthContext );

  //Creamos la acción de login con le type y payload(los parametros)
  const accionLogin = {
    type: '[auth] login',
    payload: {
      name: 'Fabian',
    },
  };

  const handleLogin = () => {

    const lastPath = localStorage.getItem( 'lasPath' ) || '/';

    //El navegador no recuerda la dirección anterior
    //history.replace( '/' );

    //Pasamos la acción como parametro del dispatch
    dispatch( accionLogin );
    history.replace( lastPath );
  };

  return (
      <div className="container mt-5">
        <h1>Login</h1>
        <hr/>

        <button
            className="btn btn-primary"
            onClick={ handleLogin }
        >
          Login
        </button>
      </div>
  );
};


