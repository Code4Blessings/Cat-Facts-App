import React from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';
import { getFact } from '../actions';

//It is not necessary to add mapStateTpProps to App.js unless that is where it houses all the UI that is listed below where props are being passed.

const Fact = props => {
    return (
        <div>
            <h1>Some Wonderful Facts About Cats!!!</h1>
            {!props.text && !props.isLoading && <p>Go ahead! Get a cat fact <span role="img" aria-label="cat">😺</span></p>}
            {props.isLoading && (
                 <Loader type="Puff" color="#00BFFF" height={100} width={100}/>
            )} 
            {props.fact && <p>{props.fact.fact}</p>}
            <button onClick={props.getFact} >Cat Fact</button>
        </div>
    );
};

const mapStateToProps = state => {
  return {
    fact: state.fact,
    isLoading: state.isLoading,
    error: state.error
  }
}

export default connect(
    mapStateToProps, 
    { getFact }
)(Fact);