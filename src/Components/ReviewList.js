//a container inside of a Movie that houses Review components

//imports
import React, { Component } from "react";
 import StarRating from "./StarRating";
// import Review from "./Review";

export default class ReviewList extends Component {
// constructor(props) {
// super(props);

//     this.state = {
//       name: props.name,
//       text: props.text,
//       rating: props.rating,
//     };
//     console.log(this.state)
// }

render() {
//      let reviews = [];
//      let index = 0;
//     console.log('is render functional?')
//     if (this.state.reviews) {
//       for (let Review of this.state.reviews) {
//         index++;
//         reviews.push(<ReviewList key={index} {...Review} />);
//       }
//      }

return (
<div className="card" key="review-list">
          <h3>Reviews</h3>
         {this.props.reviewlist.map((Review) => (
           <div>
            {Review.name}
             <StarRating {...Review.rating} />
              {Review.text}
           </div>
       ))}
</div>
);
}
}
