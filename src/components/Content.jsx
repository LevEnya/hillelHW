import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';

function Content(props) {
  console.log(props)
  return (
    <ul>
      {props.testPost.map(post=>{
        return<Comment commentTitle={post.title} commentBody={post.body}/>
      })}
    </ul>
  );
}


Content.propTypes = {
  testPost: PropTypes.array
}

export default Content;
