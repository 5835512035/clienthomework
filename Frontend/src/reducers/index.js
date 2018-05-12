const initialState = {
  curriculums:[]
};

export default(state = initialState, action) => {
  switch (action.type) {
    case 'GET_CURRICULUM':
      return{
            ...state,
            curriculums:action.payload.data

      }

    default:
      return state;
  }
}
