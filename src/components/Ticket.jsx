import React from 'react';
import PropTypes from 'prop-types';
import Likes from './Likes';
import Dislikes from './Dislikes';

function Ticket(props){
  
  return (

    <div>
      <h3>{props.location} - {props.names}</h3>
      <p><em>{props.issue}</em></p>
      <Likes /> 
      <Dislikes />
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