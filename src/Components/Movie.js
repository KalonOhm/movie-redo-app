//a component that represents movie data (i.e. image, synopsis, rating, etc…)

//imports
import React, { Component } from "react";
import ReviewForm from "./ReviewForm";
import ReviewList from "./ReviewList";
import Review from "./Review";
//review list will list reviews
//review form will be a form, data will add a new review to review list

export default class Movie extends Component {
  //needs constructor
  constructor(props) {
    super(props);
    //says useless constructor, but they kept saying a constructor is needed.
  }

  render() {
    return (
      <div className="card col-4" key="movie">
        <h2 className="card-header">{this.props.Title}</h2>
        <img className="rounded shadow" src={this.props.Poster} alt="Movie Poster" />
        <div className="card-body">
          {/* year released, rating, runtime, director */}
          <ul>
            <li>Released: {this.props.YearReleased}</li>

            <li>Director: {this.props.Director}</li>

            <li>MPA Rating: {this.props.MpaRating}</li>

            <li>Runtime: {this.props.Runtime}</li>
          </ul>
          <hr></hr>
          <p>Synopsis: {this.props.Synopsis}</p>
        </div>
        <br />
        <div>
          <Review />
        </div>
        {/* <div>
          <ReviewForm />
        </div> */}
        {/* <div>
          <ReviewList />
        </div> */}
      </div>
    );
  }
}
