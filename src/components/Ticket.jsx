import React from 'react';
import PropTypes from 'prop-types';
// import LikeControl from './LikeControl';
import Likes from './Likes';
// import { render } from 'react-dom';
import Dislikes from './Dislikes';

// class Toggle extends React.Componenet {
//   constructor(props) {
//     super(props);
//     this.state = {isToggleOn: true};

//     this.handleClick = this.handleClick.bind(this);
//   }
// }

// handleClick(); {
//   this.setState(prevState => ({
//     isToggleOn: !prevState.isToggleOn
//   }));
// }

// render() {
//   return (
//     <button onClick={this.handleClick}>
//       {this.state.isToggleOn ? 'Like'  : 'Dislike'}
//     </button>
//   );
// }
// }

// ReactDOM.render(
//   <Toggle />,
//   document.getElementById('root')
// );


function Ticket(props){
  
  return (

    <div>
      <h3>{props.location} - {props.names}</h3>
      <p><em>{props.issue}</em></p>
      <Likes /> 
      <Dislikes />
      {/* <button onClick={handleLikes}>Like</button>
    <button onClick={props.dislikes}>Dislike</button> */}
    
      {/* <button onClick={props.likes.value++} aria-label='like' color='primary'>Like</button>
      <button onClick={props.dislikes.value--} aria-label='dislike' color='danger'>Dislike</button> */}
      <hr/>
    </div>
  );
}


Ticket.propTypes = {
  names: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  issue: PropTypes.string,
  likes: PropTypes.number,
  dislikes: PropTypes.number
};

export default Ticket;