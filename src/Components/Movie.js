//a component that represents movie data (i.e. image, synopsis, rating, etc…)

//imports
import React, { Component } from "react";
import Review from "./Review";
//review list will list reviews
//review form will be a form, data will add a new review to review list

export default class Movie extends Component {
  //needs constructor
  constructor(props) {
    super(props);
    //says useless constructor, but they kept saying a constructor is needed. 
    //Idk. Leaving it in if it doesn't cause problems
  }

  render() {
    return (
      <div className="card col-4" key="movie">
        <h2 className="card-header">{this.props.Title}</h2>
        <br></br>
        <img className="rounded shadow" src={this.props.Poster} alt="Movie Poster" />
        <div className="card-body my-3" >
          {/* year released, rating, runtime, director */}
        
          Released: {this.props.YearReleased}
          <br></br>
          Director: {this.props.Director}
          <br></br>
          MPA Rating: {this.props.MpaRating}
          <br></br>
          Runtime: {this.props.Runtime}
          
          <hr></hr>
          <p>Synopsis: {this.props.Synopsis}</p>
        </div>
        <hr />
        <div>
          <Review />
        </div>
        <hr />
      </div>
    );
  }
}
