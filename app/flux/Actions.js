import dispatcher from './dispatcher';

export function getAll() {
  dispatcher.dispatch({
    type: 'GET_ALL'
  });
}
