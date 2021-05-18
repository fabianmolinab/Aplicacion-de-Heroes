import React, { useContext }         from 'react';
import { Link, NavLink, useHistory } from 'react-router-dom';
import { AuthContext }               from '../../auth/AuthContext';

export const Navbar = () => {

  // Llamamos las propiedades del context
  const { user, dispatch } = useContext( AuthContext );

  //useHistory es un Hook que contiene todos las propiedades del context
  const history = useHistory();

  const accionLogout = {
    type: '[auth] logout',
  };

  const handleLogout = () => {
    // hacer el dispach del logout en el reducer
    // quitar el nombre y logged en false

    dispatch( accionLogout );
    history.replace( '/login' );
  };
  return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">

        <Link
            className="navbar-brand"
            to="/"
        >
          Asociaciones
        </Link>

        <div className="navbar-collapse">
          <div className="navbar-nav">

            <NavLink
                activeClassName="active"
                className="nav-item nav-link"
                exact
                to="/marvel"
            >
              Marvel
            </NavLink>

            <NavLink
                activeClassName="active"
                className="nav-item nav-link"
                exact
                to="/dc"
            >
              DC
            </NavLink>

            <NavLink
                activeClassName="active"
                className="nav-item nav-link"
                exact
                to="/Search"
            >
              Search
            </NavLink>
          </div>
        </div>

        <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
          <ul className="navbar-nav ml-auto">

            <span className="nav-item nav-link text-info">
              { `hello ${ user.name }` }
            </span>

            <button
                className="nav-item nav-link btn"
                onClick={ handleLogout }
            >
              Logout
            </button>
          </ul>

        </div>

      </nav>
  );
};