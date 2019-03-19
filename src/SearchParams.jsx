import React, { useState } from "react";
import { ANIMALS } from "petfinder-client";
const SearchParams = () => {
  const [location, setLocation] = useState("Kathmandu");
  const [animal, setAnimal] = useState("dog");
  const [breeds, setBreeds] = useState([]);
  const [breed, setBreed] = useState("Havanes");
  return (
    <div>
      <form action="">
        <label htmlFor="location">
          Location
          <input
            type="text"
            id="location"
            value={location}
            placeholder="location"
            onChange={e => setLocation(e.target.value)}
          />
        </label>
        <br />
        <br />
        <label htmlFor="animal">
          Animal
          <select
            id="animal"
            value={animal}
            onChange={e => setAnimal(e.target.value)}
            onBlur={e => setAnimal(e.target.value)}
          >
            <option value="" />
            {ANIMALS.map(animal => (
              <option key={animal} value={animal}>
                {animal}
              </option>
            ))}
          </select>
        </label>
        <br />
        <br />
        <label htmlFor="breed">
          breeds
          <select
            name=""
            id="breed"
            value={breed}
            onChange={e => setBreed(e.target.value)}
            onBlur={e => setBreed(e.target.value)}
            disabled={!breeds.length}
          >
            <option />
            {breeds.map(breed => (
              <option key={breed} value={breed}>
                {breed}
              </option>
            ))}
          </select>
        </label>
        <br />
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
};
export default SearchParams;
