export default function posts(state = [], action) {
  switch (action.type) {
    case 'POST@CREATE_COMPLETE':
      return [action.data, ...state];
    default:
      return state;
  }
}
