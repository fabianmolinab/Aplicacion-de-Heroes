import React                   from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { getHeroById }         from '../../selectors/getHeroById';

export const HeroScreen = ( {history} ) => {

  //useParams es un Hook para pasar como parametro algun elemento de la URL
  const {heroeId} = useParams();

  const [ hero ] = getHeroById( heroeId );

  //Validamos el URL si es incorrecto se redirige a home
  if ( !hero ) {
    return <Redirect to="/"/>;
  }

  const handleReturn = () => {

    //goBack regresa a la pagina anterior, no olvides colocar history como parametro
    if ( history.length <= 2 ) {
      history.push( '/' );
    } else {
      history.goBack();
    }

  };

  //Boton de retroceder a la pagina anterior
  const
      {
        superhero,
        publisher,
        alter_ego,
        first_appearance,
        characters,
      } = hero;

  return (
      <div className="row mt-5">
        <div className="col4">
          <img
              src={ `../assets/heroes/${ heroeId }.jpg` }
              alt={ superhero }
              className="img-thumbnail"
          />
        </div>

        <div className="col-8">
          <h3> { superhero }</h3>
          <ul className="list-group list-group-flush">
            <li className="list-group-item"><b>Alter ego: </b> { alter_ego }
            </li>
            <li className="list-group-item"><b>Publisher: </b> { publisher }
            </li>
            <li className="list-group-item"><b>First
              appearance: </b> { first_appearance }</li>
          </ul>

          <h5> Characters </h5>
          <p> { characters } </p>

          <button className="btn btn-outline-info"
                  onClick={ handleReturn }
          >
            Return
          </button>

        </div>
      </div>
  );
};
