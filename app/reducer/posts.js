export default function posts(state = [], action) {
  switch (action.type) {
    case 'POST@FINDALL_COMPLETE':
      return [...action.data, ...state];
    case 'POST@CREATE_COMPLETE':
      return [action.data, ...state];
    case 'POST@DESTROY_COMPLETE':
      return state.filter(p => p._id !== action.data._id);
    default:
      return state;
  }
}
