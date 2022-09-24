//a container for all the Movie components and their data.

//imports
import React, { Component } from "react";
import Movie from "./Movie"; //need to pull in movies as the list is expected to display them

//export default class SomeClass extends React.Component {render()}
export default class MovieList extends Component {
  render() {
    //establishing properties of sample movies
    let sampleMovie = {
      Poster: null,
      Title: "Movie Title",
      Director: "Steve Spiels",
      Runtime: "120 min",
      MpaRating: "NC-17",
      YearReleased: 2001,
      id: 0,
      Synopsis: "buncha text",
    };
    let sampleMovie2 = {
      Poster: null,
      Title: "Movie Title 2",
      Director: "Steve Spiels",
      Runtime: "210 min",
      MpaRating: "G",
      YearReleased: 1990,
      id: 1,
      Synopsis: "buncha text again",
    };
    let sampleMovie3 = {
      Poster: null,
      Title: "Movie Title 2",
      Director: "Steve Spiels",
      Runtime: "210 min",
      MpaRating: "G",
      YearReleased: 1990,
      id: 1,
      Synopsis: "buncha text again",
    };

    //then create html. use spread operator {...} so each property
    //can be accessed individually withing the movie component instance
    return (
      <div className="container">
        <h1 className="mt-4 p-5 rounded">Rate these movies!</h1>
        <div className="row">
          <Movie {...sampleMovie} />
          <Movie {...sampleMovie2} />
          <Movie {...sampleMovie3} />
        </div>
      </div>
    );
  }
}
