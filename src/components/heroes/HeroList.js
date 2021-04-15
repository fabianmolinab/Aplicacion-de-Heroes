import React                    from 'react';
import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher';

export const HeroList = ( { publisher } ) => {

  const heroes = getHeroesByPublisher( publisher );

  return (
      <div className="card-columns">
        {
          heroes.map( hero => (
              <HeroList
                  key={ hero.id }
                  { ...hero }
              />

          ) )
        }
      </div>
  );
};