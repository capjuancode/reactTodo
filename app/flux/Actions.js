import dispatcher from './dispatcher';

export function create(step) {
  dispatcher.dispatch({
    type: 'CREATE_STEP',
    step,
  });
}
