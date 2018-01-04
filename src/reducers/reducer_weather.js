import { FETCH_WEATHER } from '../actions/index'

export default function(state = [], action) {
    switch (action.type) {
        case FETCH_WEATHER:
            // return state.concat([action.payload.data]);<----Allowed
            // return state.push([action.payload.data]);  <--Not allowed
            return[action.payload.data, ...state]; // <-- ES6 Syntax
    }
    return state;
}