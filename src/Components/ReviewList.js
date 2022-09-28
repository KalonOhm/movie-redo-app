//a container inside of a Movie that houses Review components

//imports
import React, { Component } from "react";
import StarRating from "./StarRating";

export default class ReviewList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: props.name,
      text: props.text,
      rating: props.rating,
    };
    console.log(this.state);
  }

  render() {
    let reviews = [];
    let index = 0;
    console.log("is render functional?");
    if (this.state.reviews) {
      for (let Review of this.state.reviews) {
        index++;
        reviews.push(<ReviewList key={index} {...Review} />);
      }
    }

    return (
      <div className="card p-2" key="review-list">
        <h4>Reviews</h4>
        {this.props.reviewList.map((Review) => (
          <div className="col my-2 border">
              <StarRating {...Review.rating}/>
              {Review.text}
              <p className="text-end">- {Review.name}</p>
          </div>
        ))}
      </div>
    );
  }
}
