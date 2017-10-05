import React from 'react';
import PropTypes from 'prop-types';
import Button from './../base/Button';
import './Post.css';

const Post = ({ content, onDeleteButtonClick }) => (
  <div className='Post'>
    <p>{content}</p>
    <Button
      label={'Supprimer'}
      onPress={onDeleteButtonClick} />
  </div>
);

Post.propTypes = {
  content: PropTypes.string.isRequired,
  onDeleteButtonClick: PropTypes.func,
};

Post.defaultProps = {
  onDeleteButtonClick: () => {},
};

export default Post;
