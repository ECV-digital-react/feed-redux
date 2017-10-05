import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import FeedList from './../components/feed/FeedList';
import { remove } from './../actions/PostActions';

export default connect(state => ({
  posts: state.postState
}), dispatch => ({
  remove: bindActionCreators(remove, dispatch)
}))(FeedList);
