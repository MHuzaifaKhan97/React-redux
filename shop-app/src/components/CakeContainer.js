import React, { Component } from 'react'

import { buyCake } from '../redux';
import { connect } from 'react-redux';

function CakeContainer(props) {
    return (
        <div>
            <h1>No Of Cakes: {props.noOfCakes}</h1>
            <button onClick={props.buyCake}>Buy Cake</button>
        </div>
    )
}

// Step no 01
const mapStatetoProps = (state) => {
    return {
        noOfCakes: state.noOfCakes
    }
}

// Step no 02
const mapDispatchToProps = (dispatch) => {
    return {
        buyCake: () => dispatch(buyCake())
    }
}

//Step no 03
export default connect(mapStatetoProps, mapDispatchToProps)(CakeContainer);

