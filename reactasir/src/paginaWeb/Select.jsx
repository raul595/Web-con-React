import React, { useState } from 'react';
import heroes from './heroes.json';

function SuperheroSelect() {
  const [selectedHero, setSelectedHero] = useState("");

  const handleChange = (event) => {
    setSelectedHero(event.target.value);
  };

  return (
    <div>
      <h4>Seleccione un Superhéroe</h4>
      <select value={selectedHero} onChange={handleChange}>
        <option value="">Seleccione un superhéroe</option>
        {heroes.map(hero => (
          <option key={hero.superhero} value={hero.superhero}>
            {hero.superhero} ({hero.publisher})
          </option>
        ))}
      </select>

      {selectedHero && (
        <div>
          <h2>Detalles del Superhéroe</h2>
          <p><strong>Superhéroe:</strong> {selectedHero}</p>
          {heroes
            .filter(hero => hero.superhero === selectedHero)
            .map(hero => (
              <div key={hero.superhero}>
                <p><strong>Alter Ego:</strong> {hero.alter_ego}</p>
                <p><strong>Primera Aparición:</strong> {hero.first_appearance}</p>
                <p><strong>Personajes:</strong> {hero.characters}</p>
              </div>
            ))}
        </div>
      )}
    </div>
  );
}

export default SuperheroSelect;
