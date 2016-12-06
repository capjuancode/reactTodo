import React from 'react';
import Store from '../flux/store';

export default class App extends React.Component {
  constructor() {
      super();
      this.getAll = this.getAll.bind(this);
      this.state = { store: Store.getAll() };
  }

  componentWillMount() {
    Store.on('change',  this.getAll);
  }

  componentWillUnmount() {
    Store.removeListener('change', this.getAll);
  }

  getAll() {
    this.setState({steps: Store.getAll()});
  }

  render() {
    let text = this.state.store;
    return (
      <div>
        <h1>{text}</h1>
      </div>
    );
  }
}
