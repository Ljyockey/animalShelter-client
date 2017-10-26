const initialState = {
  c: {},
  d: {}
};

export default (state=initialState, action) => {
    switch(action.animal) {
        case 'cat':
            state = Object.assign({}, state, {c: action.info})
            return state;
        case 'dog':
            state = Object.assign({}, state, {d: action.info})
            return state;
        default:
            return state;
    }
}