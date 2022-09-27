/* a form at the bottom of a Movie component that allows users to leave reviews. 
When submitted, the review should be added to the movie. All this data can be 
stored in an array, no networking or database needed for this assignment. */

//imports
import React, { Component } from "react";
import StarRating from './StarRating';


export default class ReviewForm extends Component {
  constructor(props) {
    super(props);
    //review starts blank
    this.state = {
      name: "",
      text: "",
      rating: 0, //no stars to start, but not 0
    };
  }

  onSubmit = (e) => {
    e.preventDefault(); //don't want submitting to reset page
    //this.props.myfunc(e);
    //console.log("this is my string", this.state.name);
    this.props.submitReview(
      this.state.name, //allows users to "sign" their review, instead of leaving anonymous
      this.state.text, //text content/paragraphs in review
      this.state.rating, //record of star rating
      ); 
    //then reset value here, not with the function call i was trying earlier (below)
    this.setState({
      name: '',
      text: '',
      rating: (0),
    });
    //const resetInput = { reviewer: "", reviewText: "" }; //reset input field to empty
    //resetInput();
  };

  //onChange each input needs an onChange property onChange={onChange etc}
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <>
        <h5> Add your review!</h5>
        <form className="form">
          <input
            className="form-control"
            name="name"
            type="text"
            onChange={this.onChange}
            value={this.state.name}
            label="User Name"
          />

          <textarea
            className="form-control"
            name="text"
            type='text'
            onChange={this.onChange}
            value={this.state.text}
            label="Write a review"
            rows="5"
          />

          <StarRating 
            className='form-control'
            name='rating'
            onChange={this.onChange}
            value={this.state.rating.value}
            label='Your rating out of 5'
          />

          <button className="btn btn-success" type="submit" onClick={this.onSubmit}>
            Submit Review
          </button>
        </form>
      </>
    );
  }
}
