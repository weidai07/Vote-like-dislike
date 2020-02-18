import React from 'react';
// import PropTypes from 'prop-types';
// import Ticket from './Ticket';

// function Likes(props){
//     return (
//       <div>
//         <p>{Ticket.likes}</p>
//         <button onClick={props.onLikeClick}>Like</button>
//       </div>
//     );
//   }
  
//   Likes.propTypes = {
//     onLikeClick: PropTypes.func
//   };
  
//   export default Likes;


class Likes extends React.Component {

  constructor(props){

    super(props);
    this.state ={
      likes: 0,
      updated: false
    };
    this.handleLikes = this.handleLikes.bind(this);
  }

  handleLikes() {

    if(!this.state.updated) {
      this.setState((prevState) => {
        return {
          likes: prevState.likes + 1,
          updated: true
        };
      });
    } else {

      this.setState((prevState) => {
        return {
          likes: prevState.likes - 1,
          updated: false
        };
      });
    }
  }

  render(){

    return(
      <div>
        <button onClick={this.handleLikes}>Like</button>
        <p>{this.state.likes}</p>
      </div>
    );
  }
}

export default Likes;
