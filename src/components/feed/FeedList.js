import React, { PureComponent } from 'react';
import Post from './Post';

class FeedList extends PureComponent {

  shouldComponentUpdate(nextProps) {
    if (nextProps.posts.length !== this.props.posts.length) {
      return true;
    }

    return false;
  }

  render() {
    const { posts, remove } = this.props;
    return (
      <span>
        {posts.map((post, index) => {
          return (
            <Post
              key={index}
              content={post}
              onDeleteButtonClick={() => remove(index)} />
          );
        })}
      </span>
    )
  }
}

export default FeedList;
