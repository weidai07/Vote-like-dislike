import React from 'react';

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
