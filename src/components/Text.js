import React from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';
import { getText } from '../actions';

const Text = props => {
    return (
        <div>
            <h1>Some Wonderful Facts About Cats!!!</h1>
            {!props.text && !props.isLoading && <p>Go ahead! Get a cat fact <span role="img" aria-label="cat">😺</span></p>}
            {props.isLoading && (
                 <Loader
                    type="Puff"
                    color="#00BFFF"
                    height={100}
                    width={100}
                />

            )} 
            <button onClick={props.getText} >Cat Fact</button>
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
    { getText }
)(Text);