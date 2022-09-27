//A text review a user can leave on a movie.

//imports
import React, { Component } from "react";
import ReviewForm from "./ReviewForm";
import ReviewList from "./ReviewList";

export default class Review extends Component {

    constructor(props) {
        super(props);

        this.state = {
          reviewList: [
            {
            id: 0,
            name: "Kalon Ohmstede",
            text: "this is my review",
            rating: 4,
            }
          ],
        };
      }
    
      submitReview = (newName, newText, newRating) => {
        const newReview = {
          id: this.state.reviewList[this.state.reviewList.length - 1].id + 1,
          name: newName,
          text: newText,
          rating: newRating,
        };
        console.log("this is a new review", newReview);
    
        this.setState({ reviewList: this.state.reviewList.concat(newReview) });
      };
      
      
      render() {
        return (
          <>
            <div key="review">
              <br></br>
              <ReviewForm
                submitReview={this.submitReview}
                reviewList={this.state.reviewList}
              />
              {console.log(this.addReview)}
              {/* <ReviewList reviewList={this.state.reviewList} /> */}
              {console.log(this.state.reviewList)}
            </div>
          </>
        );
      }
    }
