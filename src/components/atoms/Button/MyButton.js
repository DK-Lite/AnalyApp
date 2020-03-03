import React from 'react';
import { connect } from 'react-redux'; //Redux Main
import { actions as templateActions } from 'ducks/Template'; //Redux Actions

function MyButton(props){
    const { title } = props; // State
    const { ActionExample } = props;
    const handleClick = () =>{ ActionExample("str"); }
    return (
        <div>
            <button onClick={handleClick} >test</button>
        </div>)
}


//import { createStructuredSelector } from 'reselect'; // no selectors.js 
//import * as select from 'ducks/Template/selectors'
//export default connect(
//	state => {	
//		color: selectors.getColor(state),
//		items: selectors.getItems(state),
//		tasks: selectors.getTasks(state),
//		totalPrice: selectors.getTotalPriceWithItems(state),
//		totalWorkingTime: selctors.getTotalWorkingTimeWithTasks(state),
//	}, templateActions
//)(MyButton)


export default connect(
    state => state.template,
    templateActions
)(MyButton)