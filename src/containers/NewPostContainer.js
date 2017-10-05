import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { add } from './../actions/PostActions';
import NewPost from './../components/feed/NewPost';

export default connect(null, dispatch => ({
  send: bindActionCreators(add, dispatch)
}))(NewPost);
