import React, { useMemo } from 'react';
import queryString        from 'query-string';

import { HeroCard }        from '../heroes/HeroCard';
import { useForm }         from '../../hooks/useForm';
import { useLocation }     from 'react-router-dom';
import { getHeroesByName } from '../../selectors/getHeroesByName';

export const SearchScreen = ( { history } ) => {

  //hook de reactrouter para extraer la location
  const location = useLocation();
  const { q = '' } = queryString.parse( location.search );

  //Se llamo al useForm(customHook) y se le paso como initialState el Name del input
  const [values, handleInputChange] = useForm( {
    searchText: q,
  } );

  const { searchText } = values;

  // Llama a la función solo cuando la URL cambie y realize el filtro segun lo que se ingrese
  const heroesFiltered = useMemo( () => getHeroesByName( q ), [q] );

  const handleSearch = ( e ) => {
    e.preventDefault();
    history.push( `?q=${ searchText }` );

  };

  return (
      <div>
        <h1>Search Screen</h1>
        <hr/>

        <div className="row">
          <div className="col-5">
            <h4>Search Form</h4>
            <hr/>

            <form onSubmit={ handleSearch }>
              <input
                  className="form-control"
                  type="text"
                  placeholder="Find your hero"
                  autoComplete="off"
                  name="searchText"
                  onChange={ handleInputChange }
                  value={ searchText }
              />

              <button
                  type="submit"
                  className="btn m-1 btn-block btn-outline-primary"
              >
                Search...
              </button>
            </form>
          </div>

          <div className="col-7">
            <h4>Results</h4>
            <hr/>
            {
              (q === '')
              &&
              <div className="alert alert-info">
                Search a hero
              </div>
            }

            {
              (q !== '' && heroesFiltered.length === 0)
              &&
              <div className="alert alert-danger">
                There is no a hero with { q }
              </div>
            }

            {
              heroesFiltered.map( hero => (
                  <HeroCard
                      key={ hero.id }
                      { ...hero }
                  />
              ) )
            }

          </div>
        </div>


      </div>
  );
};

