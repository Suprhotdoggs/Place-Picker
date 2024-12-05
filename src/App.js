import Header from "./components/Header";
import Places from "./components/Places";

import { useState } from "react";

import { AVAILABLE_PLACES } from "./data";

export default function App() {
  const [pickedPlaces, setPickedPlaces] = useState([]);

  function handleSelectedPlace(id) {
    setPickedPlaces((prevState) => {
      if (prevState.some((place) => place.id === id)) {
        return prevState;
      }

      const place = AVAILABLE_PLACES.find((place) => place.id === id);
      return [place, ...prevState];
    });
  }

  return (
    <>
      <Header />
      <Places
        onSelectPlace={handleSelectedPlace}
        title="I'd like to visit..."
        places={pickedPlaces}
      />

      <Places
        onSelectPlace={handleSelectedPlace}
        title="Available Places"
        places={AVAILABLE_PLACES}
      />
    </>
  );
}
