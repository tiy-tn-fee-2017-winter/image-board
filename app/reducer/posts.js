import _ from 'lodash';

export default function posts(state = [], action) {
  switch (action.type) {
    case 'POST@FINDALL_COMPLETE':
      return _.unionBy(action.data, state, '_id');
    case 'POST@FINDONE_COMPLETE':
      return _.unionBy([action.data], state, '_id');
    case 'POST@CREATE_COMPLETE':
      return _.unionBy([action.data], state, '_id');
    case 'POST@DESTROY_COMPLETE':
      return state.filter(p => p._id !== action.data._id);
    default:
      return state;
  }
}
