import React, { PureComponent } from 'react';
import './NewPost.css';
import Button from './../base/Button';

class NewPost extends PureComponent {

  constructor() {
    super();
    this.state = {
      value: '',
    };
  }

  _onChange = event => {
    this.setState({ value: event.target.value });
  }

  _onSend = () => {
    const { value } = this.state;
    const { send } = this.props;
    if (value) {
      this.setState({ value: '' }, () => {
        send(value);
      });
    }
  }

  render() {
    const { value } = this.state;
    return (
      <span className='NewPost'>
        <textarea autoFocus value={value} onChange={this._onChange} />
        <Button
          label={'Envoyer'}
          onPress={this._onSend} />
      </span>
    );
  }
}

export default NewPost;
