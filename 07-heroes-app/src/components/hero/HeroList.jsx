import React from "react";
import { HeroCard } from "./HeroCard";
import { getHeroByPublisher } from "../../selectors/getHeroByPublisher";

export const HeroList = ({ publisher }) => {
  const heroes = getHeroByPublisher(publisher);
  return (
    <div className="row rows-cols-1 row-cols-md-3 g-3">
        {heroes.map((hero) => (
          <HeroCard key={hero.id}
            {...hero}
          />
        ))}
    </div>
  );
};
