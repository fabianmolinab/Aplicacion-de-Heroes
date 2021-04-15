import { heroes } from '../data/heroes';

export const getHeroesByPublisher = ( publisher ) => {

  const validPublishers = ['DC Comics', 'Marvel Comics'];

  //Lanza un error si Publishers si no es de los dos tipos de Comics
  if ( !validPublishers.includes( publisher ) ) {
    throw new Error( `Publisher "${ publisher }" no es correcto` );
  }
  return heroes.filter( hero => hero.publisher === publisher );
};