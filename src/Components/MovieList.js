//a container for all the Movie components and their data.

//imports
import React, { Component } from "react";
import Movie from "./Movie"; //need to pull in movies as the list is expected to display them

// import movie poster images
import MOON from '../Posters/Moon.jpg';
import RUBBER from '../Posters/Rubber.jpg';
import HHPOSTER from '../Posters/HHPoster.jpg';

//export default class SomeClass extends React.Component {render()}
export default class MovieList extends Component {
  render() {
    //establishing properties of sample movies
    let Moon = {
      Poster: MOON,
      Title: "Moon",
      Director: "Duncan Jones",
      Runtime: "1h 37m",
      MpaRating: "R",
      YearReleased: 2009,
      id: 0,
      Synopsis: "Astronaut Sam Bell has a quintessentially personal encounter toward the end of his three-year stint on the Moon, where he, working alongside his computer, GERTY, sends back to Earth parcels of a resource that has helped diminish our planet's power problems.",
    };
    let Rubber = {
      Poster: RUBBER,
      Title: "Rubber",
      Director: "Quentin Dupieux",
      Runtime: "1h 22m",
      MpaRating: "R",
      YearReleased: 2010,
      id: 1,
      Synopsis: "A homicidal car tire, discovering it has destructive psionic power, sets its sights on a desert town once a mysterious woman becomes its obsession.",
    };
    let HH = {
      Poster: HHPOSTER,
      Title: "Hardcore Henry",
      Director: "Ilya Naishuller",
      Runtime: "1hr 36m",
      MpaRating: "R",
      YearReleased: 2015,
      id: 1,
      Synopsis: "Henry is resurrected from death with no memory, and he must save his wife from a telekinetic warlord with a plan to bio-engineer soldiers.",
    };

    //then create html. use spread operator {...} so each property
    //can be accessed individually withing the movie component instance
    return (
      <div className="container">
        <h1 className="mt-4 p-4 rounded">Rate these movies!</h1>
        <div className="row ">
          <Movie {...Moon} />
          <Movie {...Rubber} />
          <Movie {...HH} />
        </div>
      </div>
    );
  }
}
