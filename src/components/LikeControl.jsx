// import React from 'react';
// import Likes from 'likes';
// import Dislikes from 'Dislikes';
// import PropTypes from 'prop-types';

// class LikeControl extends React.Component {

//     constructor(props) {
//         super(props);
//         this.state = {
//             likeVisible: false
//         };
//         this.handleLikes = this.handleLikes.bind(this);
//     }

//     handleLikes() {
//         this.setState({likeVisible: true});
//     }

//     render(){
//     let currentlyVisibleLikes = null;
//     if (this.state.likeVisible) {
//         currentlyVisibleLikes = <Likes onLikes={this.props.onLikes} />;
//     } else {
//         currentlyVisibleLikes = <Dislikes onDislikes={this.handleLikes}/>
//     }
//     return (
//         <div>
//             {currentlyVisibleLikes}
//         </div>
//     );
//  }
// }

// LikeControl.propTypes = {
//     onLikes: PropTypes.func
// };

// export default LikeControl;