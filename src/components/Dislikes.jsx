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


class Dislikes extends React.Component {

  constructor(props){

    super(props);
    this.state ={
      dislikes: 0,
      updated: false
    };
    this.handleDislikes = this.handleDislikes.bind(this);
  }

  handleDislikes() {

    if(!this.state.updated) {
      this.setState((prevState) => {
        return {
          dislikes: prevState.dislikes + 1,
          updated: true
        };
      });
    } else {

      this.setState((prevState) => {
        return {
          dislikes: prevState.dislikes - 1,
          updated: false
        };
      });
    }
  }

  render(){

    return(
      <div>
        <button onClick={this.handleDislikes}>Dislike</button>
        <p>{this.state.dislikes}</p>
      </div>
    );
  }
}

export default Dislikes;
