import { PPPFORM_POST } from '../actions/formAction';


let initalState = []

export default (state = initalState, action) => {
    switch (action.type) {
        case PPPFORM_POST:
            return [...state, ...action.payload]

        default:
            return state;
    }
}
