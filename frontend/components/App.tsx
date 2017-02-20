import * as React from 'react';

import {connect} from 'react-redux'
import Greetings from './Greetings';


const mapStateToProps = (state) => {
    return state;
}

const mapDispatchToProps = (dispatch) => {
    return {
        onMount: () => {
            fetch("/greetings/1").then((response) => {
                return response.json();
            }).then((json) => {
                dispatch({type: 'FETCH_GREETING', text: json.greeting})
            });
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Greetings);