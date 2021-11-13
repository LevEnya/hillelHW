import React from 'react';
import PropTypes from 'prop-types';

function Comment(props) {
  return (
    <li>
      <p>title</p>
      <p> {props.commentTitle} </p>
      <p>body</p>
      <p> {props.commentBody} </p>
      <hr/>
    </li>
  );
}


Comment.propTypes = {
  commentTitle: PropTypes.string,
  commentBody: PropTypes.string
}

export default Comment;
