import { heroes } from '../data/heroes';

// Esta función compara el id mandado como parametro con el id dentro de la base de datos heroes, retorna un nuevo array con el objeto del heroe pasado por parametro.

export const getHeroById = ( id ) => {

  return heroes.filter( hero => hero.id === id );
};
