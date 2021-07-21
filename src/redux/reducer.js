const states = {
  navbar: {
    toggle: false,
  },
};
function reducer(state = states, action) {
  if (action.type === 'NAVBAR_OPEN') {
    return { ...state, toggle: true };
  }
  if (action.type === 'NAVBAR_CLOSE') {
    return { ...state, toggle: false };
  }
  return state;
}

export default reducer;
