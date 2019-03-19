import React, { useState } from "react";
import { ANIMALS } from "petfinder-client";
import useDropdown from "./useDropdown.jsx";
const SearchParams = () => {
  const [location, setLocation] = useState("Kathmandu");
  // const [animal, setAnimal] = useState("dog");
  const [breeds, setBreeds] = useState([]);
  const [animal, AnimalDropdown] = useDropdown("Aninal", "dog", ANIMALS);
  const [breed, BreedDropdown] = useDropdown("Breed", "", breeds);

  // const [breed, setBreed] = useState("Havanes");
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
        <AnimalDropdown />
        <br />
        <br />
        <BreedDropdown />
        <br />
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
};
export default SearchParams;
