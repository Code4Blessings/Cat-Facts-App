import React from 'react';
import { connect } from 'react-redux';

const Text = props => {
    return (
        <div>
            <h1>Some Wonderful Facts About Cats!!!</h1>
            {!props.text && <p>Go ahead! Get a cat fact <span role="img" aria-label="cat">😺</span></p>}
            <button>Cat Fact</button>
        </div>
    );
};

const mapStateToProps = state => {
  return {
    text: state.text,
    isLoading: state.isLoading,
    error: state.error
  }
}

export default connect(
    mapStateToProps, 
    {}
)(Text);